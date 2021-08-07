import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import { COLORS } from '../../utils/theme';

interface Props {
  align?: 'left' | 'center' | 'right' | 'justify';
  children: ReactNode;
  color?: string; //podemos restringir a que sea una de las props de nuestros colors del theme
  size?: number;
}
//variant es la fontFamily acá

const getTextStyle = ({ align, color, size }: Pick<Props, 'align' | 'color' | 'size'>) => {
  const textStyle = {
    color,
    fontSize: size,
    textAlign: align,
  };
  return textStyle;
};

const Typography = ({ align, children, color, size }: Props) => {
  const textStyle = getTextStyle({ align, color, size });
  return (
    <Text allowFontScaling={false} style={textStyle}>
      {children}
    </Text>
  );
};

Typography.defaultProps = {
  align: 'left',
  color: COLORS.black,
  size: 14,
};

export default Typography;
