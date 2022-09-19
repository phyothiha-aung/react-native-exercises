import React from 'react';
import {Button, Text, View} from 'react-native';

const Home = ({navigation, route}) => {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);
  return (
    <>
      <View>
        <Text>Hello From Home</Text>
        <Button
          title="Goto Profile"
          onPress={() =>
            navigation.navigate('Profile', {profileId: 1, profileName: 'Nana'})
          }
        />
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title="Create post"
          onPress={() => navigation.navigate('CreatePost')}
        />
        <Text style={{margin: 10}}>Post: {route.params?.post}</Text>
      </View>
    </>
  );
};

export default Home;
