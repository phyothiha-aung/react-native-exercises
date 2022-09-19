import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reactive Todos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    height: 60,
  },
  header: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 20,
  },
});

export default Header;
