import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {colors} from '../theme/colors';
import {scale, verticalScale} from '../utils/scaling';

export default function Header({navigation}) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <FontAwesome6
          name="square-poll-horizontal"
          size={30}
          color={colors.midnightblue}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: verticalScale(60),
    paddingHorizontal: scale(20),
    backgroundColor: 'yellow',
    justifyContent: 'center',
  },
});
