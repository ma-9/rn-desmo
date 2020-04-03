import React from 'react';
import {
  View,
  StyleSheet,
  PixelRatio,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ChatPrimaryColor = 'rgb(97,184,101)';
const SecondaryColor = 'rgb(127,127,127)';

const ChatInputComponent = () => {
  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.addBtn}>
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

const styles = StyleSheet.create({
  root: {
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
    backgroundColor: ChatPrimaryColor,
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

export default ChatInputComponent;
