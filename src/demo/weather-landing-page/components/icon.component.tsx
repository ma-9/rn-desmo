import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface IIconProps {
  mode: string;
}

const LocationInfo: React.FC<IIconProps> = props => {
  const { mode } = props;
  return (
    <View style={styles.root}>
      {mode === 'day' && <Icon name="sun" size={150} color="orange" />}
      {mode === 'night' && <Icon name="moon" size={150} color="white" />}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
});

export default LocationInfo;
