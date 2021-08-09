import { StyleSheet } from 'react-native';
import { COLORS } from './src/utils/theme';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from './src/utils/dimensions';

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.lighterColor,
  },
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    paddingBottom: 30,
    width: '100%',
  },
  smallContainer: {
    backgroundColor: COLORS.mainColor,
    borderRadius: 5,
    padding: 5,
  },
  text: {
    color: COLORS.white,
    margin: 4,
    width: DEVICE_WIDTH * 0.8,
  },
  image: {
    height: DEVICE_HEIGHT / 3,
    marginVertical: 5,
    width: DEVICE_WIDTH,
  },
});

export default styles;
