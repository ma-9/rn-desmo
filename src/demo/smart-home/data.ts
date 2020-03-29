import { IDemoItem } from '@app/types';
import LivingRoomScreen from './living-room.screen';

const data: IDemoItem = {
  id: 'smart-home',
  title: 'Smart home',
  thumbnail:
    'https://cdn.dribbble.com/users/856776/screenshots/6655071/smart_home.png',
  screens: [
    {
      showHeader: false,
      id: 'living-room',
      title: 'Living Room',
      thumbnail:
        'https://cdn.dribbble.com/users/856776/screenshots/6655071/smart_home.png',
      component: LivingRoomScreen,
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
