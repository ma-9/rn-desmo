import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface IFooterProps {
  forgotPasswordLink?: boolean;
  label: string;
  color: string;
}

const Footer: React.FC<IFooterProps> = props => {
  const { label, color } = props;

  return (
    <TouchableOpacity style={styles.footer}>
      <Text style={[styles.title, { color }]}>{label}</Text>
      {props.forgotPasswordLink && (
        <Text style={[styles.title, { color }]}>Forgot Password</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default Footer;
