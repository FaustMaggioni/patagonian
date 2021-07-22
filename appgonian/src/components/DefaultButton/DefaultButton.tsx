import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
  onPress: () => void;
  text: string;
};

const DefaultButton = ({ onPress, text }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <Text style={styles.textContainer}> {text} </Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;
