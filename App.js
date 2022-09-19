import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

import BoxColor from './app/components/BoxColor/BoxColor';
import Counter from './app/components/Counter/Counter';
import Day1 from './app/components/Day1/Day1';
import Day1FlatList from './app/components/Day1/Day1FlatList';
import LikeButton from './app/components/LikeButton/LikeButton';
import Profile from './app/components/Profile/Profile';
import Game from './app/components/Game/Game';
import MyNavigation from './app/components/NavigationExercise';

import configureStore from './app/components/redux/store';
import TodoList from './app/components/TodoList/TodoList';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        {/* //{' '}
      
        //{' '}
       
  //     <Counter />
  //     <Day1 />
  //     <Day1FlatList />
  //     <LikeButton />
  //     <BoxColor r={128} g={255} b={0} />
  //     <Profile />
  //     <MyNavigation />
  //     <Game />
        */}
        <TodoList />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
