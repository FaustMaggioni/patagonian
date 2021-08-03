/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';

import { DefaultButton, DefaultAlert } from './src/components';
import styles from './mainStyles';

const App = () => {
  const [isModalVisible, setModalVisible] = useState(true);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.smallContainer}>
        <Text style={styles.text}> Curso Patagonian </Text>
      </View>
      <Image
        source={{
          uri: 'https://3.bp.blogspot.com/-JfL1o7oSnKI/VmodObHF9cI/AAAAAAAABLY/nKKRXw0-yiU/s1600/homero_456_336.jpg',
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <DefaultButton
        additionalStyle={styles.text}
        text="Mostrar Hola Mundo"
        onPress={showModal}
        variant="primary"
      />
      <DefaultAlert hideModal={hideModal} title="" subtitle="" visible={isModalVisible} />
    </View>
  );
};

export default App;
