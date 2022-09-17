import React, {useState} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import MyButton from '../MyButton';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Clicked : {count} {count > 1 ? 'times' : 'time'}
      </Text>
      <MyButton
        buttonStyle={{width: 40, marginLeft: 5}}
        title="+"
        onPress={() => setCount(prevCount => prevCount + 1)}
      />
      <MyButton
        buttonStyle={{width: 40, marginLeft: 5}}
        title="-"
        onPress={() =>
          setCount(prevCount => (prevCount > 0 ? prevCount - 1 : prevCount))
        }
      />
      <MyButton
        buttonStyle={{width: 150, marginLeft: 5}}
        title="increment if odd"
        onPress={() =>
          setCount(prevCount => (prevCount % 2 ? prevCount + 1 : prevCount))
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default Counter;
