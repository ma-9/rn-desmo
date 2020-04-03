import React from 'react';
import { View, Text, StyleSheet, PixelRatio } from 'react-native';

// Importing Components
import NotificationMessage from './notice.messages';

interface INotificationProps {
  PrimaryColor: string;
  SecondaryColor: string;
}

const NoticeComponent: React.FC<INotificationProps> = props => {
  const { PrimaryColor, SecondaryColor } = props;
  return (
    <View style={styles.root}>
      <Text style={styles.title}> Notices </Text>
      <NotificationMessage
        PrimaryColor={PrimaryColor}
        SecondaryColor={SecondaryColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: PixelRatio.get() * 12,
    fontWeight: '700',
    paddingVertical: PixelRatio.get() * 2,
  },
});

export default NoticeComponent;
