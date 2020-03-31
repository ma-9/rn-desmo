import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface IAuthSectionProps {
  label: string;
  color: string;
}

const AuthenticationSection: React.FC<IAuthSectionProps> = props => {
  const { label, color } = props;

  return (
    <View style={styles.root}>
      <Text style={[styles.labelTag, { color }]}> {label} </Text>
      <TouchableOpacity style={styles.nextButton}>
        <Icon name="arrow-right" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelTag: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: 'purple',
    padding: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AuthenticationSection;
