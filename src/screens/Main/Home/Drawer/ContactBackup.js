// src/ContactBackupPage.js

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Switch,
} from 'react-native';
import {colors} from '../../../../theme/colors';
import {moderateScale, scale, verticalScale} from '../../../../utils/scaling';

const ContactBackupPage = ({navigation}) => {
  const [isBackupEnabled, setIsBackupEnabled] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: colors.midnightblue,
      },
      headerTintColor: colors.white,
    });
  }, []);

  const handleBackup = () => {
    if (isBackupEnabled) {
      Alert.alert('Backup', 'Contacts are being backed up!');
    } else {
      Alert.alert('Backup', 'Please enable backup to proceed.');
    }
  };

  const handleCleanBackup = () => {
    Alert.alert('Clean Backup', 'Backup cleaned!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Backup</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Enable Backup</Text>
        <Switch
          value={isBackupEnabled}
          onValueChange={setIsBackupEnabled}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isBackupEnabled ? colors.white : '#f4f3f4'}
        />
      </View>
      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: isBackupEnabled ? colors.midnightblue : 'gray'},
        ]}
        onPress={handleBackup}
        disabled={!isBackupEnabled}>
        <Text style={styles.buttonText}>Backup</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleCleanBackup}>
        <Text style={styles.buttonText}>Clean Backup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    marginBottom: verticalScale(40),
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(40),
  },
  label: {
    fontSize: moderateScale(18),
    marginRight: scale(10),
  },
  button: {
    backgroundColor: colors.midnightblue,
    padding: verticalScale(15),
    borderRadius: moderateScale(5),
    marginVertical: verticalScale(10),
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: moderateScale(16),
  },
});

export default ContactBackupPage;
