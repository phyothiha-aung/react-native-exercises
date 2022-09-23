import {StyleSheet, Text, Image} from 'react-native';
import React from 'react';

const RenderItem = ({item}) => {
  return item.uri ? (
    <Image
      style={styles.image}
      source={{uri: item.uri}}
      resizeMethod="resize"
      resizeMode="cover"
    />
  ) : (
    <Text style={styles.text}>{item.text}</Text>
  );
};

export default React.memo(RenderItem);

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    alignSelf: 'flex-end',
    margin: 5,
    borderRadius: 20,
  },
  text: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    maxWidth: '70%',
    alignSelf: 'flex-end',
  },
});
