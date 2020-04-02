import React from 'react';
import { View, Text, StyleSheet, PixelRatio } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface IWeatherUnitProps {
  mode: string;
  windSpeed: number;
  temprature: number;
  time: string;
}

const WeatherUnit: React.FC<IWeatherUnitProps> = props => {
  const { mode, windSpeed, temprature, time } = props;

  const textColor = 'rgb(105,110,121)';
  const verticalLineColor = 'rgba(105,110,121,0.2)';

  return (
    <View style={styles.root}>
      {mode === 'day' && (
        <View style={styles.container}>
          <View style={styles.box}>
            <Icon name="sunrise" size={25} color={textColor} />
            <Text style={[styles.fieldName, { color: textColor }]}>
              Sunrise
            </Text>
            <Text style={[styles.value, { color: textColor }]}> {time} </Text>
          </View>
          <View
            style={[
              styles.verticalLine,
              { backgroundColor: verticalLineColor },
            ]}
          />
          <View style={styles.box}>
            <Icon name="thermometer" size={25} color={textColor} />
            <Text style={[styles.fieldName, { color: textColor }]}>Wind</Text>
            <Text style={[styles.value, { color: textColor }]}>
              {windSpeed}m/s
            </Text>
          </View>
          <View
            style={[
              styles.verticalLine,
              { backgroundColor: verticalLineColor },
            ]}
          />

          <View style={styles.box}>
            <Icon name="wind" size={25} color={textColor} />
            <Text style={[styles.fieldName, { color: textColor }]}>
              Temprature
            </Text>
            <Text style={[styles.value, { color: textColor }]}>
              {temprature}°
            </Text>
          </View>
        </View>
      )}
      {mode === 'night' && (
        <View style={styles.container}>
          <View style={styles.box}>
            <Icon name="sunrise" size={25} color="white" />
            <Text style={[styles.fieldName, { color: 'white' }]}>Sunrise</Text>
            <Text style={[styles.value, { color: 'white' }]}> {time} </Text>
          </View>
          <View style={[styles.verticalLine, { backgroundColor: 'white' }]} />

          <View style={styles.box}>
            <Icon name="thermometer" size={25} color="white" />
            <Text style={[styles.fieldName, { color: 'white' }]}>Wind</Text>
            <Text style={[styles.value, { color: 'white' }]}>
              {windSpeed}m/s
            </Text>
          </View>
          <View style={[styles.verticalLine, { backgroundColor: 'white' }]} />

          <View style={styles.box}>
            <Icon name="wind" size={25} color="white" />
            <Text style={[styles.fieldName, { color: 'white' }]}>
              Temprature
            </Text>
            <Text style={[styles.value, { color: 'white' }]}>
              {temprature}°
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: PixelRatio.get() * 2,
    paddingVertical: PixelRatio.get() * 10,
  },
  box: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  fieldName: {
    fontSize: PixelRatio.get() * 5,
    textTransform: 'uppercase',
  },
  value: {
    fontSize: PixelRatio.get() * 7,
  },
  verticalLine: {
    width: 2,
    alignSelf: 'center',
    height: 40,
  },
});

export default WeatherUnit;
