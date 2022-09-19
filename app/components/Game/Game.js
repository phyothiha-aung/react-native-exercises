import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import shuffle from 'lodash.shuffle';

import Board from './Board';

const Game = () => {
  const [gameId, setGameId] = useState(1);
  const [randomNumbersCount, setRandomNumbersCount] = useState(5);
  const [score, setScore] = useState(0);

  const resetGame = status => {
    console.log('status', status);
    setGameId(prev => prev + 1);

    if (status !== 'LOST') {
      setRandomNumbersCount(prev => prev + 1);
      setScore(prev => prev + 1);
    }
    if (status === 'LOST') {
      setRandomNumbersCount(5);
      setScore(0);
    }
  };

  const randomNumbers = Array.from({length: randomNumbersCount}).map(
    () => 1 + Math.floor(10 * Math.random()),
  );

  const target = randomNumbers
    .slice(0, randomNumbersCount - 2)
    .reduce((acc, curr) => acc + curr, 0);

  const shuffleRandomNumbers = shuffle(randomNumbers);

  return (
    <View style={styles.container}>
      <Board
        key={gameId}
        resetGame={resetGame}
        score={score}
        target={target}
        shuffleRandomNumbers={shuffleRandomNumbers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
  },
  score: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 80,
  },
});

export default Game;
