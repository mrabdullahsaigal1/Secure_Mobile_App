import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../theme/colors';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {moderateScale, scale, verticalScale} from '../../../utils/scaling';

export default function style() {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.white,
    },
    section: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: scale(20),
      height: verticalScale(60),
    },
    arrow: {
      paddingRight: scale(30),
    },
    txt: {
      fontSize: moderateScale(18),
      fontWeight: 'bold',
      color: colors.midnightblue,
      width: '80%',
    },
    banner: {
      height: verticalScale(200),
      width: '100%',
      resizeMode: 'cover',
    },
  });
}
