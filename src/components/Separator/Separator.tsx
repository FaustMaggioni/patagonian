import React from 'react';
import { View } from 'react-native';

interface Props {
  isHorizontal?: boolean;
  size: number;
}

const Separator = ({ isHorizontal, size }: Props) => {
  console.log('size: ', size);
  return <View style={isHorizontal ? { height: size } : { width: size }} />;
};

Separator.defaultProps = {
  isHorizontal: true,
};

export default Separator;
