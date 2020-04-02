import { IDemoItem } from '@app/types';
import WeatherLightScreen from './light.screen';
import WeatherDarkScreen from './dark.screen';

const data: IDemoItem = {
  id: 'weather-landing-page',
  title: 'Weather Landing Page',
  thumbnail:
    'https://firebasestorage.googleapis.com/v0/b/testingfirebase-7eb53.appspot.com/o/MundhaSOft%2FWeatherLandingPage.jpg?alt=media&token=46ab7900-04c3-4683-a85a-8750f93f0e5d',
  screens: [
    {
      showHeader: false,
      id: 'weather-landing-page-light',
      title: 'Light Theme',
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/testingfirebase-7eb53.appspot.com/o/MundhaSOft%2FWeatherLandingPage-Light.jpg?alt=media&token=b7dfe60f-e903-4f3a-9b9e-0e695e999822',
      component: WeatherLightScreen,
    },
    {
      showHeader: false,
      id: 'weather-landing-page-dark',
      title: 'Dark Theme',
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/testingfirebase-7eb53.appspot.com/o/MundhaSOft%2FWeatherLandingPage-Dark.jpg?alt=media&token=94751a91-a0cc-4d38-b0f7-e585f626cba0',
      component: WeatherDarkScreen,
    },
  ],
  collaborators: [
    {
      id: 'kishanmundha',
      fullname: 'Kishan Mundha',
      thumbnail:
        'https://avatars2.githubusercontent.com/u/7895700?s=460&u=9fb297cd254dc15da7d67bbdfca6c178440b22fc&v=4',
      role: 'React Native Design',
    },
  ],
  references: [
    {
      title: 'Github Profile',
      link: 'https://github.com/kishanmundha',
    },
    {
      title: 'Orignal Design',
      link: 'https://www.pinterest.ca/pin/649996158697378013/',
    },
  ],
};

export default data;
