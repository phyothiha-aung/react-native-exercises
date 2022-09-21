import {Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Home';
import Articles from './Articles';

const Stack = createNativeStackNavigator();

const NewsReader = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Article" component={Articles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NewsReader;
