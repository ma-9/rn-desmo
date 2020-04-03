export interface IDemoScreenItem {
  id: string;
  title: string;
  thumbnail: string;
  component: React.FC;
  showHeader?: boolean;
}

export interface ICollaborator {
  id: string;
  fullname: string;
  role: string;
  thumbnail: string;
}

export interface IReferences {
  title: string;
  link: string;
}

export interface IDemoItem {
  id: string;
  title: string;
  thumbnail: string;
  screens: IDemoScreenItem[];
  collaborators: ICollaborator[];
  references: IReferences[];
}

export interface INotices {
  id: string;
  imageUrl: string;
  title: string;
  arrivedTime: string;
  message: string;
  unreadCount: number;
}

export type RootStackParamList = {
  Home: {};
  About: {};
  DemoScreenList: { item: IDemoItem };
  DemoScreen: { item: IDemoScreenItem };
  DemoInfo: { item: IDemoItem };
};

export type TypeIconFont = 'Ionicons';
