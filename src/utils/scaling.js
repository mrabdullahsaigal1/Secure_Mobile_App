import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const guidlineBaseHeight = 680;
const guidelineBaseWidth = 350;

const scale = size => (width / guidelineBaseWidth) * size;

const verticalScale = size => (height / guidlineBaseHeight) * size;

const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export {scale, verticalScale, moderateScale};
