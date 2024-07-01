import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../theme/colors';
import {moderateScale, scale, verticalScale} from '../../../utils/scaling';

export default function FindPhone({navigation}) {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={25} color={colors.midnightblue} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Find your Phone</Text>
      </View>
      <View style={styles.instruction}>
        <Text style={styles.txtBold}>How to use it</Text>
        <Text style={styles.txtLight}>
          Go to cell security dashboard and click "Alarm" to use "Find my phone
          Feature"
        </Text>
      </View>
      <Image
        source={require('../../../assets/icons/phone1.jpg')}
        style={styles.phoneIMage}
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTxt}>PROCEED</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    width: '100%',
    height: verticalScale(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(15),
  },
  instruction: {
    marginVertical: verticalScale(20),
    paddingHorizontal: scale(30),
    height: verticalScale(100),
    justifyContent: 'space-evenly',
  },
  txtBold: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: colors.midnightblue,
  },
  txtLight: {
    fontSize: moderateScale(13),
    color: colors.midnightblue,
  },
  btn: {
    width: scale(250),
    height: verticalScale(50),
    backgroundColor: colors.midnightblue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    alignSelf: 'center',
  },
  btnTxt: {
    fontWeight: 'bold',
    fontSize: moderateScale(14),
    color: 'white',
  },
  phoneIMage: {
    height: verticalScale(250),
    width: scale(300),
    alignSelf: 'center',
    marginVertical: verticalScale(20),
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: scale(18),
    fontWeight: 'bold',
    color: colors.midnightblue,
    marginLeft: scale(15),
  },
});
