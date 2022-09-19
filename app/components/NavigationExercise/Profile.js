import React from 'react';
import {Button, Text, View} from 'react-native';

const Profile = ({navigation, route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile</Text>
      {route.params?.profileId && (
        <Text>profileId:{route.params?.profileId}</Text>
      )}
      <Text>profileName:{route.params?.profileName}</Text>
      <Button title="goto About" onPress={() => navigation.navigate('About')} />
      <Button title="pop to top" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Profile;
