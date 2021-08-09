/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    borderRadius: 10,
    minWidth: 15,
    paddingVertical: 2,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.darkerColor,
    borderWidth: 0.5,
  },
  secondary: {
    backgroundColor: COLORS.darkerColor,
    borderColor: COLORS.white,
    borderWidth: 1,
  },
});

export const buttonTextColors = {
  primary: COLORS.darkerColor,
  secondary: COLORS.white,
};

export default styles;
