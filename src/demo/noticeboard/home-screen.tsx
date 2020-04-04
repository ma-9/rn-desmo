import React, { useState } from 'react';
import {
  View,
  Platform,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  PixelRatio,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';

// Importing Notice from external file (backend)
import Notices from './data/notices';

// Importing Colors
import {
  whiteColor,
  SecondaryColorOpacity,
  PrimaryColor,
  ThemeColor,
  SecondaryColor,
} from './colors';

const NoticeComponent = () => {
  return (
    <View style={styles.noticeRoot}>
      <Text style={styles.title}> Notices </Text>
      <View>
        {Notices.map(data => (
          <TouchableOpacity key={data.id}>
            <View style={styles.container}>
              <View style={styles.AvatarContainer}>
                <Image
                  source={{ uri: data.imageUrl }}
                  style={styles.avatarIcon}
                />
              </View>
              <View style={styles.MessageContainer}>
                <View style={styles.MessageHeader}>
                  <Text style={styles.msgTItle}> {data.title} </Text>
                  <Text style={[styles.arrivedTime, { color: SecondaryColor }]}>
                    {' '}
                    {data.arrivedTime}{' '}
                  </Text>
                </View>
                <View style={styles.MessageBody}>
                  <Text
                    style={[styles.bodyText, { color: SecondaryColor }]}
                    numberOfLines={2}>
                    {data.message}
                  </Text>
                  <View
                    style={[
                      styles.unreadMsgSign,
                      { backgroundColor: PrimaryColor },
                    ]}>
                    <Text style={styles.unreadCount}> {data.unreadCount} </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const HomeScreen = () => {
  const [step, setStep] = useState(1);

  return (
    <SafeAreaView style={styles.root}>
      {Platform.OS === 'android' && (
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
      )}
      <View style={styles.searchIconContainer}>
        <TouchableOpacity>
          <Icon name="search" color={SecondaryColorOpacity} size={30} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.noticeContainer}>
          <NoticeComponent />
        </View>
      </ScrollView>
      <View style={styles.floatingBtnContainer}>
        <TouchableOpacity style={styles.floatingBtn}>
          <FeatherIcon name="plus" color={whiteColor} size={40} />
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.tabRoot}>
          {step === 1 ? (
            <TouchableOpacity
              onPress={() => setStep(1)}
              style={styles.iconContainer}>
              <Icon name="desktop" color={ThemeColor} size={28} />
              <Text style={[styles.activeDotContainer, { color: ThemeColor }]}>
                .
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setStep(1)}
              style={styles.iconContainer}>
              <Icon name="desktop" color={SecondaryColor} size={28} />
            </TouchableOpacity>
          )}
          {step === 2 ? (
            <TouchableOpacity
              onPress={() => setStep(2)}
              style={styles.iconContainer}>
              <Icon name="bell" color={ThemeColor} size={28} />
              <Text style={[styles.activeDotContainer, { color: ThemeColor }]}>
                .
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setStep(2)}
              style={styles.iconContainer}>
              <Icon name="bell" color={SecondaryColor} size={28} />
            </TouchableOpacity>
          )}
          {step === 3 ? (
            <TouchableOpacity
              onPress={() => setStep(3)}
              style={styles.iconContainer}>
              <Icon name="cog" color={ThemeColor} size={28} />
              <Text style={[styles.activeDotContainer, { color: ThemeColor }]}>
                .
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setStep(3)}
              style={styles.iconContainer}>
              <Icon name="cog" color={SecondaryColor} size={28} />
            </TouchableOpacity>
          )}
        </View>
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
  searchIconContainer: {
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

  // Css for Bottom Tabs
  tabRoot: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: PixelRatio.get() * 7,
  },
  iconContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
  },
  activeDotContainer: {
    marginTop: PixelRatio.get() * -16,
    fontSize: PixelRatio.get() * 20,
  },

  // Css for Notices Component
  noticeRoot: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: PixelRatio.get() * 12,
    fontWeight: '700',
    paddingVertical: PixelRatio.get() * 2,
  },
  container: {
    flexDirection: 'row',
    marginVertical: PixelRatio.get() * 5,
  },
  avatarIcon: {
    height: PixelRatio.get() * 28,
    width: PixelRatio.get() * 28,
  },
  AvatarContainer: {
    flex: 1,
  },
  MessageContainer: {
    borderBottomWidth: 0.5,
    flex: 3,
  },
  MessageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  msgTItle: {
    fontWeight: 'bold',
    fontSize: PixelRatio.get() * 7,
  },
  arrivedTime: {
    fontWeight: 'bold',
  },
  MessageBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodyText: {
    flex: 6,
  },
  unreadMsgSign: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 30,
  },
  unreadCount: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
