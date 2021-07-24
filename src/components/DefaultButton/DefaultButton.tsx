import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
   onPress: () => void;
   label: string;
   color: string;
};

const DefaultButton = ({ onPress, label, color }: Props) => {
   return (
      <TouchableOpacity onPress={onPress} color='red' style={styles.mainContainer}>
         <Text style={styles.textContainer}> {label} </Text>
      </TouchableOpacity>
   );
};

/*
const createStyles = (color) => 
   fondo: backgroundColor: color; */ //Preguntar

export default DefaultButton;
