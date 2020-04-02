import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

// Importing Components
import LocationInfo from './location-info';
import IconComponent from './icon.component';
import WeatherUnit from './weather-unit';
import FooterUnitComponent from './footer-units';

type BarStyle = 'light-content' | 'dark-content';

interface IWeatherComponentProps {
  mode: string;
  color: string;
  dateAndTime: string;
  barStyle: BarStyle;
  cityName: string;
  unit: string;
  greetings: string;
  userName: string;
  time: string;
  windSpeed: number;
  temprature: number;
}

const WeatherPageComponent: React.FC<IWeatherComponentProps> = props => {
  const {
    mode,
    barStyle,
    cityName,
    color,
    dateAndTime,
    greetings,
    temprature,
    time,
    unit,
    userName,
    windSpeed,
  } = props;

  const BGColor = mode === 'day' ? 'rgb(229,236,244)' : 'rgb(49,55,69)';
  return (
    <View style={[styles.root, { backgroundColor: BGColor }]}>
      {Platform.OS === 'android' && (
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={barStyle}
        />
      )}
      <SafeAreaView />
      <View style={styles.menuBtn}>
        <TouchableOpacity>
          <Icon name="more-vertical" size={40} color={color} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View>
            <LocationInfo
              dateAndTime={dateAndTime}
              color={color}
              cityName={cityName}
            />
          </View>
          <View>
            <IconComponent mode={mode} />
          </View>
          <View>
            <WeatherUnit
              unit={unit}
              greetings={greetings}
              userName={userName}
              color={color}
            />
          </View>
        </View>
        <View>
          <FooterUnitComponent
            mode={mode}
            time={time}
            windSpeed={windSpeed}
            temprature={temprature}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
  },
  menuBtn: {
    padding: PixelRatio.get() * 1,
  },
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  innerContainer: {
    paddingVertical: PixelRatio.get() * 5,
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default WeatherPageComponent;
