import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../theme/colors';
import {moderateScale, scale, verticalScale} from '../../../utils/scaling';

export default function Support({navigation}) {
  const handleNavigation = (faqType, videoId) => {
    navigation.navigate('WrongPinFAQ', {faqType, videoId});
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.bckbutton}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color={colors.midnightblue} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Support</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View>
          <Text style={[styles.optionText, styles.sectionTitle]}>App FAQs</Text>
          <TouchableOpacity
            style={styles.option}
            onPress={() => handleNavigation('AboutCellSecurity', 'VIDEO_ID_1')}>
            <Text style={styles.optionText}>About cell security</Text>
            <MaterialIcons
              name="chevron-right"
              size={20}
              color={colors.midnightblue}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => handleNavigation('ImpactOnPhone', 'VIDEO_ID_2')}>
            <Text style={styles.optionText}>Impact on your phone</Text>
            <MaterialIcons
              name="chevron-right"
              size={20}
              color={colors.midnightblue}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => handleNavigation('PrivacyPolicy', 'VIDEO_ID_3')}>
            <Text style={styles.optionText}>Privacy Policy</Text>
            <MaterialIcons
              name="chevron-right"
              size={20}
              color={colors.midnightblue}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={[styles.optionText, styles.sectionTitle]}>
            Feature FAQs
          </Text>
          <TouchableOpacity
            style={styles.option}
            onPress={() => handleNavigation('WrongPinAlert', 'VIDEO_ID_4')}>
            <Text style={styles.optionText}>Wrong Pin Alert</Text>
            <MaterialIcons
              name="chevron-right"
              size={20}
              color={colors.midnightblue}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => handleNavigation('PocketThiefMode', 'VIDEO_ID_5')}>
            <Text style={styles.optionText}>Pocket Thief Mode</Text>
            <MaterialIcons
              name="chevron-right"
              size={20}
              color={colors.midnightblue}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() =>
              handleNavigation('ChargingProtection', 'VIDEO_ID_6')
            }>
            <Text style={styles.optionText}>Charging Protection</Text>
            <MaterialIcons
              name="chevron-right"
              size={20}
              color={colors.midnightblue}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => handleNavigation('UsbEject', 'VIDEO_ID_7')}>
            <Text style={styles.optionText}>USB Eject</Text>
            <MaterialIcons
              name="chevron-right"
              size={20}
              color={colors.midnightblue}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => handleNavigation('EmergencyMode', 'VIDEO_ID_8')}>
            <Text style={styles.optionText}>Emergency Mode</Text>
            <MaterialIcons
              name="chevron-right"
              size={20}
              color={colors.midnightblue}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => handleNavigation('Other', 'VIDEO_ID_9')}>
            <Text style={styles.optionText}>Other</Text>
            <MaterialIcons
              name="chevron-right"
              size={20}
              color={colors.midnightblue}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.reachoutContainer}>
          <Text style={styles.reachoutTitle}>REACH OUT TO US</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/icons/whatsApp.jpg')}
                style={styles.logo}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/icons/youtube.jpg')}
                style={styles.logo}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/icons/instaa.jpg')}
                style={[styles.logo, styles.instagramLogo]}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/icons/xx.jpg')}
                style={styles.logo}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/icons/mail.jpg')}
                style={styles.logo}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    alignItems: 'center',
    paddingHorizontal: scale(15),
    justifyContent: 'space-between',
  },
  bckbutton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: scale(18),
    fontWeight: 'bold',
    color: colors.midnightblue,
    marginLeft: scale(15),
  },
  content: {
    padding: scale(15),
  },
  option: {
    flexDirection: 'row',
    height: verticalScale(60),
    marginVertical: verticalScale(10),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(15),
    paddingVertical: scale(10),
    borderRadius: scale(10),
    shadowColor: '#000',
    elevation: 5,
    backgroundColor: 'white',
  },
  optionText: {
    fontSize: scale(13),
    color: colors.midnightblue,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: moderateScale(18),
  },
  reachoutContainer: {
    alignSelf: 'center',
  },
  reachoutTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: moderateScale(18),
    color: colors.midnightblue,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  logo: {
    height: verticalScale(50),
    width: scale(50),
  },
  instagramLogo: {
    height: verticalScale(37),
    width: scale(37),
  },
});
