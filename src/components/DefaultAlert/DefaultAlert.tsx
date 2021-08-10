import React from 'react';
import { Modal, View, ViewStyle } from 'react-native';
import DefaultButton from '../DefaultButton';
import Typography from '../Typography';
import Separator from '../Separator';
import styles from './styles';

interface Props {
  additionalStyle?: ViewStyle;
  primaryButtonText: string;
  title: string;
  secondaryButtontext?: string;
  subtitle?: string;
  visible: boolean;
  onPressPrimaryButton: () => void;
  onPressSecondaryButton?: () => void;
}

const DefaultAlert = ({
  additionalStyle,
  primaryButtonText,
  onPressPrimaryButton,
  onPressSecondaryButton,
  title,
  secondaryButtontext,
  subtitle,
  visible,
}: Props) => {
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={[styles.mainContainer, additionalStyle]}>
        <View style={styles.innerContainer}>
          <Typography size={20}>{title}</Typography>
          {subtitle ? <Typography> {subtitle} </Typography> : null}
          <DefaultButton onPress={onPressPrimaryButton} text={primaryButtonText} />
          {secondaryButtontext && onPressSecondaryButton ? (
            <DefaultButton
              onPress={onPressSecondaryButton}
              text={secondaryButtontext}
              additionalStyle={styles.buttonStyles}
              variant="secondary"
            />
          ) : null}
          <Separator size={10} />
        </View>
      </View>
    </Modal>
  );
};

DefaultAlert.defaultProps = {
  additionalStyle: {},
  onPressSecondaryButton: null,
  secondaryButtontext: '',
};

export default DefaultAlert;
