/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import styles, { buttonTextColors } from './styles';
import Typography from '../Typography';

interface Props {
  additionalStyle?: ViewStyle[] | ViewStyle;
  text: string;
  onPress: () => void;
  fontSize?: number;
  variant?: 'primary' | 'secondary';
}

const DefaultButton = ({
  additionalStyle,
  onPress,
  text,
  fontSize = 20,
  variant = 'primary',
}: Props) => {
  const upperText = text.toUpperCase();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.mainContainer, styles[variant], additionalStyle]}
    >
      <Typography align="center" color={buttonTextColors[variant]} size={fontSize} variant="medium">
        {upperText}
      </Typography>
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  additionalStyle: {},
  fontSize: 20,
  variant: 'primary',
};

export default DefaultButton;
