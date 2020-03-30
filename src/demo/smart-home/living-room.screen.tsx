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
import ActionButton from './components/action-button.component';
import TabIcon from './components/tab-icon.component';

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
        <View style={styles.headerLeft}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.headerTitle}>Living Room</Text>
            <Icon
              name="chevron-down"
              size={18}
              color="rgb(1, 121, 224)"
              style={styles.headerOptionIcon}
            />
          </View>
          <View>
            <Text style={styles.headerSubtitle}>
              Access your devices from any room
            </Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <Icon name="power" size={32} color="rgb(217, 16, 76)" />
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.bodyLeft}>
          <View style={{ flex: 1 }}>
            <Text style={styles.temperatureTitle}>25ºc</Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="sun" size={16} color="rgb(59, 84, 106)" />
              <Text style={{ color: 'rgb(59, 84, 106)', marginLeft: 8 }}>
                37ºc Outside
              </Text>
            </View>
          </View>
          <View>
            <ActionButton title="Cooling mode" icon="aperture" />
            <ActionButton title="Set timer" icon="clock" />
            <ActionButton title="Turbo mode" icon="wind" />
          </View>
        </View>
        <View style={styles.bodyRight}>
          <Thermometer value={25} min={16} max={30} />
        </View>
      </View>
      <View>
        <View style={styles.tabContainer}>
          <TabIcon name="home" />
          <TabIcon name="wifi" active />
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
    backgroundColor: 'rgb(252, 253, 255)',
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
  },
  headerContainer: {
    flexDirection: 'row',
  },
  headerLeft: {
    flex: 1,
    height: 72,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 32,
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
  bodyContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 40,
  },
  bodyLeft: {
    flex: 1,
    flexDirection: 'column',
  },
  bodyRight: {
    flexDirection: 'row',
  },
  temperatureTitle: {
    color: 'rgb(1, 121, 224)',
    fontSize: 64,
    fontWeight: '300',
  },
  tabContainer: {
    flexDirection: 'row',
  },
});

export default LivingRoomScreen;
