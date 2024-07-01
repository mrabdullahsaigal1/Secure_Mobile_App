import {NativeModules, DeviceEventEmitter} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const LocationService = () => {
  Geolocation.watchPosition(
    position => {
      const {latitude, longitude} = position.coords;
      //   console.log(`Background Location Update: ${latitude}, ${longitude}`);
    },
    error => {
      console.error(error);
    },
    {
      enableHighAccuracy: true,
      distanceFilter: 0,
      interval: 5000,
      fastestInterval: 2000,
    },
  );
};

export default LocationService;
