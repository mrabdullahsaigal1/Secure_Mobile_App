import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {scale, verticalScale} from '../../utils/scaling';

export default function Login() {
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  async function signInWithPhoneNumber(phoneNumber) {
    console.log('executed');
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      console.log(confirmation);
    } catch (error) {
      console.log('error : ', error);
    }
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        value={phoneNumber}
        onChangeText={txt => setPhoneNumber(txt)}
        placeholder="Enter phone number"
        placeholderTextColor={'lightgrey'}
        style={styles.input}
      />
      <View style={{marginVertical: verticalScale(10)}}>
        <Button
          title="Login"
          onPress={() => signInWithPhoneNumber(`+91${phoneNumber}`)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: verticalScale(50),
    width: scale(200),
    borderColor: 'lightgrey',
    borderWidth: 0.5,
    borderRadius: verticalScale(10),
    paddingHorizontal: verticalScale(10),
  },
});
