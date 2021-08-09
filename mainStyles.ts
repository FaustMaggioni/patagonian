import { StyleSheet } from 'react-native';
import { COLORS } from './src/utils/theme';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from './src/utils/dimensions';

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.lighterColor,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  mainContainer: {
    flex: 1,
    width: '100%',
  },
  smallContainer: {
    backgroundColor: COLORS.mainColor,
    borderRadius: 5,
    padding: 5,
  },
  text: {
    color: COLORS.white,
    width: DEVICE_WIDTH * 0.8,
  },
  image: {
    borderRadius: 10,
    height: DEVICE_HEIGHT / 3,
    width: DEVICE_WIDTH,
  },
});

export default styles;
