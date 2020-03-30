import React from 'react';
import { StyleSheet, View, Text, Linking } from 'react-native';
import { TouchableItem } from '@app/components';

interface IProps {
  title: string;
  link: string;
}

const ReferenceItem: React.FC<IProps> = ({ title, link }) => {
  const handlePress = async () => {
    const canOpen = await Linking.canOpenURL(link);

    if (canOpen) {
      await Linking.openURL(link);
    }
  };

  return (
    <TouchableItem onPress={handlePress}>
      <View style={styles.root}>
        <View style={styles.itemStyles}>
          <Text style={styles.primaryText}>{title}</Text>
          <Text style={styles.secondaryText}>{link}</Text>
        </View>
      </View>
    </TouchableItem>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  itemStyles: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  primaryText: {
    fontSize: 16,
    color: 'black',
    opacity: 0.87,
  },
  secondaryText: {
    fontSize: 14,
    color: 'black',
    opacity: 0.54,
    marginTop: 4,
  },
  avatarImage: {
    height: 48,
    width: 48,
    borderRadius: 24,
    resizeMode: 'contain',
  },
});

export default ReferenceItem;
