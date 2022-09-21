import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const NewsCard = ({item}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        resizeMode="stretch"
        source={{uri: item.urlToImage, width: 400, height: 350}}>
        <Text style={styles.title}>{item.title}</Text>
      </ImageBackground>
      <View style={styles.content}>
        <Text numberOfLines={3} ellipsizeMode="tail" style={styles.description}>
          {item.description}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.author} numberOfLines={1} ellipsizeMode="tail">
            {item.author}
          </Text>
          <Text
            style={styles.publishedAt}
            numberOfLines={1}
            ellipsizeMode="tail">
            {item.publishedAt}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(NewsCard);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'white',
    padding: 5,
  },
  bgImage: {
    width: '100%',
  },
  title: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
  },
  content: {backgroundColor: 'white', padding: 5},
  description: {
    fontSize: 20,
    backgroundColor: 'white',
    color: 'black',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginVertical: 5,
  },
  author: {
    fontSize: 15,
    width: '40%',
  },
  publishedAt: {
    fontSize: 15,
    width: '40%',
  },
});
