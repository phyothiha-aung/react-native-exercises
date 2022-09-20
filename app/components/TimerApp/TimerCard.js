import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Modal, Button} from 'react-native';

import GetTime from './GetTime';
import MyButton from '../MyButton';
import EditTimer from './EditTimer';

const TimerCard = ({item, handleRemove, style}) => {
  const [isActive, setIsActive] = useState(false);
  const [reaminingTime, setRemainingTime] = useState(item.time);
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [subTitle, setSubTitle] = useState(item.subTitle);

  const update = (title, subTitle, time) => {
    setTitle(title);
    setSubTitle(subTitle);
    setRemainingTime(time);
    setModalVisible(false);
  };

  useEffect(() => {
    let interval = null;
    if (isActive && reaminingTime) {
      interval = setInterval(() => setRemainingTime(prev => prev - 1), 1000);
    } else if (!isActive && reaminingTime !== 0) clearInterval(interval);

    return () => clearInterval(interval);
  }, [isActive, reaminingTime]);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <GetTime time={reaminingTime} />
      <View style={styles.buttonBox}>
        <MyButton
          buttonStyle={styles.editBtn}
          textStyle={styles.editText}
          title="Edit"
          onPress={() => setModalVisible(true)}
        />
        <MyButton
          buttonStyle={styles.removeBtn}
          textStyle={styles.removeText}
          title="Remove"
          onPress={handleRemove}
        />
      </View>
      <MyButton
        disabled={reaminingTime === 0}
        buttonStyle={[
          styles.actionBtn,
          {borderColor: isActive ? 'orange' : 'green'},
        ]}
        textStyle={[styles.actionText, {color: isActive ? 'orange' : 'green'}]}
        title={isActive ? 'Stop' : 'Start'}
        onPress={() => setIsActive(prev => !prev)}
      />
      <Modal animationType="slide" visible={modalVisible} transparent>
        <View style={styles.centeredView}>
          <EditTimer
            handleClose={() => setModalVisible(false)}
            update={update}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 15,
    marginBottom: 15,
  },

  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  editBtn: {
    width: 100,
    height: 35,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: 'blue',
    backgroundColor: '#fff',
  },
  editText: {
    color: 'blue',
  },
  removeBtn: {
    width: 100,
    height: 35,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: '#fff',
  },
  removeText: {
    color: 'red',
  },
  actionBtn: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: 'green',
  },
  actionText: {
    color: 'green',
  },
  centeredView: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default TimerCard;
