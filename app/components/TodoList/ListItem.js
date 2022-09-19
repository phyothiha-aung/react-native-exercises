import React from 'react';
import {View} from 'react-native';
import {Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ListItem = ({item, handleDelete, handleCompleted}) => {
  return (
    <View style={styles.container}>
      <View style={styles.detail}>
        <CheckBox
          style={styles.checkBox}
          value={item.completed}
          onValueChange={handleCompleted}
          tintColors={{true: 'dodgerblue', false: 'red'}}
        />
        <Text
          style={[
            styles.text,
            {textDecorationLine: item.completed ? 'line-through' : 'none'},
          ]}>
          {item.title}
        </Text>
      </View>
      <MaterialCommunityIcons
        name="trash-can-outline"
        style={styles.icon}
        onPress={handleDelete}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 2,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    color: 'dodgerblue',
    backgroundColor: '#fff',
    padding: 10,
  },
  icon: {
    fontSize: 30,
    color: 'red',
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {},
});

export default ListItem;
