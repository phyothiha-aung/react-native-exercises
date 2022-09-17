import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import MyButton from '../MyButton';

const AddItemForm = ({handleSubmit, handleClose}) => {
  const [text, setText] = useState();
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
        placeholder="Enter Your Task"
        placeholderTextColor="#a3a3a3"
        autoFocus
        onChangeText={text => setText(text)}
      />
      <MyButton
        title="Add To List"
        onPress={() => {
          if (text) handleSubmit(text);
          setText('');
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
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: 'dodgerblue',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
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
});

export default AddItemForm;
