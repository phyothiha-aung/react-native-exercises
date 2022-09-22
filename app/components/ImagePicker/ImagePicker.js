import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

const ImagePicker = () => {
  return (
    <View>
      <Pressable style={styles.pickImage}>
        <Text>ImagePicker</Text>
      </Pressable>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  pickImage: {
    width: 100,
    height: 100,
    backgroundColor: '#e3e3e3',
  },
});
