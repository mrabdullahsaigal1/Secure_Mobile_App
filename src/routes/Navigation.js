import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import {colors} from '../theme/colors';
import {moderateScale, verticalScale, scale} from '../utils/scaling';
import Home from '../screens/Main/Home/Home';
import FindPhone from '../screens/Main/FindPhone/FindPhone';
import Settings from '../screens/Main/Setting/Settings';
import Support from '../screens/Main/Support/Support';
import FeatureDetails from '../screens/Main/Feature/FeatureDetails';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Profile from '../screens/Main/Home/Drawer/Profile';
import ContactBackup from '../screens/Main/Home/Drawer/ContactBackup';
import MyWallet from '../screens/Main/Home/Drawer/MyWallet';
import Refferal from '../screens/Main/Home/Drawer/Refferal';
import ResetPassword from '../screens/Main/Home/Drawer/ResetPassword';
import WrongPassword from '../screens/Main/Home/Drawer/WrongPassword';
import Terms from '../screens/Main/Home/Drawer/Terms';
import Help from '../screens/Main/Home/Drawer/Help';
import SplashScreen from '../screens/Main/SplashScreen';
import WrongPin from '../screens/Main/Feature/WrongPin';
import DontTouchMyPhone from '../screens/Main/Feature/DontTouchMyPhone';
import ChargingProtection from '../screens/Main/Feature/ChargingProtection';
import PocketThiefMode from '../screens/Main/Feature/PocketThiefMode';
import UsbEject from '../screens/Main/Feature/UsbEject';
import DoNotPowerOff from '../screens/Main/Feature/DoNotPowerOff';
import SosButton from '../screens/Main/Feature/SosButton';
import EmergencyContact from '../screens/Main/Feature/EmergencyContact';
import Subscription from '../screens/Main/Feature/Subscription';
import Notification from '../screens/Main/Feature/Notification';
import WrongPassHistory from '../screens/Main/Feature/WrongPassHistory';
import ImeiCheck from '../screens/Main/Feature/ImeiCheck';
import MyReferralsScreen from '../screens/Main/Home/Drawer/MyReferralsScreen';
import LostPhone from '../screens/Main/Feature/LostPhone';
import Reactivation from '../screens/Main/Feature/Reactivation';
import WrongPinFAQ from '../screens/Main/Support/WrongPinFAQ';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Tabarr = [
  {
    route: 'Home',
    label: 'Home',
    component: Home,
    activeIcon: 'home',
    inactiveIcon: 'home-outline',
    type: Ionicons,
  },
  {
    route: 'Support',
    label: 'Support',
    component: Support,
    activeIcon: 'infocirlce',
    inactiveIcon: 'infocirlceo',
    type: AntDesign,
  },
];

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="DrawerScreen">
        <Stack.Screen name="DrawerScreen" component={DrawerScreen} />
        <Stack.Screen name="FeatureDetails" component={FeatureDetails} />
        <Stack.Screen name="wrongPinLock" component={WrongPin} />
        <Stack.Screen name="dontTouchMyPhone" component={DontTouchMyPhone} />
        <Stack.Screen name="pocketThiefMode" component={PocketThiefMode} />
        <Stack.Screen name="usbEject" component={UsbEject} />
        <Stack.Screen name="doNotPowerOff" component={DoNotPowerOff} />
        <Stack.Screen name="sosButton" component={SosButton} />
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="imeiCheck" component={ImeiCheck} />
        <Stack.Screen name="lostPhoneReporter" component={LostPhone} />
        <Stack.Screen name="foundPhoneReactivation" component={Reactivation} />
        <Stack.Screen name="WrongPinFAQ" component={WrongPinFAQ} />
        <Stack.Screen
          name="emergencyContact"
          component={EmergencyContact}
          options={{title: 'Add Emergency Contacts'}}
        />
        <Stack.Screen name="subscription" component={Subscription} />
        <Stack.Screen
          name="notification"
          component={Notification}
          options={{title: 'Freind Emergency Notifications'}}
        />
        <Stack.Screen
          name="wrongPassHistory"
          component={WrongPassHistory}
          options={{title: 'Wrong Password Entery Details'}}
        />
        <Stack.Screen
          name="chargingProtection"
          component={ChargingProtection}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//

const TabButton = ({item, onPress, accessibilityState}) => {
  const {selected} = accessibilityState;
  const ViewRef = useRef(null);

  useEffect(() => {
    if (selected) {
      ViewRef.current.animate({
        0: {scale: 0.5, rotate: '0deg'},
        1: {scale: 1.5, rotate: '360deg'},
      });
    } else {
      ViewRef.current.animate({
        0: {scale: 1.5, rotate: '360deg'},
        1: {scale: 1, rotate: '0deg'},
      });
    }
  }, [selected]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={1}>
      <Animatable.View ref={ViewRef} duration={800} style={[styles.btn]}>
        <item.type
          name={selected ? item.activeIcon : item.inactiveIcon}
          color={colors.white}
          size={moderateScale(20)}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: verticalScale(50),
          backgroundColor: colors.midnightblue,
          overflow: 'hidden',
          borderTopRightRadius: moderateScale(25),
          borderTopLeftRadius: moderateScale(25),
          elevation: 5,
        },
      }}>
      {Tabarr.map((item, index) => (
        <Tab.Screen
          component={item.component}
          key={index}
          name={item.label}
          options={{
            tabBarShowLabel: false,
            tabBarButton: props => <TabButton {...props} item={item} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const CustomDrawerContent = props => {
  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logout pressed');
  };
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/icons/banner.jpeg')}
          style={styles.logo}
        />
      </View>
      <DrawerItemList {...props} />
      <TouchableOpacity style={styles.logoutContainer} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          fontSize: moderateScale(16),
          fontWeight: 'bold',
          color: colors.midnightblue,
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="MainScreen"
        component={MainScreen}
        options={{title: 'Home'}}
      />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen
        name="ContactBackup"
        component={ContactBackup}
        options={{title: 'Contact Backup'}}
      />
      <Drawer.Screen
        name="MyWallet"
        component={MyWallet}
        options={{title: 'My Wallet'}}
      />
      <Drawer.Screen
        name="Refferal"
        component={Refferal}
        options={{title: 'Refferal'}}
      />
      <Drawer.Screen
        name="MyReferralsScreen"
        component={MyReferralsScreen}
        options={{title: 'My Referrals'}}
      />
      <Drawer.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{title: 'Reset Password'}}
      />
      <Drawer.Screen
        name="WrongPassword"
        component={WrongPassword}
        options={{title: 'Wrong Password Entery Details'}}
      />
      <Drawer.Screen
        name="Terms"
        component={Terms}
        options={{title: 'Terms of use'}}
      />
      <Drawer.Screen name="Help" component={Help} options={{title: 'Help'}} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.midnightblue,
    overflow: 'hidden',
    elevation: 5,
  },
  btn: {
    height: verticalScale(40),
    width: scale(40),
    borderRadius: moderateScale(25),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  label: {
    color: 'white',
    fontSize: moderateScale(8),
    fontWeight: 'bold',
    marginTop: verticalScale(5),
  },
  logo: {
    width: '100%',
    height: verticalScale(180),
    resizeMode: 'cover',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoutContainer: {
    paddingHorizontal: scale(16),
    height: verticalScale(40),
    justifyContent: 'center',
  },
  logoutText: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: colors.midnightblue,
  },
});

export default Navigation;
