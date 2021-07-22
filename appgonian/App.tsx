/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Image, View, Text, Alert } from 'react-native';

import { DefaultButton } from './src/components';
import styles from './mainStyles';

const App = () => {
  const showAlert = () => {
    Alert.alert('Hola');
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
      <DefaultButton onPress={showAlert} text="texto" />
    </View>
  );
};

export default App;
