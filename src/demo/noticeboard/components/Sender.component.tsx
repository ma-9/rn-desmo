import React from 'react';
import { View, Text, StyleSheet, PixelRatio } from 'react-native';
import moment from 'moment';

import { PrimaryColor, SecondaryColorOpacity } from '../colors/index';
import MediaComponent from './Media.component';

interface ISenderProps {
  contentType: 'text' | 'image' | 'video';
  time?: Date;
  content: string;
}

const SenderComponent: React.FC<ISenderProps> = props => {
  const { content, contentType, time } = props;

  const FormattedTime = moment(time).format('HH:MM');

  return (
    <View style={styles.rightContainer}>
      {contentType === 'text' ? (
        <Text style={styles.rightText}>{content}</Text>
      ) : (
        <MediaComponent content={content} contentType={contentType} />
      )}
      <Text style={styles.timeText}>{FormattedTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rightContainer: {
    alignItems: 'flex-end',
    paddingVertical: PixelRatio.get() * 7,
  },
  timeText: {
    fontWeight: 'bold',
    fontSize: PixelRatio.get() * 4.5,
    color: SecondaryColorOpacity,
  },
  rightText: {
    color: 'white',
    backgroundColor: PrimaryColor,
    padding: PixelRatio.get() * 5,
    borderRadius: 30,
    borderBottomRightRadius: 0,
    fontWeight: '700',
    fontSize: PixelRatio.get() * 5,
  },
});

export default SenderComponent;
