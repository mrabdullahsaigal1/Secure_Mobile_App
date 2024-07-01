import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Switch,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  NativeModules,
  NativeEventEmitter
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../../theme/colors';
import {moderateScale, scale, verticalScale} from '../../../utils/scaling';
import feature from '../../../data/feature';
import LocationService from '../../../components/LocationService';
import FeatureDetails from '../../../screens/Main/Feature/FeatureDetails';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}) => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [watchId, setWatchId] = useState(null);
  const [isEnabled, setIsEnabled] = useState({
    sos: false,
    batteryAlert: false,
    accidentAlert: false,
    wrongPinLock: false,
    dontTouchPhone: false,
    chargingProtection: false,
    pcketTheif: false,
    contactBackUp: false,
    usebEject: false,
    donotPowerOff: false,
  });

  const toggleSwitch = key => {
    setIsEnabled(prevState => ({...prevState, [key]: !prevState[key]}));
  };

  const uniqueCategories = [...new Set(feature.map(item => item.category))];

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const locationGranted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app requires access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        const backgroundLocationGranted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
          {
            title: 'Background Location Permission',
            message:
              'This app requires access to your location in the background.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        const cameraGranted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'This app requires access to your camera.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        const microphoneGranted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'Microphone Permission',
            message: 'This app requires access to your microphone.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (
          locationGranted === PermissionsAndroid.RESULTS.GRANTED &&
          backgroundLocationGranted === PermissionsAndroid.RESULTS.GRANTED &&
          cameraGranted === PermissionsAndroid.RESULTS.GRANTED &&
          microphoneGranted === PermissionsAndroid.RESULTS.GRANTED
        ) {
          startLocationTracking();
        } else {
          console.log('Some permissions denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const startLocationTracking = () => {
    LocationService();
  };

  const stopLocationTracking = () => {
    if (watchId !== null) {
      Geolocation.clearWatch(watchId);
      setWatchId(null);
    }
  };

  useEffect(() => {
  
    if (Platform.OS === 'android') {
 
      requestPermissions();
    } else {
      startLocationTracking();
    }

    return () => {
      stopLocationTracking();
    };
  }, []);

  const getGreetingMessage = () => {
    const currentTime = new Date().getHours();

    if (currentTime < 12) {
      return 'Good morning.';
    } else if (currentTime < 18) {
      return 'Good afternoon.';
    } else {
      return 'Good evening.';
    }
  };
  
  //

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <FontAwesome6
            name="square-poll-horizontal"
            size={30}
            color={colors.midnightblue}
          />
        </TouchableOpacity>
        <View style={styles.rightHeader}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <FontAwesome
              name="user-circle"
              size={30}
              color={colors.midnightblue}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons
              name="notifications"
              size={30}
              color={colors.midnightblue}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <FontAwesome
              name="power-off"
              size={30}
              color={colors.midnightblue}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.greetingTxt}>Hey! {getGreetingMessage()}</Text>
      </View>

      <View>
        {uniqueCategories.map((category, index) => (
          <View key={index} style={styles.mainContainer}>
            <Text style={styles.categoryTxt}>{category}</Text>
            <ScrollView
              contentContainerStyle={[
                styles.categoryContainer,
                category === 'Goverment Reporting Tools' && {
                  flexDirection: 'row',
                  flexWrap: 'nowrap',
                  width: scale(500),
                },
              ]}
              horizontal={category === 'Goverment Reporting Tools'}
              showsHorizontalScrollIndicator={false}>
              {feature
                .filter(item => item.category === category)
                .map((item, idx) => {
                  return (
                    <View key={idx} style={[styles.featureContainer]}>
                      <View style={styles.logoContainer}>
                        <Image
                          source={item.logo}
                          style={{height: 30, width: 30}}
                        />
                        {category === 'Goverment Reporting Tools' ||
                        category === 'Find and Control Your Phone' ? (
                          <TouchableOpacity style={styles.arrowBtn}>
                            <Feather
                              name="external-link"
                              size={20}
                              color="black"
                            />
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity
                            style={styles.arrowBtn}
                            onPress={() =>
                              navigation.navigate(item.featureId, {
                                featureDetails: item,
                                isEnabled: isEnabled[item.id],
                              })
                            }>
                            <FontAwesome6
                              name="angle-right"
                              size={15}
                              color="black"
                            />
                          </TouchableOpacity>
                        )}
                      </View>
                      <View style={styles.detailsContainer}>
                        <Text
                          style={[
                            styles.txt,
                            {fontWeight: '600', fontSize: moderateScale(12)},
                          ]}>
                          {item.featureName}
                        </Text>
                        <Text numberOfLines={3} style={styles.txt}>
                          {item.descriptions}
                        </Text>
                      </View>
                      {category === 'Government Reporting Tools' ||
                        category === 'Find and Control Your Phone' ||
                        category === 'Additional Setting' || (
                          <View style={styles.switchContainer}>
                            <Switch
                              trackColor={{false: '#767577', true: '#81b0ff'}}
                              thumbColor={
                                isEnabled[item.id] ? colors.white : '#f4f3f4'
                              }
                              ios_backgroundColor="#3e3e3e"
                              onValueChange={() => toggleSwitch(item.id)}
                              value={isEnabled[item.id]}
                            />
                          </View>
                        )}
                    </View>
                  );
                })}
            </ScrollView>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
//

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: scale(20),
  },
  header: {
    height: verticalScale(60),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greetingTxt: {
    fontSize: moderateScale(25),
    fontWeight: 'bold',
    color: colors.midnightblue,
    marginVertical: verticalScale(10),
  },
  featureContainer: {
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginVertical: verticalScale(10),
    height: verticalScale(180),
    width: scale(138),
    backgroundColor: colors.white,
    borderRadius: moderateScale(10),
    elevation: 5,
    padding: verticalScale(10),
  },
  detailsContainer: {
    width: '80%',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(10),
  },
  mainContainer: {
    marginBottom: verticalScale(20),
  },
  categoryTxt: {
    fontSize: moderateScale(18),
    fontWeight: '800',
    color: 'black',
    margin: verticalScale(10),
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  arrowBtn: {
    height: verticalScale(30),
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: 'black',
    fontSize: moderateScale(10),
  },
  rightHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '35%',
  },
});
