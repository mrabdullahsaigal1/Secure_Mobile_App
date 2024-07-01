import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../theme/colors';
import {moderateScale, scale, verticalScale} from '../../../utils/scaling';
import settings from '../../../data/setting';

export default function Settings({navigation}) {
  const [selectedType, setSelectedType] = useState('general');

  const settingType = settings.map(item => item.type);
  const uniqueType = [...new Set(settingType)];

  const handleTypeSelect = type => {
    setSelectedType(type);
  };

  const renderSettingNames = () => {
    return settings
      .filter(setting => setting.type === selectedType)
      .map(setting => (
        <TouchableOpacity
          key={setting.id}
          style={styles.settingNameContainer}
          onPress={() => Alert.alert(setting.name)}>
          <Text style={styles.settingName}>{setting.name}</Text>
        </TouchableOpacity>
      ));
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.bckbutton}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color={colors.midnightblue} />
        </TouchableOpacity>
        <FontAwesome name="user-circle" size={28} color={colors.midnightblue} />
      </View>
      <View style={styles.categoryContainer}>
        {uniqueType.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleTypeSelect(item)}
              style={styles.itemContainer}
              activeOpacity={0.7}>
              <View style={styles.settingTypeButton}>
                <MaterialIcons
                  name={
                    item === 'general'
                      ? 'security'
                      : item === 'Account'
                      ? 'manage-accounts'
                      : item === 'Feature'
                      ? 'featured-play-list'
                      : null
                  }
                  size={32}
                  color={colors.midnightblue}
                />
              </View>
              <Text style={styles.title}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <ScrollView>
        <View style={styles.settingsListContainer}>{renderSettingNames()}</View>
        <TouchableOpacity
          style={[
            styles.settingNameContainer,
            {width: '90%', alignSelf: 'center'},
          ]}>
          <Text
            style={{
              fontSize: moderateScale(16),
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'red',
            }}>
            Emergency Contacts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.settingNameContainer,
            {width: '90%', alignSelf: 'center'},
          ]}>
          <Text
            style={{
              fontSize: moderateScale(16),
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'black',
            }}>
            Sign-out
          </Text>
        </TouchableOpacity>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(15),
  },
  bckbutton: {
    height: verticalScale(30),
    width: scale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: verticalScale(10),
  },
  settingTypeButton: {
    backgroundColor: colors.white,
    height: verticalScale(50),
    width: verticalScale(50),
    borderRadius: verticalScale(25),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    fontSize: scale(12),
    fontWeight: 'bold',
    color: colors.midnightblue,
    marginTop: verticalScale(5),
  },
  settingsListContainer: {
    paddingHorizontal: scale(15),
    marginVertical: verticalScale(20),
  },
  settingNameContainer: {
    height: verticalScale(60),
    marginVertical: moderateScale(5),
    justifyContent: 'center',
    paddingHorizontal: scale(10),
    borderRadius: moderateScale(10),
    elevation: 5,
    backgroundColor: 'white',
  },
  settingName: {
    fontSize: scale(12),
    color: colors.midnightblue,
    fontWeight: '800',
  },
});
