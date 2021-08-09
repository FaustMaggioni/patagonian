/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../utils/dimensions';
import { COLORS } from '../../utils/theme';

const styles = StyleSheet.create({
  buttonStyles: {
    minHeight: 40,
  },
  innerContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 13,
    justifyContent: 'center',
    width: DEVICE_WIDTH * 0.65,
  },
  mainContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'center',
  },
});
export default styles;
