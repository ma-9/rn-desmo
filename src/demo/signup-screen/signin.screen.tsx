import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
} from 'react-native';

import AuthenticationSection from './components/authentication-section';
import Header from './components/header';
import Footer from './components/footer';

const LivingRoomScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require('./assets/singin_background.png')}
      style={styles.root}>
      <Header name="chevron-left" color="white" />
      <View style={styles.heading}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.title}>Back</Text>
      </View>
      <View style={styles.inputSection}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="grey"
          textContentType="emailAddress"
          placeholder="Email"
        />
        <TextInput
          textContentType="password"
          secureTextEntry={true}
          style={styles.textInput}
          placeholderTextColor="grey"
          placeholder="Password"
        />
      </View>
      <View style={styles.actionContainer}>
        <AuthenticationSection color="black" label="Sign in" />
      </View>
      <Footer label="Signup" forgotPasswordLink color="black" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
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
    marginTop: 120,
    paddingHorizontal: 40,
  },
  textInput: {
    marginTop: 30,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: 'grey',
    fontSize: 20,
  },
  actionContainer: {
    padding: 35,
    marginBottom: 20,
  },
});

export default LivingRoomScreen;
