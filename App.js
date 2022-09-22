import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Provider} from 'react-redux';
import ImagePicker from './app/components/ImagePicker/ImagePicker';

import configureStore from './app/components/redux/store';

// import BoxColor from './app/components/BoxColor/BoxColor';
// import Counter from './app/components/Counter/Counter';
// import Day1 from './app/components/Day1/Day1';
// import Day1FlatList from './app/components/Day1/Day1FlatList';
// import LikeButton from './app/components/LikeButton/LikeButton';
// import Profile from './app/components/Profile/Profile';
//import Game from './app/components/Game/Game';
//import NewsReader from './app/components/NewsReader/NewsReader';
//import Profile from './app/components/GithubProfile/Profile';
// import TodoList from './app/components/TodoList/TodoList';
// import TimerCard from './app/components/TimerApp/TimerCard';
//import TimerApp from './app/components/TimerApp/TimerApp';
//import MyNavigation from './app/components/NavigationExercise';
//import Weather from './app/components/Profile/Weather';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        {/* 
       
       <Counter />
       <Day1 />
       <Day1FlatList />
       <LikeButton />
       <BoxColor r={128} g={255} b={0} />
       <Profile />
       <TimerApp />
       <Game />
      <MyNavigation />
        <TodoList />
        <NewsReader />
        <TimerCard title="Go to Gym" subTitle="Fitness" />
        <Weather />
        */}
        <ImagePicker />
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
