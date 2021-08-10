import React from 'react';
import { View } from 'react-native';

import { DefaultButton, Separator, Typography } from '../../components';
import styles from './styles';

//@ts-ignore
const WelcomeScreen = ({ navigation }) => {
  const goToExperimental = () => {
    navigation.navigate('Experimental');
  };

  return (
    <View style={styles.mainContainer}>
      <Typography size={20} variant="medium">
        Welcome Screen
      </Typography>
      <Separator size={15} />
      <DefaultButton text="Go To Experimental Screen" fontSize={16} onPress={goToExperimental} />
    </View>
  );
};

export default WelcomeScreen;
