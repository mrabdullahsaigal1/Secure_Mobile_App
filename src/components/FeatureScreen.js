import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
  Button,
} from 'react-native';
import {colors} from '../theme/colors';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {moderateScale, scale, verticalScale} from '../utils/scaling';
import Slider from '@react-native-community/slider';
import ringtones from '../data/alarm';
import Sound from 'react-native-sound';

export default function FeatureScreen({children, onValueChange, isEnabled}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [volume, setVolume] = useState(50);
  const [ringtoneModalVisible, setRingtoneModalVisible] = useState(false);
  const [selectedRingtone, setSelectedRingtone] = useState(null);
  const [playingRingtone, setPlayingRingtone] = useState(null);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    return () => {
      if (sound) {
        sound.release();
      }
    };
  }, [sound]);

  const handleVolumeChange = value => {
    setVolume(value);
  };

  const handleSubmit = () => {
    setModalVisible(false);
  };

  const handleRingtoneSelect = ringtone => {
    setSelectedRingtone(ringtone);
  };

  const handlePlayPause = ringtone => {
    if (playingRingtone === ringtone) {
      if (sound) {
        sound.pause();
        setPlayingRingtone(null);
      }
    } else {
      if (sound) {
        sound.stop(() => {
          sound.release();
        });
      }
      const newSound = new Sound(ringtone.file, error => {
        if (error) {
          console.log('Failed to load sound', error);
          return;
        }
        newSound.setVolume(volume / 100);
        newSound.play(success => {
          if (success) {
            console.log('Successfully finished playing');
          } else {
            console.log('Playback failed due to audio decoding errors');
          }
          newSound.release();
          setPlayingRingtone(null);
        });
        setSound(newSound);
        setPlayingRingtone(ringtone);
      });
    }
  };

  return (
    <View style={styles.screen}>
      <Image
        source={require('../assets/icons/banner.jpeg')}
        style={styles.banner}
      />
      {children}
      <View style={styles.section}>
        <Text style={styles.txt}>Vibration</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? colors.white : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onValueChange}
          value={isEnabled}
        />
      </View>
      <TouchableOpacity
        style={styles.section}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.txt}>Ring Volume</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.section}
        onPress={() => setRingtoneModalVisible(true)}>
        <Text style={styles.txt}> Ringtone</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={[styles.modalOverlay]}>
          <View style={[styles.modalContent, {height: verticalScale(180)}]}>
            <Text style={styles.modalTitle}>Set Ring Volume</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={100}
              value={volume}
              onValueChange={handleVolumeChange}
              step={1}
            />
            <Button
              title="Submit"
              onPress={handleSubmit}
              color={colors.midnightblue}
            />
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={ringtoneModalVisible}
        onRequestClose={() => setRingtoneModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Ringtone</Text>
            <FlatList
              data={ringtones}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View style={styles.ringtoneItem}>
                  <View style={styles.ringtoneInfo}>
                    <TouchableOpacity
                      onPress={() => handleRingtoneSelect(item)}
                      style={styles.radioButton}>
                      <FontAwesome6
                        name={
                          selectedRingtone === item ? 'dot-circle' : 'circle'
                        }
                        size={moderateScale(20)}
                        color={colors.midnightblue}
                      />
                    </TouchableOpacity>
                    <Text style={styles.ringtoneText}>{item.name}</Text>
                  </View>
                  <View style={styles.ringtoneActions}>
                    <TouchableOpacity
                      onPress={() => handlePlayPause(item)}
                      style={styles.playbutton}>
                      <FontAwesome6
                        name={playingRingtone === item ? 'pause' : 'play'}
                        size={moderateScale(20)}
                        color={colors.midnightblue}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              showsVerticalScrollIndicator={false}
            />
            <Button
              title="Submit"
              onPress={() => setRingtoneModalVisible(false)}
              color={colors.midnightblue}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
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
    elevation: 3,
    marginVertical: verticalScale(10),
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: colors.white,
    height: verticalScale(300),
    padding: scale(20),
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  modalTitle: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: colors.midnightblue,
    marginBottom: verticalScale(10),
  },
  slider: {
    width: '100%',
    height: verticalScale(50),
    marginVertical: verticalScale(10),
  },
  volumeText: {
    fontSize: moderateScale(16),
    textAlign: 'center',
    marginVertical: verticalScale(10),
  },
  ringtoneItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: verticalScale(40),
    marginVertical: verticalScale(5),
  },
  ringtoneText: {
    fontSize: moderateScale(16),
    marginLeft: scale(10),
    color: colors.midnightblue,
  },
  ringtoneActions: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  playbutton: {
    height: '100%',
    width: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ringtoneInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    height: '100%',
    width: scale(35),
    alignItems: 'center',
  },
});
