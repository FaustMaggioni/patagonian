import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DEVICE_WIDTH } from '../../utils/dimensions';

interface Props {
  height?: number;
}

const getSeparatorHeight = ({ height }: Props) => {
  const separatorHeight = {
    height,
  };
  return separatorHeight;
};

const Separator = ({ height = 5 }: Props) => {
  const separatorHeight = getSeparatorHeight({ height });
  return <View style={[styles.separator, separatorHeight]} />;
};

Separator.defaultProps = {
  height: 10,
};

const styles = StyleSheet.create({
  separator: {
    width: DEVICE_WIDTH,
  },
});

export default Separator;
