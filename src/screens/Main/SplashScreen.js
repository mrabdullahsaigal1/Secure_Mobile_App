import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Animated, Image} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../utils/scaling';

const SplashScreen = ({navigation}) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('DrawerScreen');
    }, 5000);
  }, []);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/banner.jpeg')}
        style={{
          height: '25%',
          width: '100%',
          resizeMode: 'cover',
          position: 'absolute',
          top: 0,
        }}
      />
      <Animated.Text style={[styles.mainText, {opacity: fadeAnim}]}>
        Refer and Earn
      </Animated.Text>
      <View style={styles.termsContainer}>
        <Animated.Text style={[styles.subText, {opacity: fadeAnim}]}>
          Refer this App with Freinds and Family and get Reward ₹25 per month
          <Text
            style={styles.termTxt}
            onPress={() => navigation.navigate('Terms')}>
            T & C Apply{' '}
          </Text>
        </Animated.Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'linear-gradient(135deg, #72EDF2 10%, #5151E5 100%)',
  },
  mainText: {
    fontSize: moderateScale(32),
    fontWeight: 'bold',
    color: 'black',
    marginVertical: verticalScale(20),
  },
  subText: {
    fontSize: moderateScale(16),
    color: 'black',
  },
  confetti: {
    width: scale(300),
    height: verticalScale(300),
  },
  termTxt: {
    color: '#5188c7',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#5188c7',
    fontSize: moderateScale(14),
    fontWeight: 'bold',
  },
  termsContainer: {
    width: '80%',
    height: verticalScale(100),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: verticalScale(10),
    paddingHorizontal: scale(10),
  },
});

export default SplashScreen;
