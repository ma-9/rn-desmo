import React from 'react';
import { StyleSheet, TouchableOpacity, PixelRatio } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface IHeaderProps {
  name: string;
  color: string;
}

const Header: React.FC<IHeaderProps> = props => {
  const { color, name } = props;

  return (
    <TouchableOpacity style={styles.root}>
      <Icon color={color} name={name} size={30} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    height: PixelRatio.get() * 15,
  },
});

export default Header;
