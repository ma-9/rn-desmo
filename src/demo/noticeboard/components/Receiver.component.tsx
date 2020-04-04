import React from 'react';
import { View, Text, StyleSheet, PixelRatio } from 'react-native';
import moment from 'moment';

import { SecondaryColorOpacity, SecondaryColor } from '../colors/index';
import MediaComponent from './Media.component';

interface IReceiverProps {
  contentType: 'text' | 'image' | 'video';
  time?: Date;
  content: string;
}

const ReceiverComponent: React.FC<IReceiverProps> = props => {
  const { content, contentType, time } = props;

  const FormattedTime = moment(time).format('HH:MM');

  return (
    <View style={styles.leftContainer}>
      {contentType === 'text' ? (
        <Text style={styles.leftText}>{content}</Text>
      ) : (
        <MediaComponent content={content} contentType={contentType} />
      )}
      <Text style={styles.timeText}> {FormattedTime} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  leftContainer: {
    paddingVertical: PixelRatio.get() * 7,
    alignItems: 'flex-start',
    maxWidth: PixelRatio.get() * 90,
  },
  timeText: {
    color: SecondaryColorOpacity,
    fontWeight: 'bold',
    fontSize: PixelRatio.get() * 4.5,
  },
  leftText: {
    color: SecondaryColor,
    backgroundColor: 'white',
    padding: PixelRatio.get() * 5,
    borderRadius: 30,
    borderBottomLeftRadius: 0,
    fontWeight: '700',
    fontSize: PixelRatio.get() * 5,
  },
});

export default ReceiverComponent;
