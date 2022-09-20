import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const Header = ({title, viewStyle, textStyle}) => {
  return (
    <View style={[styles.container, viewStyle]}>
      <Text style={[styles.header, textStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    height: 50,
  },
  header: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 20,
  },
});

export default Header;
