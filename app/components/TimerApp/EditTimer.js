import React, {useState} from 'react';
import {View, StyleSheet, TextInput, ToastAndroid, Text} from 'react-native';
import MyButton from '../MyButton';

const EditTimer = ({handleSubmitEdit, handleClose}) => {
  const [title, setTitle] = useState();
  const [subTitle, setSubTitle] = useState();
  const [hour, setHour] = useState();
  const [mins, setMins] = useState();
  const [secs, setSecs] = useState();

  const getTime = (hr = 0, mins = 0, secs = 0) => {
    const timeInSecs = hr * 3600 + mins * 60 + secs;
    return timeInSecs;
  };
  return (
    <View style={styles.container}>
      <MyButton
        buttonStyle={styles.closeBtn}
        textStyle={styles.closeText}
        onPress={handleClose}
        title="X"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Title"
        placeholderTextColor="#a3a3a3"
        autoFocus
        onChangeText={title => setTitle(title)}
        value={title}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Subtitle"
        placeholderTextColor="#a3a3a3"
        onChangeText={subTitle => setSubTitle(subTitle)}
        value={subTitle}
      />
      <View style={styles.time}>
        <TextInput
          style={styles.hour}
          keyboardType="numeric"
          placeholder="hr"
          placeholderTextColor="#b3b3b3"
          onChangeText={hour => setHour(hour)}
          value={hour}
        />
        <Text>:</Text>
        <TextInput
          style={styles.mins}
          keyboardType="numeric"
          placeholder="mins"
          placeholderTextColor="#b3b3b3"
          onChangeText={mins => setMins(mins)}
          value={mins}
        />
        <Text>:</Text>
        <TextInput
          style={styles.secs}
          keyboardType="numeric"
          placeholder="secs"
          placeholderTextColor="#b3b3b3"
          onChangeText={secs => setSecs(secs)}
          value={secs}
        />
      </View>
      <MyButton
        style={styles.button}
        title="Add Timer List"
        onPress={() => {
          const timeInSecs = getTime(hour, mins, secs);

          if (title && subTitle) console.log('here');
          else ToastAndroid.show('Enter Details', ToastAndroid.SHORT);
          setTitle('');
          setSubTitle('');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    elevation: 5,
  },

  textInput: {
    width: '100%',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 20,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    backgroundColor: 'dodgerblue',
  },
  closeBtn: {
    width: 60,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: 'red',
  },
  closeText: {
    fontSize: 25,
    color: 'white',
  },
  time: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  hour: {
    fontSize: 20,
    width: '20%',
  },
  mins: {
    fontSize: 20,
    width: '20%',
  },
  secs: {
    fontSize: 20,
    width: '20%',
  },
});

export default EditTimer;
