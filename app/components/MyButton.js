import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

const MyButton = ({title, buttonStyle, textStyle, onPress, ...rest}) => {
  return (
    <Pressable style={[styles.button, buttonStyle]} onPress={onPress} {...rest}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'dodgerblue',
  },
  text: {
    fontSize: 17,
    color: 'white',
  },
});

export default MyButton;
