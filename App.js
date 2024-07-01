import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  PermissionsAndroid,
  Platform,
  Alert,
  StyleSheet,
  View,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';
import Navigation from './src/routes/Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from 'react-native-geolocation-service';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const {IncorrectPasswordListener} = NativeModules;

const App = () => {
  const frontCameraRef = useRef(null);
  const backCameraRef = useRef(null);
  const devices = useCameraDevices();
  const frontDevice = devices.front;
  const backDevice = devices.back;
  const [showCamera, setShowCamera] = useState(false);

  const captureAndSaveData = useCallback(async () => {
    if (frontDevice && backDevice) {
      const frontPhoto = await frontCameraRef.current.takePhoto({
        qualityPrioritization: 'quality',
      });
      const backPhoto = await backCameraRef.current.takePhoto({
        qualityPrioritization: 'quality',
      });

      Geolocation.getCurrentPosition(
        async position => {
          const currentLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          const timestamp = new Date().toISOString();

          const imageData = {
            frontPhotoUri: frontPhoto.path,
            backPhotoUri: backPhoto.path,
            location: currentLocation,
            date: timestamp,
          };

          const images = JSON.parse(await AsyncStorage.getItem('images')) || [];
          images.push(imageData);
          await AsyncStorage.setItem('images', JSON.stringify(images));

          Alert.alert(
            'Image Captured',
            `Location: ${currentLocation.latitude}, ${currentLocation.longitude}\nDate: ${timestamp}`,
          );
        },
        error => {
          console.error('Error obtaining location:', error);
          Alert.alert('Error', 'Failed to get location');
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } else {
      Alert.alert('Error', 'Camera devices are not ready');
    }
  }, [frontDevice, backDevice]);

  useEffect(() => {
    const incorrectPasswordListenerEmitter = new NativeEventEmitter(
      IncorrectPasswordListener,
    );
    const subscription = incorrectPasswordListenerEmitter.addListener(
      'IncorrectPasswordAttempt',
      () => {
        Alert.alert('Alert', 'Incorrect password attempt detected!');
        setShowCamera(true);
        captureAndSaveData();
        IncorrectPasswordListener.removeListeners(1);
      },
    );

    return () => {
      subscription.remove();
    };
  }, [captureAndSaveData]);

  useEffect(() => {
    const checkPermissions = async () => {
      if (Platform.OS === 'android') {
        const cameraGranted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message:
              'This app needs access to your camera to function properly.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        const locationGranted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (
          cameraGranted === PermissionsAndroid.RESULTS.GRANTED &&
          locationGranted === PermissionsAndroid.RESULTS.GRANTED
        ) {
          setShowCamera(true);
        } else {
          Alert.alert(
            'Permissions Required',
            'Please grant camera and location permissions to use this app.',
          );
        }
      }
    };

    checkPermissions();
  }, []);

  return (
    <View style={styles.container}>
      <Navigation />
      {showCamera && frontDevice && backDevice && (
        <>
          <Camera
            style={styles.hidden}
            device={frontDevice}
            isActive={true}
            ref={frontCameraRef}
            photo={true}
          />
          <Camera
            style={styles.hidden}
            device={backDevice}
            isActive={true}
            ref={backCameraRef}
            photo={true}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hidden: {
    width: 0,
    height: 0,
    position: 'absolute',
  },
});

export default App;
