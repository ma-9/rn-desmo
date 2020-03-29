import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

interface IActionButtonProps {
  title: string;
  icon: string;
}

const ActionButton: React.FC<IActionButtonProps> = props => {
  return (
    <View style={styles.root}>
      <Icon name={props.icon} color="rgb(1, 121, 224)" size={24} />
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 100,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'rgb(59, 84, 106)',
    marginLeft: 8,
  },
});

export default ActionButton;
