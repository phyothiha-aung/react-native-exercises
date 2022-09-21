import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Home from './Home';
import Profile from './Profile';
import About from './About';
import CreatePostScreen from './CreatePost';

const Stack = createNativeStackNavigator();

const MyNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={(navigation, route) => ({
          headerTintColor: 'red',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerBackImageSource: () => (
            <AntDesign name="email" color="white" size={30} />
          ),
        })}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Overview'}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={({route}) => ({
            title: route.params.name,
          })}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            title: 'its about',
          }}
        />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyNavigation;
