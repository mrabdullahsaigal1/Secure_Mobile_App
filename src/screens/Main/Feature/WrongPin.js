import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
  ScrollView,
} from 'react-native';
import React from 'react';
import FeatureScreen from '../../../components/FeatureScreen';
import {scale, moderateScale, verticalScale} from '../../../utils/scaling';
import {colors} from '../../../theme/colors';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

export default function WrongPin({route}) {
  const {isEnabled} = route.params;
  return (
    <View style={styles.screen}>
      <FeatureScreen isEnabled={isEnabled}>
        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.txt}>Wrong Pin Lock</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? colors.white : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              value={isEnabled}
            />
          </View>
          <TouchableOpacity style={styles.section}>
            <Text style={styles.txt}>Reset Security Pin</Text>
            <FontAwesome6 name="angle-right" size={15} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.section}>
            <Text style={styles.txt}>Wrong Password Detail History</Text>
            <FontAwesome6 name="angle-right" size={15} color="black" />
          </TouchableOpacity>
        </ScrollView>
      </FeatureScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(15),
    height: verticalScale(60),
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    borderRadius: moderateScale(15),
    elevation: 5,
    marginVertical: verticalScale(10),
  },
  arrow: {
    paddingRight: scale(30),
  },
  txt: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: colors.midnightblue,
    width: '80%',
  },
});
