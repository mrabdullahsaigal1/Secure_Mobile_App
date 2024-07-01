import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../../../../theme/colors';
import {moderateScale, scale, verticalScale} from '../../../../utils/scaling';

export default function WrongPassword({navigation}) {
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
        <View style={styles.label}>
          <Text style={styles.headingtxt}>Date</Text>
        </View>
        <View style={styles.label}>
          <Text style={styles.headingtxt}>Front Image</Text>
        </View>
        <View style={styles.label}>
          <Text style={styles.headingtxt}>Back Image</Text>
        </View>
        <View style={styles.label}>
          <Text style={styles.headingtxt}>Location</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    height: verticalScale(50),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: moderateScale(15),
  },
  label: {
    height: verticalScale(30),
    width: '25%',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingtxt: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: 'black',
  },
});
