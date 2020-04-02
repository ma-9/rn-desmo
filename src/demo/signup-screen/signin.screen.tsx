import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  StatusBar,
  Platform,
  SafeAreaView,
  KeyboardAvoidingView,
  PixelRatio,
} from 'react-native';

import AuthenticationSection from './components/authentication-section';
import Header from './components/header';
import Footer from './components/footer';

const SignInScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require('./assets/singin_background.png')}
      style={styles.root}>
      {Platform.OS === 'android' && (
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
      )}
      <SafeAreaView />
      <View style={styles.appbar}>
        <Header name="chevron-left" color="white" />
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.title}>Back</Text>
        </View>
        <View style={styles.inputContainer}>
          <KeyboardAvoidingView>
            <TextInput
              style={styles.textInput}
              placeholderTextColor="grey"
              textContentType="emailAddress"
              placeholder="Email"
            />
          </KeyboardAvoidingView>
          <KeyboardAvoidingView>
            <TextInput
              textContentType="password"
              secureTextEntry={true}
              style={styles.textInput}
              placeholderTextColor="grey"
              placeholder="Password"
            />
          </KeyboardAvoidingView>
        </View>
        <View>
          <AuthenticationSection color="black" label="Sign in" />
        </View>
      </View>
      <View style={styles.footer}>
        <Footer label="Signup" forgotPasswordLink color="black" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
  },
  title: {
    fontSize: PixelRatio.get() * 13,
    color: 'white',
  },
  textInput: {
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
    fontSize: PixelRatio.get() * 8,
    paddingVertical: PixelRatio.get() * 8,
  },
  inputContainer: {
    paddingTop: PixelRatio.get() * 40,
    paddingBottom: PixelRatio.get() * 10,
  },
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: PixelRatio.get() * 10,
    flex: 1,
  },
  appbar: {
    paddingHorizontal: PixelRatio.get() * 5,
  },
  footer: {
    paddingHorizontal: PixelRatio.get() * 10,
    paddingVertical: PixelRatio.get() * 5,
  },
});

export default SignInScreen;
