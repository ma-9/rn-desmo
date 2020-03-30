import React from 'react';
import TouchableItem from './touchable-item.component';
import { StyleSheet, Platform, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from './icon.component';
import { TypeIconFont } from '@app/types';

interface IProps {
  onPress?: () => void;
  name: string;
  font: TypeIconFont;
}
const HeaderIconButton: React.FC<IProps> = props => {
  const { colors } = useTheme();

  return (
    <View style={styles.root}>
      <TouchableItem
        style={styles.innerContainer}
        onPress={props.onPress}
        borderless
        pressColor="rgba(0, 0, 0, .32)">
        <Icon
          font={props.font}
          name={props.name}
          size={Platform.select({
            android: 24,
            ios: 20,
          })}
          color={Platform.select({
            android: 'rgba(0, 0, 0, 0.87)',
            ios: colors.primary,
          })}
        />
      </TouchableItem>
    </View>
  );
};

HeaderIconButton.defaultProps = {
  onPress: () => null,
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'transparent',
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HeaderIconButton;
