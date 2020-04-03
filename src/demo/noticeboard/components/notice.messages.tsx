import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';

// Importing Notice from external file (backend)
import Notices from '../data/notices';

interface INotificationMessageProps {
  PrimaryColor: string;
  SecondaryColor: string;
}

const NotificationMessage: React.FC<INotificationMessageProps> = props => {
  const { PrimaryColor, SecondaryColor } = props;

  return (
    <View style={style.root}>
      {Notices.map(data => (
        <TouchableOpacity>
          <View style={style.container}>
            <View style={style.AvatarContainer}>
              <Image source={{ uri: data.imageUrl }} style={style.avatarIcon} />
            </View>
            <View style={style.MessageContainer}>
              <View style={style.MessageHeader}>
                <Text style={style.msgTItle}> {data.title} </Text>
                <Text style={[style.arrivedTime, { color: SecondaryColor }]}>
                  {' '}
                  {data.arrivedTime}{' '}
                </Text>
              </View>
              <View style={style.MessageBody}>
                <Text
                  style={[style.bodyText, { color: SecondaryColor }]}
                  numberOfLines={2}>
                  {data.message}
                </Text>
                <View
                  style={[
                    style.unreadMsgSign,
                    { backgroundColor: PrimaryColor },
                  ]}>
                  <Text style={style.unreadCount}> {data.unreadCount} </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    marginVertical: PixelRatio.get() * 5,
  },
  avatarIcon: {
    height: PixelRatio.get() * 28,
    width: PixelRatio.get() * 28,
  },
  AvatarContainer: {
    flex: 1,
  },
  MessageContainer: {
    borderBottomWidth: 0.5,
    flex: 3,
  },
  MessageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  msgTItle: {
    fontWeight: 'bold',
    fontSize: PixelRatio.get() * 7,
  },
  arrivedTime: {
    fontWeight: 'bold',
  },
  MessageBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodyText: {
    flex: 6,
  },
  unreadMsgSign: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 30,
  },
  unreadCount: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default NotificationMessage;
