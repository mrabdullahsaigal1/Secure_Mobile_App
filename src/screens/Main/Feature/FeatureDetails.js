import {
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../theme/colors';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {moderateScale, scale, verticalScale} from '../../../utils/scaling';

export default function FeatureDetails({route}) {
  const {featureDetails} = route.params;
  const [isEnabled, setIsEnabled] = useState(false);
  console.log('feature details : ', featureDetails);
  return (
    <View style={styles.screen}>
      <Image
        source={require('../../../assets/icons/banner.jpeg')}
        style={styles.banner}
      />
      <View style={styles.section}>
        <Text style={styles.txt}>{featureDetails.featureName}</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? colors.white : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsEnabled(!isEnabled)}
          value={isEnabled}
        />
      </View>
      <View style={[styles.section, styles.arrow]}>
        <Text style={styles.txt}>Test {featureDetails.featureName}</Text>
        <TouchableOpacity style={styles.arrowBtn}>
          <FontAwesome6 name="angle-right" size={15} color="black" />
        </TouchableOpacity>
      </View>
      <View style={[styles.section, styles.arrow]}>
        <Text style={styles.txt}>Watch Tutorial</Text>
        <TouchableOpacity style={styles.arrowBtn}>
          <FontAwesome6 name="angle-right" size={15} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.txt}>Always Active</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? colors.white : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsEnabled(!isEnabled)}
          value={isEnabled}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.txt}>Require PIN before shutdown</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? colors.white : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsEnabled(!isEnabled)}
          value={isEnabled}
        />
      </View>
      <View style={[styles.section, styles.arrow]}>
        <Text style={styles.txt}>Forgot my PIN's</Text>
        <TouchableOpacity style={styles.arrowBtn}>
          <FontAwesome6 name="angle-right" size={15} color="black" />
        </TouchableOpacity>
      </View>
      <View style={[styles.section, styles.arrow]}>
        <Text style={styles.txt}>Change PIN</Text>
        <TouchableOpacity style={styles.arrowBtn}>
          <FontAwesome6 name="angle-right" size={15} color="black" />
        </TouchableOpacity>
      </View>
      <View style={[styles.section, styles.arrow]}>
        <Text style={styles.txt}>
          How to exit {featureDetails.featureName} while testing ?{' '}
        </Text>
        <TouchableOpacity style={styles.arrowBtn}>
          <FontAwesome6 name="angle-right" size={15} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    height: verticalScale(60),
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    borderRadius: moderateScale(15),
    elevation: 5,
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
  banner: {
    height: verticalScale(200),
    width: '100%',
    resizeMode: 'cover',
  },
});
