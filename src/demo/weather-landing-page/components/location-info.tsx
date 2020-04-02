import React from 'react';
import { View, Text, StyleSheet, PixelRatio } from 'react-native';

interface ILocationInfoProps {
  cityName: string;
  dateAndTime: string;
  color: string;
}

const LocationInfo: React.FC<ILocationInfoProps> = props => {
  const { cityName, dateAndTime, color } = props;
  return (
    <View style={styles.root}>
      <Text style={[styles.cityName, { color }]}> {cityName} </Text>
      <Text style={[styles.dateAndTime, { color }]}> {dateAndTime} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  cityName: {
    fontSize: PixelRatio.get() * 10,
  },
  dateAndTime: {
    fontSize: PixelRatio.get() * 7,
    textTransform: 'uppercase',
  },
});

export default LocationInfo;
