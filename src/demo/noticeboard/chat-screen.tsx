import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  PixelRatio,
  ScrollView,
} from 'react-native';

// Importing Components
import ChatHeader from './components/chat.header';
import ChatBodyComponent from './components/chat.body';
import ChatInputComponent from './components/chat.footer';

const ChatScreen = () => {
  return (
    <View style={style.root}>
      {Platform.OS === 'android' && (
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
      )}
      <View style={style.headerContainer}>
        <ChatHeader />
      </View>
      <ScrollView>
        <View style={style.bodyContainer}>
          <ChatBodyComponent />
        </View>
      </ScrollView>
      <View style={style.footerContainer}>
        <ChatInputComponent />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
    flex: 1,
    justifyContent: 'space-between',
  },
  headerContainer: {
    paddingHorizontal: PixelRatio.get() * 2,
  },
  bodyContainer: {
    paddingHorizontal: PixelRatio.get() * 5,
    paddingVertical: PixelRatio.get() * 2,
  },
  footerContainer: {
    paddingHorizontal: PixelRatio.get() * 2,
    paddingVertical: PixelRatio.get() * 5,
  },
});

export default ChatScreen;
