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

export default function ChargingProtection() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  return (
    <View style={styles.screen}>
      <FeatureScreen
        isEnabled={isEnabled}
        onValueChange={() => setIsEnabled(!isEnabled)}>
        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.txt}>Charging Protection</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? colors.white : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setIsEnabled(!isEnabled)}
              value={isEnabled}
            />
          </View>
          <TouchableOpacity style={styles.section}>
            <Text style={styles.txt}>Charging Protection History</Text>
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
