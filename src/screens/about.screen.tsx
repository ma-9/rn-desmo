import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen: React.FC = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text1}>Designed by</Text>
      <Text style={styles.text2}>MundhaSoft</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 16,
    color: '#888',
  },
  text2: {
    fontSize: 24,
    color: '#333',
    marginTop: 16,
  },
});

export default AboutScreen;
