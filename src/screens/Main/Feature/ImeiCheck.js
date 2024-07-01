import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {colors} from '../../../theme/colors';
import {moderateScale, verticalScale} from '../../../utils/scaling';

const ImeiCheck = () => {
  const [imei, setImei] = useState('');
  const [result, setResult] = useState(null);

  const validateIMEI = imei => {
    if (/^\d{15}$/.test(imei)) {
      setResult('Valid IMEI');
    } else {
      setResult('Invalid IMEI');
    }
  };

  const handleCheckIMEI = () => {
    validateIMEI(imei);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>IMEI Check</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter IMEI number"
        value={imei}
        onChangeText={setImei}
        keyboardType="numeric"
        maxLength={15}
      />
      <Button
        title="Check IMEI"
        onPress={handleCheckIMEI}
        color={colors.midnightblue}
      />
      {result && <Text style={styles.result}>{result}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: verticalScale(16),
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: verticalScale(20),
  },
  input: {
    height: verticalScale(40),
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: verticalScale(25),
    paddingHorizontal: 8,
    fontSize: moderateScale(16),
  },
  result: {
    marginVertical: verticalScale(20),
    fontSize: moderateScale(16),
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
  },
});

export default ImeiCheck;
