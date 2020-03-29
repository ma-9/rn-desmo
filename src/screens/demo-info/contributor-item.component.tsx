import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

interface IProps {
  fullname: string;
  role: string;
  thumbnail: string;
}

const ContributorItem: React.FC<IProps> = ({ fullname, role, thumbnail }) => (
  <View style={styles.root}>
    <View style={styles.leftContainer}>
      <Image source={{ uri: thumbnail }} style={styles.avatarImage} />
    </View>
    <View style={styles.itemStyles}>
      <Text style={styles.primaryText}>{fullname}</Text>
      <Text style={styles.secondaryText}>{role}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  itemStyles: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 16,
    justifyContent: 'center',
    paddingRight: 16,
  },
  leftContainer: {
    width: 72,
    height: 72,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  avatarImage: {
    height: 48,
    width: 48,
    borderRadius: 24,
    resizeMode: 'contain',
  },
});

export default ContributorItem;
