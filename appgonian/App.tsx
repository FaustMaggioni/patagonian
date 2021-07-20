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
import { Image, View, StyleSheet, Text } from 'react-native';

import { colors } from './src/utils/theme';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from './src/utils/dimensions';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.smallContainer}>
        <Text style={styles.text}>Curso Patagonian</Text>
      </View>
      <Image
        source={{
          uri: 'https://3.bp.blogspot.com/-JfL1o7oSnKI/VmodObHF9cI/AAAAAAAABLY/nKKRXw0-yiU/s1600/homero_456_336.jpg',
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.darkColor,
    flex: 1,
    justifyContent: 'center',
  },
  smallContainer: {
    backgroundColor: colors.lighterColor,
    borderRadius: 5,
  },
  text: {
    fontSize: 30,
    fontFamily: 'monospace',
    color: 'black',
    margin: 4,
  },
  image: {
    height: DEVICE_HEIGHT / 3,
    marginTop: 5,
    width: DEVICE_WIDTH,
  },
});

export default App;
