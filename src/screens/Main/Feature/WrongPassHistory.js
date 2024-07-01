import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors} from '../../../theme/colors';
import {moderateScale, verticalScale} from '../../../utils/scaling';

export default function WrongPassHistory({navigation}) {
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: colors.midnightblue,
      },
      headerTintColor: '#fff',
    });

    // Fetch data from AsyncStorage when the component mounts
    const fetchAttempts = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const attemptKeys = keys.filter(key => key.startsWith('incorrectPasswordAttempt_'));
        const attemptValues = await AsyncStorage.multiGet(attemptKeys);
        const attemptsData = attemptValues.map(([key, value]) => JSON.parse(value));
        setAttempts(attemptsData);
      } catch (error) {
        console.error('Error fetching data from AsyncStorage:', error);
      }
    };

    fetchAttempts();
  }, [navigation]);

  return (
    <ScrollView style={styles.screen}>
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
      {attempts.map((attempt, index) => (
        <View key={index} style={styles.attemptContainer}>
          <View style={styles.attemptLabel}>
            <Text style={styles.attemptText}>{attempt.date}</Text>
          </View>
          <View style={styles.attemptLabel}>
            <Image
              source={{uri: `data:image/jpeg;base64,${attempt.frontPicture}`}}
              style={styles.image}
            />
          </View>
          <View style={styles.attemptLabel}>
            <Image
              source={{uri: `data:image/jpeg;base64,${attempt.backPicture}`}}
              style={styles.image}
            />
          </View>
          <View style={styles.attemptLabel}>
            <Text style={styles.attemptText}>
              {attempt.location.latitude}, {attempt.location.longitude}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
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
  attemptContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: moderateScale(15),
    borderWidth: 1,
    borderColor: 'black',
    marginTop: verticalScale(10),
  },
  attemptLabel: {
    height: verticalScale(50),
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  attemptText: {
    fontSize: moderateScale(14),
    color: 'black',
  },
  image: {
    width: 50,
    height: 50,
  },
});
