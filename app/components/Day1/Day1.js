import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Day1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Here are some boxes of different colors</Text>

      <Text style={[styles.textBox, {backgroundColor: '#2aa198'}]}>
        Cyan #2aa198
      </Text>
      <Text style={[styles.textBox, {backgroundColor: '#268bd2'}]}>
        Blue #268bd2
      </Text>
      <Text style={[styles.textBox, {backgroundColor: '#d33682'}]}>
        Magenta #d33682
      </Text>
      <Text style={[styles.textBox, {backgroundColor: '#cb4b16'}]}>
        Orange #cb4b16
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textBox: {
    width: '100%',
    marginTop: 5,
    paddingVertical: 10,
    color: 'white',
    textAlign: 'center',
  },
});

export default Day1;
