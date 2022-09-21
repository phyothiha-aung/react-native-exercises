import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';

const URL = 'https://api.github.com/users/';

const Profile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(URL + 'mohdafzal21');
  const [text, setText] = useState('');

  const fetchUser = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [url]);

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator />}
      <View style={styles.cardView}>
        <TextInput
          style={styles.textInput}
          placeholder="Type Username + Enter"
          onChangeText={t => setText(t)}
          onSubmitEditing={() => {
            setUrl(URL + text);
          }}
        />
        <View style={styles.upperView}>
          <Image
            style={styles.avatar}
            source={{uri: user.avatar_url, width: 110, height: 110}}
          />
          <Text style={styles.name}>{user.name}</Text>
          <View style={styles.location}>
            <Entypo name="location" style={styles.locationText} />
            <Text style={styles.locationText}> {user.location}</Text>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.detail}>
            <Text style={styles.number}>{user.followers}</Text>
            <Text style={styles.text}>Followers</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.number}>{user.public_repos}</Text>
            <Text style={styles.text}>Repository</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.number}>{user.following}</Text>
            <Text style={styles.text}>Following</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#e3e3e3',
    elevation: 5,
  },
  cardView: {
    width: '100%',
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  upperView: {
    backgroundColor: '#fff',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    backgroundColor: '#e3e3e3',
    textAlign: 'center',
    fontSize: 20,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginTop: 10,
  },
  name: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 6,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 15,
  },
  info: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    backgroundColor: 'blue',
  },
  detail: {
    alignItems: 'center',
  },
  number: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    color: 'lightblue',
    fontSize: 18,
  },
});

export default Profile;
