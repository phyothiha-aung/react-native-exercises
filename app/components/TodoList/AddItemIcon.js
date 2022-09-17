import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const AddItemIcon = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>+</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default AddItemIcon;
