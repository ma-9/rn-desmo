import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface IChatHeaderProps {
  SecondaryColor: string;
  SecondaryColorOpacity: string;
}

const ChatHeader: React.FC<IChatHeaderProps> = props => {
  const { SecondaryColor, SecondaryColorOpacity } = props;
  return (
    <View style={styles.root}>
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

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    fontSize: PixelRatio.get() * 7.5,
    fontWeight: 'bold',
  },
});

export default ChatHeader;
