import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const convertSingleCode = colorCode => {
  let hexCode = colorCode.toString(16);

  return hexCode.length == 1 ? '0' + hexCode : hexCode;
};

const rgbToHex = (red, green, blue) => {
  return (
    '#' +
    convertSingleCode(red) +
    convertSingleCode(green) +
    convertSingleCode(blue)
  );
};

const BoxColor = ({r, g, b}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, {backgroundColor: `rgb(${r},${g},${b})`}]}>
        <Text style={styles.text}>
          rgb({r},{g},{b})
        </Text>
        <Text style={styles.text}>{rgbToHex(r, g, b)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: 120,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default BoxColor;
