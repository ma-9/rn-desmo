import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  PixelRatio,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const LoginComponent = () => {
  // const [isFocused, setisFocused] = useState(false);
  // const [isPasswordFocused, setisPasswordFocused] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameHasValue = username !== '';
  const passwordHasValue = password !== '';

  // const handleFocus = () => setisFocused(true);
  // const handleBlur = () => setisFocused(false);

  // const handlePasswordFocus = () => setisPasswordFocused(true);
  // const handlePasswordBlur = () => setisPasswordFocused(false);

  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  return (
    <View style={styles.root}>
      <View style={styles.title}>
        <Text style={styles.LoginText}>Login</Text>
        <Text style={styles.taglineText}>Makes you better</Text>
      </View>

      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.inputContainer}>
          <Icon name="user" color="rgba(127,127,127,0.5)" size={30} />
          <Text
            style={[
              styles.labelStyle,
              {
                top: !usernameHasValue ? 12 : -5,
                fontSize: !usernameHasValue ? 18 : 14,
              },
            ]}>
            username
          </Text>
          <TextInput
            // onFocus={handleFocus}
            // onBlur={handleBlur}
            value={username}
            onChange={handleUsernameChange}
            style={styles.textInput}
          />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView style={styles.inputContainer}>
          <Icon name="lock" color="rgba(127,127,127,0.5)" size={30} />
          <Text
            style={[
              styles.labelStyle,
              {
                top: !passwordHasValue ? 12 : -5,
                fontSize: !passwordHasValue ? 18 : 14,
              },
            ]}>
            Password
          </Text>
          <TextInput
            // onFocus={handlePasswordFocus}
            // onBlur={handlePasswordBlur}
            autoCompleteType="password"
            textContentType="password"
            value={password}
            onChange={handlePasswordChange}
            secureTextEntry={true}
            style={styles.textInput}
          />
          <TouchableOpacity>
            <Text style={styles.forgotLink}>Forgot</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Login</Text>
          <Icon name="chevron-right" color="white" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    paddingVertical: PixelRatio.get() * 5,
  },
  LoginText: {
    fontSize: PixelRatio.get() * 13,
    fontWeight: '700',
    color: 'rgb(38,50,56)',
  },
  taglineText: {
    fontWeight: '700',
    color: 'rgba(127,127,127,0.5)',
    fontSize: PixelRatio.get() * 5,
  },
  container: {
    paddingVertical: PixelRatio.get() * 18,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: PixelRatio.get() * 3,
    borderBottomColor: 'rgba(127,127,127,0.9)',
    borderBottomWidth: 1,
  },
  textInput: {
    fontSize: PixelRatio.get() * 6,
    fontWeight: '800',
    flex: 1,
  },
  labelStyle: {
    position: 'absolute',
    left: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'rgba(127,127,127,0.5)',
  },
  forgotLink: {
    textTransform: 'uppercase',
    color: 'green',
    fontWeight: 'bold',
    marginLeft: PixelRatio.get() * 50,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  btn: {
    backgroundColor: 'rgb(110,191,115)',
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 30,
    paddingVertical: PixelRatio.get() * 4,
    paddingHorizontal: PixelRatio.get() * 10,
  },
  btnText: {
    color: 'white',
    fontSize: PixelRatio.get() * 8,
    fontWeight: 'bold',
  },
});

export default LoginComponent;
