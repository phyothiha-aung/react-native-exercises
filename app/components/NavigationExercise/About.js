import React from 'react';
import {View, Text, Button} from 'react-native';

const About = ({navigation}) => {
  return (
    <View>
      <Text>About</Text>
      <Button title="goto Home" onPress={() => navigation.navigate('Home')} />
      <Button title="go back" onPress={() => navigation.goBack()} />
      <Button
        title="go profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default About;
