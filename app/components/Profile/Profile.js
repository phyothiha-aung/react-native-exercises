import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardView}>
        <View style={styles.edit}>
          <MaterialCommunityIcons name="lead-pencil" />
          <Text>Edit Profile</Text>
        </View>
        <Image
          style={styles.avatar}
          source={require('../../assets/profile.png')}
        />
        <Text style={styles.name}>Selena Smith</Text>
        <View style={styles.location}>
          <Entypo name="location" style={styles.locationText} />
          <Text style={styles.locationText}>Hydrabad/India</Text>
        </View>
        <View style={styles.info}>
          <View style={[styles.detail, {marginRight: 10}]}>
            <Text>Classes Taken</Text>
            <Text style={styles.data}>1228</Text>
          </View>
          <View style={styles.detail}>
            <Text>Assessment</Text>
            <Text style={styles.data}>643</Text>
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
    height: 300,
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  edit: {
    top: 5,
    right: 5,
    padding: 5,
    flexDirection: 'row',
    backgroundColor: '#e3e3e3',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
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
    flexDirection: 'row',
    marginTop: 15,
  },
  detail: {
    alignItems: 'center',
  },
  data: {
    fontSize: 23,
    fontWeight: 'bold',
  },
});

export default Profile;
