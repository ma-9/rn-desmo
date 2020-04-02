import { IDemoItem } from '@app/types';
import LoginScreen from './login-screen';
import HomeScreen from './home-screen';
import ChatScreen from './chat-screen';

const data: IDemoItem = {
  id: 'noticeboard-design',
  title: 'Noticeboard App',
  thumbnail:
    'https://firebasestorage.googleapis.com/v0/b/testingfirebase-7eb53.appspot.com/o/MundhaSOft%2Fnoticeboard%2FThumbnail.jpg?alt=media&token=5f6de676-3a68-409c-a699-8c0c92ed8a54',
  screens: [
    {
      showHeader: false,
      id: 'noticeboard-login-screen',
      title: 'Login',
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/testingfirebase-7eb53.appspot.com/o/MundhaSOft%2Fnoticeboard%2FLoginScreen.png?alt=media&token=5c957e9b-a20f-45f6-9993-cf679a376804',
      component: LoginScreen,
    },
    {
      showHeader: false,
      id: 'noticeboard-home-screen',
      title: 'Home',
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/testingfirebase-7eb53.appspot.com/o/MundhaSOft%2Fnoticeboard%2FChat%20Screen.png?alt=media&token=a47b2b5e-dd36-4d8a-9171-7c892fe11da5',
      component: HomeScreen,
    },
    {
      showHeader: false,
      id: 'noticeboard-chat-screen',
      title: 'Chatroom',
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/testingfirebase-7eb53.appspot.com/o/MundhaSOft%2Fnoticeboard%2FHome%20Screen.png?alt=media&token=90bd406b-5855-4dcf-9df2-7805be0b9c4d',
      component: ChatScreen,
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
      link:
        'https://xd.adobe.com/view/10d550be-12f2-4039-51b7-86034c3fd709-66e4/',
    },
  ],
};

export default data;
