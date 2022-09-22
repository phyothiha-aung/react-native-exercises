import {
  ActivityIndicator,
  ImageBackground,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Dimensions,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Weather = () => {
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState('landon');
  const [temp, setTemp] = useState();
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [text, setText] = useState('');

  const fetchWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5050a95c691a8acac1d01b958a9b351b`,
      )
      .then(respond => {
        setTemp(respond.data.main.temp);
        setStatus(respond.data.weather[0].main);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
        console.error(err);
      });
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  let img = require('../../assets/clear.jpg');
  if (!loading && status) {
    if (status === 'Clear') img = require('../../assets/clear.jpg');
    else if (status === 'Haze' || status === 'Mist')
      img = require('../../assets/haze.jpg');
    else if (status === 'Clouds') img = require('../../assets/clouds.jpg');
    else if (status === 'Rain') img = require('../../assets/rain.jpg');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        style={styles.backgroundImage}
        source={img}
        resizeMode="cover">
        {loading && <ActivityIndicator style={styles.activity} size="large" />}
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.status}>{status}</Text>
        <Text style={styles.temperature}>
          {Math.floor(temp - 273.15)}&deg;C
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Search any city"
          placeholderTextColor="#fff"
          onChangeText={t => setText(t)}
          onSubmitEditing={() => {
            setCity(text);
            setLoading(true);
          }}
        />
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default Weather;

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
  },
  city: {
    fontSize: 50,
    marginTop: 40,
  },
  status: {
    marginTop: 5,
    fontSize: 30,
  },
  temperature: {
    marginTop: 5,
    fontSize: 40,
  },
  input: {
    marginTop: 20,
    backgroundColor: '#a3a3a3',
    width: '80%',
    borderRadius: 10,
    fontSize: 20,
    color: '#fff',
  },
  activity: {
    position: 'absolute',
    top: 30,
  },
});
