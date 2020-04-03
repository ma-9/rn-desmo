import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SecondaryColor = 'rgba(127,127,127,0.7)';

const ChatHeader = () => {
  return (
    <View style={styles.root}>
      <TouchableOpacity>
        <Icon name="arrow-left" color={SecondaryColor} size={35} />
      </TouchableOpacity>
      <Text style={styles.userName}> Shane Martinez </Text>
      <TouchableOpacity>
        <Icon name="info" color={SecondaryColor} size={35} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    fontSize: PixelRatio.get() * 7.5,
    fontWeight: 'bold',
    color: 'grey',
  },
});

export default ChatHeader;
