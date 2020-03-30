import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Switch from './switch-component';

interface IHomeActionSwitchProps {
  icon: string;
  title: string;
  subtitle: string;
  value: boolean;
  active?: boolean;
}

const HomeActionSwitch: React.FC<IHomeActionSwitchProps> = ({
  icon,
  title,
  subtitle,
  value,
  active,
}) => {
  const rootStyle = { backgroundColor: active ? 'rgb(1, 121, 224)' : 'white' };
  const titleStyle = { color: active ? 'white' : 'rgb(57, 85, 112)' };
  const subtitleStyle = { color: active ? 'white' : 'rgb(144, 162, 171)' };

  return (
    <View style={[styles.root, rootStyle]}>
      <View style={styles.section1}>
        <Icon
          name={icon}
          size={28}
          color={active ? 'white' : 'rgb(1, 121, 224)'}
        />
        <Switch value={value} invertColor={active} />
      </View>
      <View style={styles.section2}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 12,
    padding: 24,
    borderRadius: 16,
  },
  section1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  section2: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  subtitle: {
    marginTop: 4,
  },
});

export default HomeActionSwitch;
