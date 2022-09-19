import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';

import Header from './Header';
import ListItem from './ListItem';
import {addItem, deleteItem, markCompleted} from '../redux/actionCreater';

const TodoListCompleted = ({todos, completed, deleteItem}) => {
  const handleDelete = item => {
    Alert.alert('Delete', 'Are you sure you want to delete', [
      {text: 'cancle'},
      {text: 'delete', onPress: () => deleteItem(item)},
    ]);
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        style={styles.list}
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({item}) =>
          item.completed ? (
            <ListItem
              item={item}
              handleDelete={() => handleDelete(item.id)}
              handleCompleted={() => completed(item.id)}
            />
          ) : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => {
  return {
    todos: state,
  };
};
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  deleteItem: item => dispatch(deleteItem(item)),
  completed: item => dispatch(markCompleted(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListCompleted);
