import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

import TodoListAll from './TodoListAll';
import TodoListCompleted from './TodoListCompleted';
import TodoListActive from './TodoListActive';

const Tab = createBottomTabNavigator();

const TodoList = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            let iconName;

            if (route.name === 'All') {
              iconName = 'bars';
            } else if (route.name === 'Active') {
              iconName = 'profile';
            } else if (route.name === 'Completed') {
              iconName = 'checkcircleo';
            }
            return <AntDesign name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'dodgerblue',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="All" component={TodoListAll} />
        <Tab.Screen name="Active" component={TodoListActive} />
        <Tab.Screen name="Completed" component={TodoListCompleted} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TodoList;
