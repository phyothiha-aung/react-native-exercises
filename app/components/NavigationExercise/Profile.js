import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';

const Profile = ({navigation, route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile</Text>
      {route.params?.profileId ? (
        <Text>profileId:{route.params?.profileId}</Text>
      ) : null}
      <Text>profileName:{route.params?.profileName}</Text>
      <Button title="goto About" onPress={() => navigation.navigate('About')} />
      <Button title="pop to top" onPress={() => navigation.popToTop()} />
      <TextInput
        style={{backgroundColor: 'black', width: 100, color: 'white'}}
        onChangeText={text => {
          navigation.setOptions({title: text});
        }}
      />
    </View>
  );
};

export default Profile;
