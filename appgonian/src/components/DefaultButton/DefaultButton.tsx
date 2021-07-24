import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';

interface Props {
   onPress: () => void;
   label: string;
   color: string,
};

const DefaultButton = ({ onPress, label, color }: Props) => {
   return (
      <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
         <Text style={styles.textContainer}> {label} </Text>
      </TouchableOpacity>
   );
};

const createStyles = (color:string) => ( //PREGUNTAR
  StyleSheet.create({
     boton:{
        backgroundColor: {color},
     },
  });
)

export default DefaultButton;
