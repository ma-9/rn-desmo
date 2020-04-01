import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  StatusBar,
  Platform,
  SafeAreaView,
  PixelRatio,
} from 'react-native';

import AuthenticationSection from './components/authentication-section';
import Header from './components/header';
import Footer from './components/footer';

const SignUpScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require('./assets/signup_background.png')}
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
          <Text style={styles.title}>Create</Text>
          <Text style={styles.title}>Account</Text>
        </View>
        <View style={styles.inputContainer}>
          <KeyboardAvoidingView>
            <TextInput
              style={styles.textInput}
              placeholderTextColor="white"
              placeholder="Name"
            />
          </KeyboardAvoidingView>
          <KeyboardAvoidingView>
            <TextInput
              style={styles.textInput}
              placeholderTextColor="white"
              placeholder="Email"
              textContentType="emailAddress"
            />
          </KeyboardAvoidingView>
          <KeyboardAvoidingView>
            <TextInput
              style={styles.textInput}
              placeholderTextColor="white"
              placeholder="Password"
              textContentType="password"
              secureTextEntry={true}
            />
          </KeyboardAvoidingView>
        </View>
        <View>
          <AuthenticationSection color="white" label="Sign Up" />
        </View>
      </View>
      <View style={styles.footer}>
        <Footer label="Sign in" color="white" />
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
    borderColor: 'white',
    fontSize: PixelRatio.get() * 8,
    paddingVertical: PixelRatio.get() * 8,
  },
  inputContainer: {
    paddingVertical: PixelRatio.get() * 20,
  },
  container: {
    paddingHorizontal: PixelRatio.get() * 10,
    paddingVertical: PixelRatio.get() * 20,
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

export default SignUpScreen;
