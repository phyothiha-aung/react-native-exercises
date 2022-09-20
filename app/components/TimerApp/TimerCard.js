import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MyButton from '../MyButton';

const GetTime = ({time}) => {
  const hr = Math.floor(time / 3600);
  const mins = Math.floor((time % 3600) / 60);
  const secs = (time % 3600) % 60;
  return (
    <Text style={styles.time}>
      {hr}:{`0${mins}`.slice(-2)}:{`0${secs}`.slice(-2)}
    </Text>
  );
};

const TimerCard = ({
  title,
  time,
  subTitle,
  handleRemove,
  handleEdit,
  style,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [reaminingTime, setRemainingTime] = useState(time);

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
          onPress={handleEdit}
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
  time: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
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
});

export default TimerCard;
