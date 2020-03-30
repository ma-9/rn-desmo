import { IDemoItem } from '@app/types';
import LivingRoomScreen from './living-room.screen';
import CantonmentScreen from './cantonment.screen';

const data: IDemoItem = {
  id: 'smart-home',
  title: 'Smart home',
  thumbnail:
    'https://raw.githubusercontent.com/kishanmundha/rn-desmo/master/screenshots/smart-home/index.png',
  screens: [
    {
      showHeader: false,
      id: 'living-room',
      title: 'Living Room',
      thumbnail:
        'https://raw.githubusercontent.com/kishanmundha/rn-desmo/master/screenshots/smart-home/living-room.png',
      component: LivingRoomScreen,
    },
    {
      showHeader: false,
      id: 'cantonment',
      title: 'Cantonment',
      thumbnail:
        'https://raw.githubusercontent.com/kishanmundha/rn-desmo/master/screenshots/smart-home/cantonment.png',
      component: CantonmentScreen,
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
      link: 'https://dribbble.com/shots/6655071-Smart-Home-App',
    },
  ],
};

export default data;
