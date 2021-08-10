import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';

import { DefaultButton, DefaultAlert, Typography, Separator } from '../../components';
import { COLORS } from '../../utils/theme';
import styles from './styles';

const ExperimentalScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <SafeAreaView style={styles.mainContainer} />
      <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.background}>
        <View style={styles.smallContainer}>
          <Typography align="center" color={COLORS.white} size={30} variant="bold">
            Curso Patagonian
          </Typography>
        </View>
        <Typography size={30} variant="medium">
          Hello there
        </Typography>
        {[0, 1, 2, 3, 4].map((item) => {
          return (
            <>
              <Image
                key={item}
                source={{
                  uri: 'https://3.bp.blogspot.com/-JfL1o7oSnKI/VmodObHF9cI/AAAAAAAABLY/nKKRXw0-yiU/s1600/homero_456_336.jpg',
                }}
                style={styles.image}
                resizeMode="contain"
              />
              <Separator size={25} />
            </>
          );
        })}
        <DefaultButton
          additionalStyle={styles.text}
          text="Mostrar Hola Mundo"
          onPress={showModal}
          fontSize={30}
          variant="primary"
        />
        <DefaultAlert
          onPressPrimaryButton={hideModal}
          primaryButtonText="OK"
          title="Hola Mundo"
          secondaryButtontext="Cancelar"
          subtitle=""
          visible={isModalVisible}
        />
      </ScrollView>
    </>
  );
};

export default ExperimentalScreen;
