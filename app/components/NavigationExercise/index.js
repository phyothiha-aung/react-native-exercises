import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './Home';
import Profile from './Profile';
import About from './About';
import CreatePostScreen from './CreatePost';

const Drawer = createDrawerNavigator();

const MyNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{title: 'Overview'}}
        />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="CreatePost" component={CreatePostScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MyNavigation;
