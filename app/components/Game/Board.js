import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import RandomNumber from './RandomNumber';

const Board = props => {
  const [sum, setSum] = useState(0);

  const handlePress = num => {
    setSum(prev => prev + num);
  };

  const getStatus = () => {
    if (sum < props.target) return 'PLAYING';
    else if (sum === props.target) return 'WON';
    else return 'LOST';
  };

  const status = getStatus();

  return (
    <View style={styles.container}>
      <Text style={[styles.target, styles[`STATUS_${status}`]]}>
        {props.target}
      </Text>
      <View style={styles.randomContainer}>
        {props.shuffleRandomNumbers.map((randomNumber, index) => (
          <RandomNumber
            key={index}
            status={status}
            number={randomNumber}
            onPress={() => handlePress(randomNumber)}
          />
        ))}
      </View>
      <View>
        <Text style={styles.score}>Score: {props.score}</Text>
        <Text>{status}</Text>
      </View>
      {status !== 'PLAYING' && (
        <Button title="Play Again" onPress={() => props.resetGame(status)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
    paddingTop: 30,
  },
  target: {
    fontSize: 45,
    backgroundColor: '#aaa',
    marginHorizontal: 50,
    textAlign: 'center',
  },
  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  STATUS_PLAYING: {
    backgroundColor: '#bbb',
  },
  STATUS_WON: {
    backgroundColor: 'green',
  },
  STATUS_LOST: {
    backgroundColor: 'red',
  },
  score: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 80,
  },
});

export default Board;
