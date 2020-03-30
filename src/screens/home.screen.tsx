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
import { getDemoList } from '../demo/data';

import { useTheme, useNavigation } from '@react-navigation/native';
import { HeaderIconButton } from '@app/components';

const { width } = Dimensions.get('window');
const demoList = getDemoList();

const HomeScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View>
          <HeaderIconButton
            onPress={() => navigation.navigate('About')}
            font="Ionicons"
            name="ios-information-circle-outline"
          />
        </View>
      ),
    });
  }, [colors.primary, navigation]);

  return (
    <View style={styles.root}>
      <SafeAreaView />
      <FlatList
        style={styles.container}
        data={demoList}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate('DemoScreenList', { item })}>
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

export default HomeScreen;
