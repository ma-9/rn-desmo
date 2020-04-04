import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  PixelRatio,
  ScrollView,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

// Importing Chat.ts
import Chats from './data/chats';

// Importing Components
import SenderComponent from './components/Sender.component';
import ReceiverComponent from './components/Receiver.component';

// Inner Components
const ChatHeader = () => {
  return (
    <View style={styles.chatHeaderRoot}>
      <TouchableOpacity>
        <Icon name="arrow-left" color={SecondaryColorOpacity} size={35} />
      </TouchableOpacity>
      <Text style={[styles.userName, { color: SecondaryColor }]}>
        Shane Martinez
      </Text>
      <TouchableOpacity>
        <Icon name="info" color={SecondaryColorOpacity} size={35} />
      </TouchableOpacity>
    </View>
  );
};

const ChatBodyComponent = () => {
  return (
    <View style={styles.chatBodyRoot}>
      <View style={styles.todayContainer}>
        <Text style={[styles.todayText, { color: SecondaryColor }]}>Today</Text>
      </View>
      {Chats.map(data => (
        <View key={data._id}>
          {data.receiver ? (
            <ReceiverComponent
              content={data.content}
              contentType={data.contentType}
              time={data.time}
            />
          ) : (
            <SenderComponent
              content={data.content}
              contentType={data.contentType}
              time={data.time}
            />
          )}
        </View>
      ))}
    </View>
  );
};

const ChatInputComponent = () => {
  return (
    <View style={styles.chatFooterRoot}>
      <TouchableOpacity
        style={[styles.addBtn, { backgroundColor: PrimaryColor }]}>
        <Icon name="plus" color="white" size={20} />
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <KeyboardAvoidingView>
          <TextInput style={styles.inputBox} placeholder="Notice..." />
        </KeyboardAvoidingView>
      </View>
      <TouchableOpacity style={styles.emojiBtn}>
        <Icon name="smile" color={SecondaryColor} size={30} />
      </TouchableOpacity>
    </View>
  );
};

// Importing Colors
import { SecondaryColorOpacity, PrimaryColor, SecondaryColor } from './colors';
import { TextInput } from 'react-native-gesture-handler';

const ChatScreen = () => {
  return (
    <View style={styles.root}>
      {Platform.OS === 'android' && (
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
      )}
      <View style={styles.headerContainer}>
        <ChatHeader />
      </View>
      <ScrollView>
        <View style={styles.bodyContainer}>
          <ChatBodyComponent />
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <ChatInputComponent />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

  // Chat Header Component
  chatHeaderRoot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    fontSize: PixelRatio.get() * 7.5,
    fontWeight: 'bold',
  },

  // Chat Body Component
  chatBodyRoot: {
    padding: PixelRatio.get() * 2,
  },
  todayContainer: {
    alignItems: 'center',
  },
  todayText: {
    fontSize: PixelRatio.get() * 6,
    fontWeight: 'bold',
  },
  rightContainer: {
    alignItems: 'flex-end',
    paddingVertical: PixelRatio.get() * 7,
  },
  leftContainer: {
    paddingVertical: PixelRatio.get() * 7,
    alignItems: 'flex-start',
    maxWidth: PixelRatio.get() * 90,
  },
  timeText: {
    fontWeight: 'bold',
    fontSize: PixelRatio.get() * 4.5,
  },
  imageContainer: {
    height: PixelRatio.get() * 65,
    width: PixelRatio.get() * 65,
    borderRadius: 10,
  },
  rightText: {
    color: 'white',
    padding: PixelRatio.get() * 5,
    borderRadius: 30,
    borderBottomRightRadius: 0,
    fontWeight: '700',
    fontSize: PixelRatio.get() * 5,
  },
  leftText: {
    backgroundColor: 'white',
    padding: PixelRatio.get() * 5,
    borderRadius: 30,
    borderBottomLeftRadius: 0,
    fontWeight: '700',
    fontSize: PixelRatio.get() * 5,
  },

  // Chat Footer Component
  chatFooterRoot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: PixelRatio.get() * 5,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    minHeight: PixelRatio.get() * 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  addBtn: {
    height: 30,
    width: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emojiBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: PixelRatio.get() * 100,
    fontSize: PixelRatio.get() * 6,
    fontWeight: 'bold',
  },
});

export default ChatScreen;
