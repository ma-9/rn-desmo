import React from 'react';
import { View, StyleSheet } from 'react-native';

const Divider: React.FC = () => {
  return <View style={styles.root} />;
};

const styles = StyleSheet.create({
  root: {
    height: 1,
    backgroundColor: 'black',
    opacity: 0.07,
  },
});

export default Divider;
