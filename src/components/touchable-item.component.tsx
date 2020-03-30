import React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

const ANDROID_VERSION_LOLLIPOP = 21;

interface ITouchableItemProps extends TouchableOpacityProps {
  pressColor?: string;
  borderless?: boolean;
  useOpacityComponent?: boolean;
  children: React.ReactNode;
}

const TouchableItem = (props: ITouchableItemProps) => {
  const { style, pressColor, borderless, useOpacityComponent, ...rest } = props;
  if (
    Platform.OS === 'android' &&
    Platform.Version >= ANDROID_VERSION_LOLLIPOP &&
    !useOpacityComponent
  ) {
    return (
      <TouchableNativeFeedback
        {...rest}
        style={null}
        background={TouchableNativeFeedback.Ripple(
          pressColor || '',
          borderless || false,
        )}
        useForeground>
        <View style={style}>{props.children}</View>
      </TouchableNativeFeedback>
    );
  } else {
    return (
      <TouchableOpacity style={style} {...rest}>
        {props.children}
      </TouchableOpacity>
    );
  }
};

export default TouchableItem;
