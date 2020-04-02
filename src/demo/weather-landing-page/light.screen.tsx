import React from 'react';

// Importing Components
import WeatherPage from './components/weather-page';

const WeatherLightScreen: React.FC = () => {
  return (
    <WeatherPage
      barStyle="dark-content"
      mode="day"
      cityName="Delhi"
      color="black"
      dateAndTime="monday 7:00 am"
      greetings="good morning"
      temprature={22}
      time="7:00"
      unit="22"
      userName="Senorita"
      windSpeed={4}
    />
  );
};

export default WeatherLightScreen;
