import React from 'react';
import {Text, StyleSheet} from 'react-native';

const GetTime = ({time}) => {
  const hr = Math.floor(time / 3600);
  const mins = Math.floor((time % 3600) / 60);
  const secs = (time % 3600) % 60;
  return (
    <Text style={styles.time}>
      {hr}:{`0${mins}`.slice(-2)}:{`0${secs}`.slice(-2)}
    </Text>
  );
};

const styles = StyleSheet.create({
  time: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default GetTime;
