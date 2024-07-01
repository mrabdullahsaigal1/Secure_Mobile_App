import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../../../../theme/colors';
import {moderateScale, verticalScale} from '../../../../utils/scaling';

export default function MyWallet({navigation}) {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: colors.midnightblue,
      },
      headerTintColor: colors.white,
    });
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.priceContainer}>
        <Text
          style={[
            styles.btnTxt,
            {color: colors.midnightblue, marginVertical: verticalScale(20)},
          ]}>
          ₹ 0.00
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>₹ Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>₹ Recharge</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt} numberOfLines={1}>
              ₹ Recharge History
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.miniContainer}>
          <Text
            style={{
              color: colors.midnightblue,
              fontSize: moderateScale(14),
              fontWeight: '600',
            }}>
            Balance : ₹ 00
          </Text>
        </View>
        <View style={styles.miniContainer}>
          <Text
            style={{
              color: colors.midnightblue,
              fontSize: moderateScale(14),
              fontWeight: '600',
            }}>
            Activation date :
          </Text>
        </View>
        <View style={styles.miniContainer}>
          <Text
            style={{
              color: colors.midnightblue,
              fontSize: moderateScale(14),
              fontWeight: '600',
            }}>
            Expiry date :
          </Text>
        </View>
      </View>
      <Text style={styles.walletTxt}>Wallet History</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  priceContainer: {
    height: '20%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  btnContainer: {
    width: '90%',
    height: verticalScale(35),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btn: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.midnightblue,
    borderRadius: verticalScale(10),
    width: '30%',
    elevation: 5,
  },
  btnTxt: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: verticalScale(14),
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: verticalScale(35),
    alignContent: 'center',
  },
  walletTxt: {
    textAlign: 'center',
    marginVertical: verticalScale(10),
    color: colors.midnightblue,
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  miniContainer: {
    height: '100%',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: moderateScale(5),
    borderColor: colors.midnightblue,
  },
});
