import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {colors} from '../../../theme/colors';
import {moderateScale, scale, verticalScale} from '../../../utils/scaling';

export default function WrongPinFAQ({route}) {
  const {faqType, videoId} = route.params;

  const getTitle = () => {
    switch (faqType) {
      case 'AboutCellSecurity':
        return 'About Cell Security';
      case 'ImpactOnPhone':
        return 'Impact on Your Phone';
      case 'PrivacyPolicy':
        return 'Privacy Policy';
      case 'WrongPinAlert':
        return 'Wrong Pin Alert';
      case 'PocketThiefMode':
        return 'Pocket Thief Mode';
      case 'ChargingProtection':
        return 'Charging Protection';
      case 'UsbEject':
        return 'USB Eject';
      case 'EmergencyMode':
        return 'Emergency Mode';
      case 'Other':
        return 'Other Features';
      default:
        return '';
    }
  };

  const renderContent = () => {
    switch (faqType) {
      case 'AboutCellSecurity':
        return (
          <Text style={styles.description}>
            About Cell Security: This section explains the security features
            implemented in the app to protect your device.
          </Text>
        );
      case 'ImpactOnPhone':
        return (
          <Text style={styles.description}>
            Impact on Your Phone: Learn how the app affects your phone's
            performance and battery life.
          </Text>
        );
      case 'PrivacyPolicy':
        return (
          <Text style={styles.description}>
            Privacy Policy: Understand how we handle your data and protect your
            privacy.
          </Text>
        );
      case 'WrongPinAlert':
        return (
          <Text style={styles.description}>
            Wrong Pin Alert: If the wrong PIN is entered 3 times, photos will be
            taken from the front and back cameras and can be reviewed later on
            our website.
          </Text>
        );
      case 'PocketThiefMode':
        return (
          <Text style={styles.description}>
            Pocket Thief Mode: This mode activates when suspicious activity is
            detected, alerting you immediately.
          </Text>
        );
      case 'ChargingProtection':
        return (
          <Text style={styles.description}>
            Charging Protection: Protect your phone while it is charging by
            alerting you to unauthorized disconnections.
          </Text>
        );
      case 'UsbEject':
        return (
          <Text style={styles.description}>
            USB Eject: Prevent unauthorized data transfer by alerting you when
            the USB is ejected without authorization.
          </Text>
        );
      case 'EmergencyMode':
        return (
          <Text style={styles.description}>
            Emergency Mode: Activates special features to help in case of an
            emergency, including location tracking and alerting contacts.
          </Text>
        );
      case 'Other':
        return (
          <Text style={styles.description}>
            Other: Explore other features and FAQs about the app.
          </Text>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <YoutubePlayer height={200} play={false} videoId={videoId} />
      <Text style={styles.title}>{getTitle()}</Text>
      {renderContent()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: scale(15),
    backgroundColor: colors.white,
  },
  title: {
    marginTop: verticalScale(20),
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: colors.lightBlue,
    textAlign: 'center',
  },
  description: {
    marginVertical: verticalScale(20),
    fontSize: moderateScale(15),
    color: colors.midnightblue,
    textAlign: 'justify',
    fontWeight: '600',
  },
});
