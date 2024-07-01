import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {colors} from '../../../../theme/colors';
import {moderateScale, scale, verticalScale} from '../../../../utils/scaling';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native-animatable';

export default function ResetPassword({navigation}) {
  const correctPin = '1234';
  const [enteredPin, setEnteredPin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: colors.midnightblue,
      },
      headerTintColor: colors.white,
    });
  }, []);

  const handlePinPress = number => {
    if (enteredPin.length < 4) {
      setEnteredPin(enteredPin + number);
    }
  };

  const handleDeletePress = () => {
    if (enteredPin.length > 0) {
      setEnteredPin(enteredPin.slice(0, -1));
    }
  };

  const handlePinEntry = () => {
    if (enteredPin === correctPin) {
      Alert.alert('Correct PIN', 'PIN is correct!');
      setEnteredPin('');
    } else {
      Alert.alert('Incorrect PIN', 'Please try again.');
      setEnteredPin('');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/icons/banner.jpeg')}
        style={{
          height: verticalScale(100),
          width: scale(100),
          borderRadius: moderateScale(80),
          resizeMode: 'cover',
        }}
      />
      <Text style={styles.title}>Enter Your PIN</Text>
      <View style={styles.pinContainer}>
        <View style={styles.pinDisplay}>
          {[...Array(4)].map((_, index) => (
            <View
              key={index}
              style={[
                styles.pinDigit,
                enteredPin.length > index && styles.filledPin,
              ]}
            />
          ))}
        </View>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          {[1, 2, 3].map(number => (
            <TouchableOpacity
              key={number}
              style={styles.button}
              onPress={() => handlePinPress(number)}>
              <Text style={styles.buttonText}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.buttonRow}>
          {[4, 5, 6].map(number => (
            <TouchableOpacity
              key={number}
              style={styles.button}
              onPress={() => handlePinPress(number)}>
              <Text style={styles.buttonText}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.buttonRow}>
          {[7, 8, 9].map(number => (
            <TouchableOpacity
              key={number}
              style={styles.button}
              onPress={() => handlePinPress(number)}>
              <Text style={styles.buttonText}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={[styles.buttonRow, {justifyContent: 'flex-end'}]}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePinPress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleDeletePress}>
            <Ionicons name="arrow-back" color="white" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: moderateScale(25),
    fontWeight: 'bold',
    marginVertical: verticalScale(20),
    color: colors.midnightblue,
  },
  pinContainer: {
    alignItems: 'center',
    marginVertical: verticalScale(10),
  },
  pinDisplay: {
    flexDirection: 'row',
    marginVertical: verticalScale(2),
  },
  pinDigit: {
    width: scale(30),
    height: verticalScale(30),
    backgroundColor: '#dcdcdc',
    borderRadius: verticalScale(30),
    marginHorizontal: scale(5),
  },
  filledPin: {
    backgroundColor: colors.midnightblue,
  },
  errorMessage: {
    color: 'red',
    marginBottom: verticalScale(10),
  },
  buttonContainer: {
    marginBottom: verticalScale(15),
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: verticalScale(10),
  },
  button: {
    backgroundColor: colors.midnightblue,
    height: verticalScale(40),
    width: scale(40),
    marginHorizontal: scale(5),
    borderRadius: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: moderateScale(18),
    textAlign: 'center',
  },
});
