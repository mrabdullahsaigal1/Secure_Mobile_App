import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {colors} from '../../../../theme/colors';
import {moderateScale, scale, verticalScale} from '../../../../utils/scaling';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const MyReferralsScreen = ({navigation}) => {
  const [referrals, setReferrals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: colors.midnightblue,
      },
      headerTintColor: colors.white,
    });

    setTimeout(() => {
      setReferrals([
        {
          code: '1234',
          status: 'Active',
          name: 'Rakesh Parihar',
          expiry: '2023-06-27',
          plan: 'Quarterly Plan',
        },
        {
          code: '5678',
          status: 'Active',
          name: 'Sonu Singh',
          expiry: '2024-08-21',
          plan: 'Annual Plan',
        },
        {
          code: '9101',
          status: 'Active',
          name: 'Bittu Jatt',
          expiry: '2024-07-24',
          plan: 'Quarterly Plan',
        },
        {
          code: '1121',
          status: 'Active',
          name: 'Rakesh Sonkar',
          expiry: '2024-11-24',
          plan: 'Half-Year Plan',
        },
        {
          code: '3141',
          status: 'Active',
          name: 'Pappu Singh',
          expiry: '2023-09-24',
          plan: 'Annual Plan',
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const isExpired = expiryDate => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    return expiry < today;
  };

  const renderReferral = ({item}) => (
    <View style={styles.card}>
      <FontAwesome5
        name="user-circle"
        size={40}
        color={isExpired(item.expiry) ? 'red' : 'green'}
      />
      <View style={styles.txtContainer}>
        <Text style={styles.txt}>{item.name}</Text>
        <Text style={styles.txt}>Expiring on: {item.expiry}</Text>
        <Text style={styles.txt}>Plan: {item.plan}</Text>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.title}>My Referrals</Text>
        <ActivityIndicator size="large" color={colors.midnightblue} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Referrals</Text>
      <FlatList
        data={referrals}
        keyExtractor={item => item.code}
        renderItem={renderReferral}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: verticalScale(16),
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: verticalScale(10),
    color: 'black',
  },
  listContainer: {
    paddingBottom: 16,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: verticalScale(100),
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: moderateScale(15),
    elevation: 5,
    marginVertical: verticalScale(10),
    paddingHorizontal: scale(25),
  },
  txtContainer: {
    marginHorizontal: scale(30),
    justifyContent: 'center',
    height: '100%',
  },
  txt: {
    fontSize: moderateScale(16),
    color: 'black',
  },
});

export default MyReferralsScreen;
