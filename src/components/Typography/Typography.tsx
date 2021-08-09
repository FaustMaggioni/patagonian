import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import { IS_ANDROID } from '../../utils/constants';
import { COLORS } from '../../utils/theme';
import styles from './styles';

const fontMiddleSign = IS_ANDROID ? '-' : ' ';

const typographyVariant = {
  bold: `Raleway${fontMiddleSign}Bold`,
  italic: `Raleway${fontMiddleSign}Italic`,
  medium: `Raleway${fontMiddleSign}Medium`,
  regular: `Raleway${fontMiddleSign}Regular`,
};

interface Props {
  align?: 'left' | 'center' | 'right' | 'justify';
  children: ReactNode;
  color?: string; //podemos restringir a que sea una de las props de nuestros colors del theme
  size?: number;
  variant?: keyof typeof typographyVariant;
}

const getTextStyle = ({
  align,
  color,
  size,
  variant = 'regular',
}: Pick<Props, 'align' | 'color' | 'size' | 'variant'>) => {
  const textStyle = {
    color,
    fontFamily: typographyVariant[variant],
    fontSize: size,
    textAlign: align,
  };
  return textStyle;
};

const Typography = ({ align, children, color, size, variant }: Props) => {
  const textStyle = getTextStyle({ align, color, size, variant });
  return (
    <Text allowFontScaling={false} style={[styles.text, textStyle]}>
      {children}
    </Text>
  );
};

Typography.defaultProps = {
  align: 'left',
  color: COLORS.black,
  size: 14,
  variant: 'regular',
};

export default Typography;
