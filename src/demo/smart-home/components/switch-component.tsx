import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';

interface ISwitchProps {
  value: boolean;
  invertColor?: boolean;
}

const Switch: React.FC<ISwitchProps> = ({ value, invertColor }) => {
  const containerStyle = {
    borderColor: invertColor
      ? 'white'
      : value
      ? 'rgb(1, 121, 224)'
      : 'rgb(200, 207,214)',
    backgroundColor: invertColor
      ? 'transparent'
      : value
      ? 'rgba(1, 121, 224, 0.3)'
      : 'rgba(200, 207, 214, 0.3)',
  };

  const switchStyle = {
    backgroundColor: invertColor
      ? 'white'
      : value
      ? 'rgb(1, 121, 224)'
      : 'rgb(200, 207,214)',
    ...Platform.select({
      ios: {
        shadowColor: invertColor
          ? 'white'
          : value
          ? 'rgb(1, 121, 224)'
          : 'rgb(200, 207,214)',
      },
      android: {
        elevation: 1,
      },
    }),
  };

  return (
    <View style={[styles.root, containerStyle]}>
      <View style={[styles.switch, switchStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 18,
    width: 36,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10,
    alignItems: 'flex-end',
  },
  switch: {
    height: 18,
    width: 18,
    borderRadius: 10,
    margin: -2,
    ...Platform.select({
      ios: {
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 2,
      },
      android: {
        elevation: 1,
      },
    }),
  },
});

export default Switch;
