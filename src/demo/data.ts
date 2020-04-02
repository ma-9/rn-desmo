import { IDemoItem } from '@app/types';
import SmartHomeData from './smart-home/data';
import SignUpDesign from './signup-screen/data';
import Noticeboard from './noticeboard/data';

const demoData: IDemoItem[] = [SmartHomeData, SignUpDesign, Noticeboard];

export const getDemoList = () => {
  return demoData;
};
