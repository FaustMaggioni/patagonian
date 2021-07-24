import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
   onPress: () => void;
   label: string;
};

const DefaultButton = ({ onPress, label }: Props) => {
   return (
      <TouchableOpacity onPress={onPress} color='red' style={styles.mainContainer}>
         <Text style={styles.textContainer}> {label} </Text>
      </TouchableOpacity>
   );
};

export default DefaultButton;
