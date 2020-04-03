import React from 'react';
import {
  View,
  Platform,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  PixelRatio,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';

// Importing Components
import TabContainer from './components/tabs.container';
import NoticeComponent from './components/notice.component';

// Importing Colors
import {
  whiteColor,
  SecondaryColorOpacity,
  PrimaryColor,
  ThemeColor,
  SecondaryColor,
} from './colors';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      {Platform.OS === 'android' && (
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
      )}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Icon name="search" color={SecondaryColorOpacity} size={30} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.noticeContainer}>
          <NoticeComponent
            PrimaryColor={PrimaryColor}
            SecondaryColor={SecondaryColor}
          />
        </View>
      </ScrollView>
      <View style={styles.floatingBtnContainer}>
        <TouchableOpacity style={styles.floatingBtn}>
          <FeatherIcon name="plus" color={whiteColor} size={40} />
        </TouchableOpacity>
      </View>
      <View>
        <TabContainer ThemeColor={ThemeColor} SecondaryColor={SecondaryColor} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
    flex: 1,
    justifyContent: 'space-between',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: PixelRatio.get() * 5,
  },
  noticeContainer: {
    paddingHorizontal: PixelRatio.get() * 5,
  },
  floatingBtnContainer: {
    bottom: PixelRatio.get() * 30,
    right: PixelRatio.get() * 5,
    position: 'absolute',
  },
  floatingBtn: {
    height: 70,
    width: 70,
    borderRadius: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PrimaryColor,
  },
});

export default HomeScreen;