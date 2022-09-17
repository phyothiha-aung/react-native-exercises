import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ListItem = ({item, handleDelete}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{item.title}</Text>
      <MaterialCommunityIcons
        name="trash-can-outline"
        style={styles.icon}
        onPress={() => handleDelete(item)}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderColor: '#e3e3e3',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    color: 'dodgerblue',
    backgroundColor: '#fff',
    padding: 10,
  },
  icon: {
    fontSize: 35,
    color: 'red',
  },
});

export default ListItem;
