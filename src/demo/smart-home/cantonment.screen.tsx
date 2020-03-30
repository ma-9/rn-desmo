/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import Thermometer from './components/thermometer.component';
import TabIcon from './components/tab-icon.component';
import HomeActionSwitch from './components/home-action-switch.component';

const LivingRoomScreen: React.FC = () => {
  return (
    <View style={styles.root}>
      {Platform.OS === 'android' && (
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
      )}
      <SafeAreaView />
      <View style={styles.headerContainer}>
        <View>
          <Icon
            name="map-pin"
            size={40}
            color="rgb(1, 121, 224)"
            style={styles.headerOptionIcon}
          />
        </View>
        <View style={styles.headerLeft}>
          <View>
            <Text style={styles.headerTitle}>Cantonment</Text>
          </View>
          <View>
            <Text style={styles.headerSubtitle}>Just Updated</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingRight: 24,
            alignItems: 'center',
          }}>
          <Icon name="cloud" size={32} color="rgb(144, 162, 171)" />
          <Text
            style={{
              fontSize: 36,
              marginLeft: 8,
              color: 'rgb(1, 121, 224)',
              fontWeight: '300',
            }}>
            37ºc
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <View style={{ marginVertical: 16 }}>
          <View style={{ paddingHorizontal: 12, flexDirection: 'row' }}>
            <View style={{ height: 200, flex: 1 }}>
              <HomeActionSwitch
                icon="tv"
                title="Smart TV"
                subtitle="Philips S-DR8 4K"
                value={true}
              />
            </View>
            <View style={{ height: 200, flex: 1 }}>
              <HomeActionSwitch
                icon="battery"
                title="Air"
                subtitle="Panasonic F-154"
                value={true}
                active
              />
            </View>
          </View>
          <View style={{ paddingHorizontal: 12, flexDirection: 'row' }}>
            <View style={{ height: 200, flex: 1 }}>
              <HomeActionSwitch
                icon="hard-drive"
                title="Router"
                subtitle="TP-Link 847"
                value={true}
              />
            </View>
            <View style={{ height: 200, flex: 1 }}>
              <HomeActionSwitch
                icon="disc"
                title="Light Blub"
                subtitle="Philips HUE 2.0"
                value={false}
              />
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 64 }}>
          <View
            style={{
              marginBottom: 16,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{ marginLeft: 24, flex: 1 }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 'bold',
                  color: 'rgb(57, 85, 112)',
                }}>
                Air Conditioner
              </Text>
              <Text style={{ fontSize: 16, color: 'rgb(1, 121, 224)' }}>
                Panasonic F-154
              </Text>
            </View>
            <View
              style={{
                width: 72,
                height: 72,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="more-vertical" size={24} color={'rgb(57, 85, 112)'} />
            </View>
          </View>
          <View style={{ marginHorizontal: 24 }}>
            <Thermometer horizontal value={25} min={16} max={30} />
          </View>
        </View>
      </View>
      <View>
        <View style={styles.tabContainer}>
          <TabIcon name="home" active />
          <TabIcon name="wifi" />
          <TabIcon name="zap" />
          <TabIcon name="settings" />
        </View>
        <SafeAreaView />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgb(237, 239, 243)',
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
  },
  headerLeft: {
    flex: 1,
    height: 72,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 8,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'rgb(57, 85, 112)',
  },
  headerOptionIcon: {
    marginLeft: 8,
  },
  headerSubtitle: {
    color: 'rgb(144, 162, 171)',
  },
  headerRight: {
    width: 72,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
  },
});

export default LivingRoomScreen;
