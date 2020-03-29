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
} from 'react-native';
import { getDemoList } from '../demo/data';

import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme, useNavigation } from '@react-navigation/native';

const demoList = getDemoList();

const HomeScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerRight}
          onPress={() => navigation.navigate('About')}>
          <Icon
            name="ios-information-circle-outline"
            size={20}
            color={colors.primary}
          />
        </TouchableOpacity>
      ),
    });
  }, [colors.primary, navigation]);

  return (
    <View style={styles.root}>
      <SafeAreaView />
      <FlatList
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
  itemContainer: {
    flex: 1,
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
    margin: 16,
    padding: 8,
    borderRadius: 4,
  },
  thumbnail: {
    width: 160,
    height: 160,
  },
  title: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 16,
  },
  headerRight: {
    marginRight: 16,
  },
});

export default HomeScreen;
