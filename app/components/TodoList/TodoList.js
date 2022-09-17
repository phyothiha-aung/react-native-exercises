import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Modal,
} from 'react-native';

import AddItemIcon from './AddItemIcon';
import AddItemForm from './AddItemForm';
import ListItem from './ListItem';

const myDATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const TodoList = () => {
  const [todos, setTodos] = useState(myDATA);
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = item => {
    const newTodos = todos.filter(td => td.id !== item.id);
    setTodos(newTodos);
  };

  const handleSubmit = title => {
    setTodos(prev => {
      return [...prev, {id: Math.random().toString(), title}];
    });
    setModalVisible(false);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        animated
        barStyle="light-content"
        backgroundColor="dodgerblue"
      />
      <Text style={styles.header}>Reactive Todos</Text>

      <FlatList
        style={styles.list}
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ListItem item={item} handleDelete={handleDelete} />
        )}
        ListEmptyComponent={<Text>Nothing to do</Text>}
      />
      <TouchableOpacity
        style={styles.addIcon}
        onPress={() => setModalVisible(true)}>
        <AddItemIcon style={styles.addIcon} />
      </TouchableOpacity>
      <Modal animationType="slide" transparent visible={modalVisible}>
        <View style={styles.centeredView}>
          <AddItemForm
            style={styles.modalView}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 22,
    padding: 15,
    backgroundColor: 'dodgerblue',
    color: '#fff',
    fontWeight: 'bold',
  },
  addIcon: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  modal: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default TodoList;
