import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IProps {
  title: string;
}

const SectionHeader: React.FC<IProps> = ({ title }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 48,
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    opacity: 0.54,
  },
});

export default SectionHeader;
