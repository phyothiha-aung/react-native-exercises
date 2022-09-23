import {StyleSheet, Text, Image} from 'react-native';
import React from 'react';

const RenderItem = ({uri}) => {
  return uri.includes('file:///data/user/0/com.tasks/cache/') ? (
    <Image
      style={styles.image}
      source={{uri: uri}}
      resizeMethod="resize"
      resizeMode="cover"
    />
  ) : (
    <Text style={styles.text}>{uri}</Text>
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
