import React from 'react';
import { RootStackParamList } from '@app/types';
import {
  RouteProp,
  useRoute,
  useNavigation,
  NavigationProp,
} from '@react-navigation/native';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'DemoScreen'>;
type NavScreenRouteProp = NavigationProp<RootStackParamList, 'DemoScreen'>;

const DemoScreen: React.FC = () => {
  const navigation = useNavigation<NavScreenRouteProp>();
  const route = useRoute<ProfileScreenRouteProp>();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: route.params.item.showHeader ? undefined : () => null,
      title: route.params.item.title,
    });
  }, [navigation, route.params.item.showHeader, route.params.item.title]);

  const C = route.params.item.component;

  if (!C) {
    return null;
  }

  return <C />;
};

export default DemoScreen;
