import React from 'react';

// Importing Components
import WeatherPage from './components/weather-page';

const WeatherDarkScreen: React.FC = () => {
  return (
    <WeatherPage
      barStyle="light-content"
      mode="night"
      cityName="Delhi"
      color="white"
      dateAndTime="monday 7:30 pm"
      greetings="good night"
      temprature={20}
      time="7:30"
      unit="20"
      userName="Senorita"
      windSpeed={4}
    />
  );
};

export default WeatherDarkScreen;
