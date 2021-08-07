import { StyleSheet } from 'react-native';
import { COLORS } from './src/utils/theme';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from './src/utils/dimensions';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  smallContainer: {
    backgroundColor: COLORS.mainColor,
    borderRadius: 5,
  },
  text: {
    fontSize: 30,
    color: COLORS.white,
    margin: 4,
    textAlign: 'center',
    width: DEVICE_WIDTH * 0.8,
  },
  image: {
    height: DEVICE_HEIGHT / 3,
    marginVertical: 5,
    width: DEVICE_WIDTH,
  },
});

export default styles;
