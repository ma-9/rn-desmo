import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IconProps } from 'react-native-vector-icons/Icon';
import { TypeIconFont } from '@app/types';

const fontMapping = {
  Ionicons: Ionicons,
};

interface IProps extends IconProps {
  font: TypeIconFont;
}

const Icon: React.FC<IProps> = ({ font, ...rest }) => {
  const C = fontMapping[font];

  if (!C) {
    return null;
  }

  return <C {...rest} />;
};

export default Icon;
