// src/ProfilePage.js

import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {moderateScale, scale, verticalScale} from '../../../../utils/scaling';
import {colors} from '../../../../theme/colors';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Profile = ({navigation}) => {
  const [profileImage, setProfileImage] = React.useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: colors.midnightblue,
      },
      headerTintColor: colors.white,
    });
  }, []);

  const chooseImage = () => {
    const options = {
      noData: true,
    };

    launchImageLibrary(options, response => {
      if (response.uri) {
        setProfileImage(response);
      }
    });
  };

  const handleEditProfile = () => {
    Alert.alert('Edit Profile', 'Edit profile button clicked!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={chooseImage}>
        <Image
          source={
            profileImage
              ? {uri: profileImage.uri}
              : require('../../../../assets/icons/banner.jpeg')
          }
          style={styles.profileImage}
        />
      </TouchableOpacity>
      <View style={styles.detailContainer}>
        <Text style={styles.name}> User Id | CSC1321</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.name}> Name | John Doe</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.name}> Mobile | 9131593910</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.name}> Email | example@gmail.com</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.name}> Address| rohini sector 8</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
        <Text style={styles.buttonText}>Wallet History</Text>
        <TouchableOpacity style={styles.arrowBtn}>
          <FontAwesome6 name="angle-right" size={15} color="white" />
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
        <Text style={styles.buttonText}>My Referrel</Text>
        <TouchableOpacity style={styles.arrowBtn}>
          <FontAwesome6 name="angle-right" size={15} color="white" />
        </TouchableOpacity>
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
  profileImage: {
    width: scale(70),
    height: verticalScale(70),
    borderRadius: moderateScale(40),
    marginVertical: verticalScale(20),
  },
  name: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: colors.midnightblue,
  },
  email: {
    fontSize: moderateScale(18),
    color: 'gray',
    marginBottom: verticalScale(20),
  },
  button: {
    backgroundColor: colors.midnightblue,
    borderRadius: moderateScale(5),
    height: verticalScale(35),
    width: '80%',
    alignSelf: 'center',
    marginVertical: verticalScale(10),
    justifyContent: 'space-between',
    paddingHorizontal: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: moderateScale(16),
  },
  detailContainer: {
    height: verticalScale(35),
    width: '80%',
    alignSelf: 'center',
    paddingHorizontal: scale(10),
    borderWidth: 0.5,
    borderColor: colors.midnightblue,
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(5),
    justifyContent: 'center',
  },
});

export default Profile;
