import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../../../theme/colors';
import {verticalScale, moderateScale, scale} from '../../../../utils/scaling';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Share from 'react-native-share';
import {Image} from 'react-native-animatable';

export default function Referral({navigation}) {
  const [copiedText, setCopiedText] = useState('REF67');

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: colors.midnightblue,
      },
      headerTintColor: colors.white,
    });
  }, [navigation]);

  const options = {
    title: 'Share Referral Code',
    message: 'Your Referral code is: REF67',
    url: 'https://play.google.com/store/apps/details?id=com.secureapp',
    subject: 'Your Referral code is: REF67',
  };

  const handleShare = () => {
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inviteContainer}>
        <Text style={styles.inviteTxt}>Share the Love & Earn Rewards !</Text>
        <Text style={styles.inviteTxtt}>
          Invite your friends to join and earn rewards! For every friend who
          signs up using your referral code, you'll get ₹25/month credited to
          your account. It's that simple !
        </Text>
        <View style={styles.container}>
          <Text style={styles.inviteTxtt}>
            copy your code
            <Text style={styles.txt}> {copiedText}</Text>
          </Text>
          <TouchableOpacity>
            <Ionicons
              name="clipboard-outline"
              size={30}
              color={colors.midnightblue}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.inviteButton} onPress={handleShare}>
          <Text style={styles.btnTxt}>Start Referring Now !</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require('../../../../assets/icons/refer.jpg')}
        style={styles.referImage}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '36%',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Terms')}>
          <Text style={styles.termTxt}>Terms & condition</Text>
        </TouchableOpacity>
        <Text style={styles.inviteTxtt}>Apply</Text>
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
  container: {
    flexDirection: 'row',
    width: '45%',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txt: {
    color: 'red',
    fontSize: moderateScale(14),
    fontWeight: 'bold',
  },
  inviteButton: {
    height: verticalScale(35),
    width: scale(160),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(20),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.midnightblue,
    marginVertical: verticalScale(20),
  },
  btnTxt: {
    color: colors.midnightblue,
    fontWeight: 'bold',
    fontSize: moderateScale(17),
  },
  inviteContainer: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: verticalScale(20),
    height: verticalScale(250),
  },
  inviteTxt: {
    color: colors.midnightblue,
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
  inviteTxtt: {
    color: colors.midnightblue,
    fontSize: moderateScale(14),
  },
  referImage: {
    height: verticalScale(180),
    width: '80%',
  },
  termTxt: {
    fontSize: moderateScale(14),
    color: colors.lightBlue,
    fontWeight: '900',
    marginVertical: verticalScale(20),
    textDecorationLine: 'underline',
  },
});
