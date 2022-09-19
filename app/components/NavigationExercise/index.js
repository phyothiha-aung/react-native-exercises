import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Home';
import Profile from './Profile';
import About from './About';
import CreatePostScreen from './CreatePost';

const Stack = createNativeStackNavigator();

const MyNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyNavigation;
