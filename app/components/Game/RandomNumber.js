import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
const RandomNumber = props => {
  const [disabled, setDisabled] = useState(false);

  const status =
    props.status === 'WON' || props.status === 'LOST' ? true : false;

  return (
    <TouchableOpacity
      disabled={disabled || status}
      onPress={() => {
        setDisabled(true);
        props.onPress();
      }}>
      <Text
        style={[
          styles.random,
          disabled && styles.selected,
          status && styles.selected,
        ]}>
        {props.number}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  random: {
    width: 100,
    fontSize: 30,
    backgroundColor: '#999',
    marginHorizontal: 15,
    marginVertical: 25,
    textAlign: 'center',
  },
  selected: {
    opacity: 0.3,
  },
});

export default RandomNumber;
