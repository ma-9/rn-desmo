import React from 'react';
import {
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Platform,
  View,
  PixelRatio,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Importing Components
import LoginComponent from './components/login.component';

// Importing Colors
import {
  LoginTextColor,
  whiteColor,
  SecondaryColorOpacity,
  PrimaryColor,
  ThemeColor,
  SecondaryColor,
} from './colors';

const loginscreen = () => {
  return (
    <ImageBackground
      source={require('../../../screenshots/noticeboard/landingpage-background.png')}
      style={styles.root}>
      {Platform.OS === 'android' && (
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
      )}
      <SafeAreaView style={styles.container}>
        <View style={styles.title}>
          <Icon name="laptop" size={30} color={PrimaryColor} />
          <Text style={styles.noticeText}> notice</Text>
          <Text style={styles.boardText}>board</Text>
        </View>
        <View style={styles.loginComponentContainer}>
          <LoginComponent
            ThemeColor={ThemeColor}
            PrimaryColor={PrimaryColor}
            SecondaryColorOpacity={SecondaryColorOpacity}
            whiteColor={whiteColor}
            LoginTextColor={LoginTextColor}
          />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}> Already have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}> SignUp </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
    color: SecondaryColor,
    fontSize: PixelRatio.get() * 12,
    fontWeight: '600',
  },
  boardText: {
    fontSize: PixelRatio.get() * 12,
    fontWeight: '700',
    color: PrimaryColor,
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
    color: ThemeColor,
    fontWeight: 'bold',
  },
  footerText: {
    fontWeight: 'bold',
    color: SecondaryColorOpacity,
  },
});
export default loginscreen;
