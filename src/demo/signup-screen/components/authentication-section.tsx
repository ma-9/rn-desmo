import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: PixelRatio.get() * 5,
  },
  labelTag: {
    fontSize: PixelRatio.get() * 12,
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: 'purple',
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AuthenticationSection;
