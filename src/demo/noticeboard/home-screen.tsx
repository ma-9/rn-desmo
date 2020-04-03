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
          <Icon name="search" color="rgba(127,127,127,0.5)" size={30} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.noticeContainer}>
          <NoticeComponent />
        </View>
      </ScrollView>
      <View style={styles.floatingBtnContainer}>
        <TouchableOpacity style={styles.floatingBtn}>
          <FeatherIcon name="plus" color="white" size={40} />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <TabContainer />
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
  tabsContainer: {
    // backgroundColor: 'wheat',
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
    backgroundColor: 'rgb(97,184,101)',
  },
});

export default HomeScreen;
