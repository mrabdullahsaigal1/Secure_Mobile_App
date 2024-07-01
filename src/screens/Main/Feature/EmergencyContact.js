import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../../../theme/colors';
import {moderateScale, scale, verticalScale} from '../../../utils/scaling';

export default function EmergencyContact({navigation}) {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: colors.midnightblue,
      },
      headerTintColor: '#fff',
    });
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.txt}>
          Add your emergency contacts so that we could alert your close contacts
          in case of any emergency
        </Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Add Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    height: verticalScale(40),
    width: scale(90),
    backgroundColor: colors.midnightblue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: verticalScale(10),
    marginVertical: verticalScale(10),
  },
  btnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: verticalScale(14),
  },
  container: {
    height: '90%',
    width: '80%',
    alignItems: 'center',
  },
  txt: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: colors.midnightblue,
  },
});
