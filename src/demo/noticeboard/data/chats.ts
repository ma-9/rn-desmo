interface IChats {
  _id: string;
  contentType: 'text' | 'image' | 'video';
  time: Date;
  content: string;
  receiver?: boolean;
}

const chats: IChats[] = [
  {
    _id: '1',
    contentType: 'text',
    time: new Date(),
    content: ' Hello, Shane nice to meet with you.',
  },
  {
    _id: '2',
    contentType: 'text',
    time: new Date(),
    content: 'Can you please send me the pic that you have taken last night?',
    receiver: true,
  },
  {
    _id: '3',
    contentType: 'image',
    time: new Date(),
    content:
      'https://firebasestorage.googleapis.com/v0/b/testingfirebase-7eb53.appspot.com/o/MundhaSOft%2Fnoticeboard%2Fportrait.png?alt=media&token=11220cf6-7b99-49eb-b146-a3a46de030a6',
  },
  {
    _id: '4',
    contentType: 'text',
    time: new Date(),
    content: 'Thank you very much for sharing with me.',
    receiver: true,
  },
  {
    _id: '5',
    contentType: 'video',
    time: new Date(),
    content: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  },
];

export default chats;
