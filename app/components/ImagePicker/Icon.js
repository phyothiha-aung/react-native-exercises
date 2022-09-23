import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = ({name = 'camera', size, handlePress, style, ...otherProps}) => {
  return (
    <View style={[styles.iconContainer, style]}>
      <MaterialCommunityIcons
        style={styles.inputIcon}
        name={name}
        size={20}
        onPress={handlePress}
      />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
  iconContainer: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {},
});
