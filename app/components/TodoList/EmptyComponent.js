import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const EmptyComponent = () => {
  return (
    <View>
      <Text style={styles.text}>No work to do</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: 'gray',
    textAlign: 'center',
  },
});

export default EmptyComponent;
