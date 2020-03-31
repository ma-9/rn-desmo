import { IDemoItem } from '@app/types';
import SmartHomeData from './smart-home/data';
import SignUpDesign from './signup-screen/data';

const demoData: IDemoItem[] = [SmartHomeData, SignUpDesign];

export const getDemoList = () => {
  return demoData;
};
