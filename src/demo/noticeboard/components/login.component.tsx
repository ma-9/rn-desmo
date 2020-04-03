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

interface ILoginComponentProps {
  ThemeColor: string;
  PrimaryColor: string;
  SecondaryColorOpacity: string;
  whiteColor: string;
  LoginTextColor: string;
}

const LoginComponent: React.FC<ILoginComponentProps> = props => {
  const {
    LoginTextColor,
    whiteColor,
    ThemeColor,
    SecondaryColorOpacity,
    PrimaryColor,
  } = props;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameHasValue = username !== '';
  const passwordHasValue = password !== '';

  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  return (
    <View style={styles.root}>
      <View style={styles.title}>
        <Text style={[styles.LoginText, { color: LoginTextColor }]}>Login</Text>
        <Text style={[styles.taglineText, { color: SecondaryColorOpacity }]}>
          Makes you better
        </Text>
      </View>

      <View style={styles.container}>
        <KeyboardAvoidingView
          style={[
            styles.inputContainer,
            { borderBottomColor: SecondaryColorOpacity },
          ]}>
          <Icon name="user" color={SecondaryColorOpacity} size={30} />
          <Text
            style={[
              styles.labelStyle,
              {
                top: !usernameHasValue ? 12 : -5,
                fontSize: !usernameHasValue ? 18 : 14,
                color: SecondaryColorOpacity,
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
        <KeyboardAvoidingView
          style={[
            styles.inputContainer,
            { borderBottomColor: SecondaryColorOpacity },
          ]}>
          <Icon name="lock" color={SecondaryColorOpacity} size={30} />
          <Text
            style={[
              styles.labelStyle,
              {
                top: !passwordHasValue ? 12 : -5,
                fontSize: !passwordHasValue ? 18 : 14,
                color: SecondaryColorOpacity,
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
            <Text style={[styles.forgotLink, { color: ThemeColor }]}>
              Forgot
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: PrimaryColor }]}>
          <Text style={[styles.btnText, { color: whiteColor }]}>Login</Text>
          <Icon name="chevron-right" color={whiteColor} size={30} />
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
  },
  taglineText: {
    fontWeight: '700',
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
  },
  forgotLink: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginLeft: PixelRatio.get() * 50,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  btn: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 30,
    paddingVertical: PixelRatio.get() * 4,
    paddingHorizontal: PixelRatio.get() * 10,
  },
  btnText: {
    fontSize: PixelRatio.get() * 8,
    fontWeight: 'bold',
  },
});

export default LoginComponent;
