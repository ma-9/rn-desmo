import React from 'react';
import { View, Text, StyleSheet, PixelRatio, Image } from 'react-native';

interface IChatBodyProps {
  PrimaryColor: string;
  SecondaryColor: string;
  SecondaryColorOpacity: string;
}

const ChatBodyComponent: React.FC<IChatBodyProps> = props => {
  const { PrimaryColor, SecondaryColor, SecondaryColorOpacity } = props;
  return (
    <View style={styles.root}>
      <View style={styles.todayContainer}>
        <Text style={[styles.todayText, { color: SecondaryColor }]}>Today</Text>
      </View>
      <View>
        <View style={styles.rightContainer}>
          <Text style={[styles.rightText, { backgroundColor: PrimaryColor }]}>
            Hello, Shane nice to meet with you.
          </Text>
          <Text style={[styles.timeText, { color: SecondaryColorOpacity }]}>
            5:56 PM
          </Text>
        </View>
        <View style={styles.leftContainer}>
          <Text style={[styles.leftText, { color: SecondaryColor }]}>
            Can you please send me the pic that you have taken last night?
          </Text>
          <Text style={[styles.timeText, { color: SecondaryColorOpacity }]}>
            5:57 PM
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <Image
            source={{
              uri:
                'https://firebasestorage.googleapis.com/v0/b/testingfirebase-7eb53.appspot.com/o/MundhaSOft%2Fnoticeboard%2Fportrait.png?alt=media&token=11220cf6-7b99-49eb-b146-a3a46de030a6',
            }}
            style={styles.imageContainer}
          />
          <Text style={[styles.timeText, { color: SecondaryColorOpacity }]}>
            5:58 PM
          </Text>
        </View>
        <View style={styles.leftContainer}>
          <Text style={[styles.leftText, { color: SecondaryColor }]}>
            Thank you very much for sharing with me.
          </Text>
          <Text style={[styles.timeText, { color: SecondaryColorOpacity }]}>
            6:56 PM
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
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
});

export default ChatBodyComponent;
