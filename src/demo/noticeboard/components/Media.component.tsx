import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  PixelRatio,
  Linking,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface IMediaProps {
  contentType: 'image' | 'video';
  content: string;
}

const MediaComponent: React.FC<IMediaProps> = props => {
  const { content, contentType } = props;

  return (
    <View>
      {contentType === 'image' ? (
        <Image
          source={{
            uri: content,
          }}
          style={styles.imageContainer}
        />
      ) : (
        <TouchableOpacity
          style={styles.videoHandler}
          onPress={() => Linking.openURL(content)}>
          <Icon name="youtube" color="red" size={75} />
          <Text>Open Video in Browser</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: PixelRatio.get() * 65,
    width: PixelRatio.get() * 65,
    borderRadius: 10,
  },
  videoHandler: {
    backgroundColor: 'rgba(127,127,127,0.2)',
    borderColor: 'red',
    borderWidth: 0.4,
    borderRadius: 10,
    padding: PixelRatio.get() * 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MediaComponent;
