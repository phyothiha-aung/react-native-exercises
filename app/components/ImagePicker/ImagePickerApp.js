import {
  StyleSheet,
  View,
  PermissionsAndroid,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import RenderItem from './RenderItem';
import Icon from './Icon';

const getPermission = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CAMERA,
  );
  if (granted !== PermissionsAndroid.RESULTS.GRANTED)
    alert('You need to allow permission to use this app');
};

const ImagePickerApp = () => {
  const [imageUri, setImageUri] = useState([]);
  const [text, setText] = useState('');
  const flatListRef = useRef();

  useEffect(() => {
    getPermission();
  }, []);
  const openGallery = async () => {
    try {
      await launchImageLibrary(
        {
          mediaType: 'photo',
          quality: 0.1,
        },
        respond => {
          respond;
          if (respond.didCancel) return;
          else if (respond.errorCode)
            console.warn('error code', respond.errorCode);
          else if (respond.errorMessage)
            console.warn('error message', respond.errorMessage);
          else {
            setImageUri([
              ...imageUri,
              {uri: respond.assets[0].uri, id: Math.random().toString()},
            ]);
            flatListRef.current.scrollToEnd({animating: true});
          }
        },
      );
    } catch (err) {
      console.warn('error', err);
    }
  };

  const openCamera = async () => {
    try {
      await launchCamera(
        {
          saveToPhotos: true,
          mediaType: 'photo',
          quality: 0.5,
        },
        respond => {
          respond;
          if (respond.didCancel) return;
          else if (respond.errorCode)
            console.warn('error code', respond.errorCode);
          else if (respond.errorMessage)
            console.warn('error message', respond.errorMessage);
          else {
            setImageUri([
              ...imageUri,
              {uri: respond.assets[0].uri, id: Math.random().toString()},
            ]);
            flatListRef.current.scrollToEnd({animating: true});
          }
        },
      );
    } catch (err) {
      console.warn('error', err);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            ref={flatListRef}
            removeClippedSubviews
            inverted
            contentContainerStyle={{flexDirection: 'column-reverse'}}
            data={imageUri}
            keyExtractor={item => item.id}
            renderItem={({item}) => <RenderItem uri={item.uri} />}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="camera" handlePress={openCamera} />
          <Icon name="view-gallery" handlePress={openGallery} />
          <TextInput
            style={styles.textInput}
            placeholder="Type here"
            onChangeText={t => setText(t)}
            value={text}
            multiline
            numberOfLines={1}
          />
          <Icon
            name="send"
            handlePress={() => {
              if (text)
                setImageUri([
                  ...imageUri,
                  {uri: text, id: Math.random().toString()},
                ]);
              setText('');
              flatListRef.current.scrollToEnd({animating: true});
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImagePickerApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  listContainer: {
    height: 610,
  },
  inputContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    borderTopWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
  },

  textInput: {
    width: '63%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 20,
  },
});
