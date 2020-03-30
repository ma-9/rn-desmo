/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/home.screen';
import AboutScreen from './screens/about.screen';
import DemoScreenList from './screens/demo-list.screen';
import DemoInfoScreen from './screens/demo-info/demo-info.screen';
import DemoScreen from './screens/demo.screen';
import { StatusBar } from 'react-native';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Stack.Navigator headerMode="screen" initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'React Native Design Demo',
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: 'About', headerBackTitle: 'Back' }}
        />
        <Stack.Screen name="DemoScreenList" component={DemoScreenList} />
        <Stack.Screen
          name="DemoInfo"
          component={DemoInfoScreen}
          options={{ headerBackTitle: 'Back' }}
        />
        <Stack.Screen
          name="DemoScreen"
          component={DemoScreen}
          options={{ headerBackTitle: 'Back' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
