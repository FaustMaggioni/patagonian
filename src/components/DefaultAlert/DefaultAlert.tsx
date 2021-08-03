import React from 'react';
import { Modal, Text, View, ViewStyle } from 'react-native';
import { DefaultButton } from '../../components';
import styles from './styles';

interface Props {
  additionalStyle?: ViewStyle;
  buttonText?: string;
  title: string;
  subtitle?: string;
  visible: boolean;
  hideModal: () => void;
}

const DefaultAlert = ({ buttonText = 'OK', title, subtitle, visible, hideModal }: Props) => {
  return (
    <Modal animationType="fade" visible={visible} transparent>
      <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}> {title} </Text>
          {subtitle && <Text> {subtitle} </Text>}
          <DefaultButton
            onPress={hideModal}
            text={buttonText}
            additionalStyle={styles.buttonStyles}
          />
        </View>
      </View>
    </Modal>
  );
};

export default DefaultAlert;
