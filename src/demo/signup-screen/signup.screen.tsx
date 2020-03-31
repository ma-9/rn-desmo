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
      <Header name="chevron-left" color="white" />
      <View style={styles.heading}>
        <Text style={styles.title}>Create</Text>
        <Text style={styles.title}>Account</Text>
      </View>
      <KeyboardAvoidingView style={styles.inputSection}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="white"
          placeholder="Name"
        />
        <TextInput
          style={styles.textInput}
          placeholderTextColor="white"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.textInput}
          placeholderTextColor="white"
          placeholder="Password"
          textContentType="password"
          secureTextEntry={true}
        />
      </KeyboardAvoidingView>
      <View style={styles.actionContainer}>
        <AuthenticationSection color="white" label="Sign Up" />
      </View>
      <Footer label="Sign in" color="white" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
  },
  heading: {
    paddingLeft: 40,
    paddingTop: 60,
  },
  title: {
    fontSize: 40,
    color: 'white',
  },
  inputSection: {
    paddingHorizontal: 40,
  },
  textInput: {
    marginTop: 30,
    backgroundColor: 'transparent',
    borderBottomWidth: 0.3,
    borderColor: 'white',
    fontSize: 20,
  },
  actionContainer: {
    padding: 35,
    marginTop: 40,
    marginBottom: 20,
  },
});

export default SignUpScreen;
