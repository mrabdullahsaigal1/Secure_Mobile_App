import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from '../../../utils/scaling';

export default function Subscription() {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.subscriptionTxt}>SUBSCRIPTION PLAN</Text>
        <View style={styles.banner}>
          <Image
            source={require('../../../assets/icons/banner.jpeg')}
            style={styles.img}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    height: verticalScale(80),
    width: scale(80),
    borderRadius: scale(40),
    resizeMode: 'contain',
    alignSelf: 'center',
    position: 'absolute',
    bottom: verticalScale(-40),
  },
  img: {
    height: verticalScale(80),
    width: scale(80),
    resizeMode: 'cover',
    borderRadius: scale(40),
  },
  container: {
    height: '25%',
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subscriptionTxt: {
    color: 'white',
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    letterSpacing: moderateScale(1.5),
  },
});
