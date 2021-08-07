/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import styles, { buttonTextColors } from './styles';
import Typography from '../Typography';

interface Props {
  additionalStyle?: ViewStyle[] | ViewStyle;
  text: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}

const DefaultButton = ({ additionalStyle, onPress, text, variant = 'primary' }: Props) => {
  const upperText = text.toUpperCase();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.mainContainer, styles[variant], additionalStyle]}
    >
      <Typography color={buttonTextColors[variant]}> {upperText} </Typography>
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  additionalStyle: {},
  variant: 'primary',
};

export default DefaultButton;
