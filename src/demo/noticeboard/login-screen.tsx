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
import { TextField } from 'react-native-material-textfield';

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
        <View>
          <View style={styles.LoginTitle}>
            <Text style={[styles.LoginText, { color: LoginTextColor }]}>
              Login
            </Text>
            <Text
              style={[styles.taglineText, { color: SecondaryColorOpacity }]}>
              Makes you better
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextField
              style={styles.textInput}
              label="USERNAME"
              labelFontSize={15}
              activeLineWidth={0}
              tintColor={SecondaryColor}
              animationDuration={100}
            />
            <TextField
              style={styles.textInput}
              label="PASSWORD"
              secureTextEntry={true}
              labelFontSize={15}
              activeLineWidth={0}
              tintColor={SecondaryColor}
              animationDuration={100}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.btn, { backgroundColor: PrimaryColor }]}>
              <Text style={[styles.btnText, { color: whiteColor }]}>Login</Text>
              <Icon name="chevron-right" color={whiteColor} size={30} />
            </TouchableOpacity>
          </View>
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
    justifyContent: 'space-around',
    paddingHorizontal: PixelRatio.get() * 12,
  },
  // Title of the Page
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
  LoginTitle: {
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
  // Login Button CSS
  buttonContainer: {
    alignItems: 'flex-end',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 30,
    paddingVertical: PixelRatio.get() * 4,
    paddingHorizontal: PixelRatio.get() * 4,
  },
  btnText: {
    fontSize: PixelRatio.get() * 8,
    fontWeight: 'bold',
    marginLeft: PixelRatio.get() * 2,
    marginRight: PixelRatio.get() * 15,
  },
  // Footer CSS
  footerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerLink: {
    color: ThemeColor,
    fontWeight: 'bold',
  },
  footerText: {
    fontWeight: 'bold',
    color: SecondaryColorOpacity,
  },

  // TextInput Css
  inputContainer: {
    marginVertical: PixelRatio.get() * 5,
  },
  textInput: {
    marginVertical: 0,
  },
});
export default loginscreen;
