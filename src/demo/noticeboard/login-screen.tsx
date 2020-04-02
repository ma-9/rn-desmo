import React from 'react';
import {
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Platform,
  View,
  PixelRatio,
} from 'react-native';

// Importing Components
import LoginComponent from './components/login.component';

import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

const loginscreen = () => {
  return (
    <ImageBackground
      source={require('../../../screenshots/noticeboard/landingpage-background.png')}
      style={styles.root}>
      {Platform.OS === 'android' && (
        <StatusBar
          translucent
          backgroundColor="#4CAF50"
          barStyle="dark-content"
        />
      )}
      <View style={styles.container}>
        <View style={styles.title}>
          <Icon name="laptop" size={30} color="#4CAF50" />
          <Text style={styles.noticeText}> notice</Text>
          <Text style={styles.boardText}>board</Text>
        </View>
        <View style={styles.loginComponentContainer}>
          <LoginComponent />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}> Already have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}> SignUp </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
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
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: PixelRatio.get() * 12,
  },
  title: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  noticeText: {
    color: 'rgb(127,127,127)',
    fontSize: PixelRatio.get() * 12,
    fontWeight: '600',
  },
  boardText: {
    fontSize: PixelRatio.get() * 12,
    fontWeight: '700',
    color: '#4CAF50',
  },
  loginComponentContainer: {
    paddingVertical: PixelRatio.get() * 15,
  },
  footerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: PixelRatio.get() * 8,
  },
  footerLink: {
    color: 'green',
    fontWeight: 'bold',
  },
  footerText: {
    fontWeight: 'bold',
    color: 'rgba(127,127,127,0.8)',
  },
});
export default loginscreen;
