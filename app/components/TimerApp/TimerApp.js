import React, {useState} from 'react';
import {Pressable, Text, View, StyleSheet, Modal, FlatList} from 'react-native';

import Header from '../Header';
import AddTimer from './AddTimer';
import TimerCard from './TimerCard';

const TimerApp = () => {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleRemove = item => {
    const newData = data.filter(d => {
      if (d.id !== item.id) return d;
    });
    setData(newData);
  };

  const handleSubmit = (title, subTitle, time) => {
    setData([...data, {id: Math.random().toString(), title, subTitle, time}]);
    setModalVisible(false);
  };

  const handleClose = () => {
    setModalVisible(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <Header title="Timers" />
      <View style={styles.body}>
        <Pressable
          style={({pressed}) => [
            {backgroundColor: pressed ? '#ddd' : '#fff'},
            styles.add,
          ]}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <Text style={styles.text}>+</Text>
        </Pressable>

        <FlatList
          keyboardShouldPersistTaps={'handled'}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TimerCard item={item} handleRemove={() => handleRemove(item)} />
          )}
        />
      </View>
      <Modal animationType="slide" visible={modalVisible} transparent>
        <View style={styles.centeredView}>
          <AddTimer handleSubmit={handleSubmit} handleClose={handleClose} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    flexShrink: 1,
    backgroundColor: '#e3e3e3',
    padding: 10,
  },
  add: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default TimerApp;
