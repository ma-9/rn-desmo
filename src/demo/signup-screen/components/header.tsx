import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
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
    padding: 10,
  },
});

export default Header;
