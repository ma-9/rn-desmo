import React from 'react';
import { View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

interface ITabIconProps {
  name: string;
  active?: boolean;
}

const TabIcon: React.FC<ITabIconProps> = props => (
  <View style={styles.root}>
    <Icon
      name={props.name}
      size={props.active ? 32 : 24}
      color={props.active ? 'rgb(1, 121, 224)' : 'rgb(59, 84, 106)'}
    />
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabIcon;
