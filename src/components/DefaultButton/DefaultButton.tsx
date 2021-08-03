/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';
import styles, { buttonTextColors } from './styles';

interface Props {
  additionalStyle?: ViewStyle;
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
      <Text style={[styles.textContainer, { color: buttonTextColors[variant] }]}>{upperText}</Text>
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  additionalStyle: {},
  variant: 'primary',
};

export default DefaultButton;
