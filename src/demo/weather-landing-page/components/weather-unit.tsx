import React from 'react';
import { View, Text, StyleSheet, PixelRatio } from 'react-native';

interface IWeatherUnitProps {
  unit: string;
  greetings: string;
  userName: string;
  color: string;
}

const WeatherUnit: React.FC<IWeatherUnitProps> = props => {
  const { unit, greetings, userName, color } = props;

  const COLOR = color === 'black' ? 'rgb(105,110,121)' : color;

  return (
    <View style={styles.root}>
      <Text style={[styles.unit, { color }]}> {unit}°C </Text>
      <Text style={[styles.greeting, { color: COLOR }]}> {greetings} </Text>
      <Text style={[styles.userName, { color: COLOR }]}> {userName} </Text>
      <View style={[styles.centerLine, { backgroundColor: COLOR }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  unit: {
    fontSize: PixelRatio.get() * 16,
    padding: PixelRatio.get() * 1,
    letterSpacing: 2,
  },
  greeting: {
    fontSize: PixelRatio.get() * 5,
    padding: PixelRatio.get() * 1,
    textTransform: 'uppercase',
  },
  userName: {
    padding: PixelRatio.get() * 1,
    fontSize: PixelRatio.get() * 4.5,
    textTransform: 'uppercase',
  },
  centerLine: {
    width: 30,
    marginVertical: PixelRatio.get() * 7,
    height: 1,
  },
});

export default WeatherUnit;
