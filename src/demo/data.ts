import { IDemoItem } from '@app/types';
import SmartHomeData from './smart-home/data';
import SignUpDesign from './signup-screen/data';
import WeatherLandingPage from './weather-landing-page/data';

const demoData: IDemoItem[] = [SmartHomeData, SignUpDesign, WeatherLandingPage];

export const getDemoList = () => {
  return demoData;
};
