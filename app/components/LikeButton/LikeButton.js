import React, {useState} from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

import MyButton from '../MyButton';

const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

const LikeButton = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <MyButton
        title={count < 2 ? count + ' Like' : count + ' Likes'}
        buttonStyle={{backgroundColor: colors[count % colors.length]}}
        onPress={() => setCount(prevCount => prevCount + 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LikeButton;
