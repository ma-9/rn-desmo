import { IDemoItem } from '@app/types';
import SmartHomeData from './smart-home/data';

const demoData: IDemoItem[] = [SmartHomeData];

export const getDemoList = () => {
  return demoData;
};
