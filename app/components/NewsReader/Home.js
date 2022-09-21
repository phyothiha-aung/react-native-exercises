import {
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Loading from './Loading';
import NewsCard from './NewsCard';

const URL =
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=27820167d6b1430a990adbe821873a09';

const Home = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(URL).then(res => {
      const data = res.data;
      setNews(data.articles);
      setLoading(false);
    });
  }, []);
  if (loading) return <Loading />;
  else
    return (
      <View style={styles.container}>
        <FlatList
          data={news}
          keyExtractor={item => item.title}
          renderItem={({item}) => (
            <TouchableWithoutFeedback onPress={() => console.log('press')}>
              <NewsCard item={item} />
            </TouchableWithoutFeedback>
          )}
          refreshing={refreshing}
        />
      </View>
    );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#000',
  },
});
