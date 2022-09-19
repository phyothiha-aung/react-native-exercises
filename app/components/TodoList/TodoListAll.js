import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';

import AddItemIcon from './AddItemIcon';
import AddItemForm from './AddItemForm';
import ListItem from './ListItem';
import Header from './Header';
import {addItem, deleteItem, markCompleted} from '../redux/actionCreater';

const TodoListAll = ({todos, addItem, completed, deleteItem}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = item => {
    Alert.alert('Delete', 'Are you sure you want to delete', [
      {text: 'cancle'},
      {text: 'delete', onPress: () => deleteItem(item)},
    ]);
  };

  const handleSubmit = title => {
    addItem({id: Math.random().toString(), title, completed: false});
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        animated
        barStyle="light-content"
        backgroundColor="dodgerblue"
      />
      <Header />
      <FlatList
        style={styles.list}
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ListItem
            item={item}
            handleDelete={() => handleDelete(item.id)}
            handleCompleted={() => completed(item.id)}
          />
        )}
      />
      <TouchableOpacity
        style={styles.addIcon}
        onPress={() => setModalVisible(true)}>
        <AddItemIcon style={styles.addIcon} />
      </TouchableOpacity>

      <Modal animationType="slide" visible={modalVisible} transparent>
        <View style={styles.centeredView}>
          <AddItemForm
            style={styles.modalView}
            handleClose={() => setModalVisible(false)}
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

  addIcon: {
    position: 'absolute',
    right: 13,
    bottom: 40,
  },
  centeredView: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoListAll);
