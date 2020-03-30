import React from 'react';
import {
  View,
  Image,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';
import {
  useTheme,
  useNavigation,
  useRoute,
  RouteProp,
} from '@react-navigation/native';
import { RootStackParamList } from '@app/types';
import { HeaderIconButton } from '@app/components';

const { width } = Dimensions.get('window');

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'DemoScreenList'>;

const DemoScreenList: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const route = useRoute<ProfileScreenRouteProp>();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderIconButton
          onPress={() =>
            navigation.navigate('DemoInfo', { item: route.params.item })
          }
          font="Ionicons"
          name="ios-information-circle-outline"
        />
      ),
    });
  }, [colors.primary, navigation, route.params.item]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.item.title || 'Demo screens',
    });
  }, [navigation, route.params.item.title]);

  return (
    <View style={styles.root}>
      <SafeAreaView />
      <FlatList
        style={styles.container}
        data={route.params.item.screens}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate('DemoScreen', { item })}>
            <View style={styles.itemContainer}>
              <View style={styles.itemInnerContainer}>
                <Image
                  source={{ uri: item.thumbnail }}
                  style={styles.thumbnail}
                />
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  container: {
    padding: 8,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, .2)',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  itemInnerContainer: {
    backgroundColor: 'white',
    margin: 8,
    padding: 8,
    borderRadius: 8,
  },
  thumbnail: {
    width: width / 2 - 40,
    height: width / 2 - 40,
  },
  title: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 16,
  },
});

export default DemoScreenList;
