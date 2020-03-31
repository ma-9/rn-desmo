import { IDemoItem } from '@app/types';
import SignUpScreen from './signup.screen';
import SignInScreen from './signin.screen';

const data: IDemoItem = {
  id: 'signup-design',
  title: 'Signup Design',
  thumbnail:
    'https://i.pinimg.com/564x/94/c9/61/94c961f7c42368a78546ccf71862d8f7.jpg',
  screens: [
    {
      showHeader: false,
      id: 'signup-screen',
      title: 'Sign Up',
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/testingfirebase-7eb53.appspot.com/o/MundhaSOft%2FSign-up-screen.jpg?alt=media&token=2098e406-a471-4f2e-968b-957f5c9c79c1',
      component: SignUpScreen,
    },
    {
      showHeader: false,
      id: 'signin-screen',
      title: 'Sign In',
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/testingfirebase-7eb53.appspot.com/o/MundhaSOft%2FSign-in-screen.jpg?alt=media&token=86bf699b-20b4-4ea3-be43-8a3fcb12dcf2',
      component: SignInScreen,
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
      link: 'https://in.pinterest.com/pin/814799757571359325/',
    },
  ],
};

export default data;
