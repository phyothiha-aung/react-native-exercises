import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import RandomNumber from './RandomNumber';

const Board = props => {
  const [sum, setSum] = useState(0);
  const [time, setTime] = useState(10);

  const handlePress = num => {
    setSum(prev => prev + num);
  };

  const getStatus = () => {
    if (time === 0) return 'LOST';
    if (sum < props.target) return 'PLAYING';
    else if (sum === props.target) return 'WON';
    else return 'LOST';
  };

  const status = getStatus();

  useEffect(() => {
    let interval;
    if (status === 'PLAYING' && time > 0) {
      interval = setInterval(() => setTime(prev => prev - 1), 1000);
    } else clearInterval(interval);

    return () => clearInterval(interval);
  }, [status]);

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

      <Text style={styles.time}>{time}</Text>

      <View>
        <Text style={styles.score}>Score: {props.score}</Text>
        <Text style={[styles[`STATUS_${status}`], styles.status]}>
          {status}
        </Text>
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
    borderRadius: 10,
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
  time: {
    textAlign: 'center',
    fontSize: 50,
  },
  status: {
    fontSize: 20,
    color: 'white',
    width: 100,
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default Board;
