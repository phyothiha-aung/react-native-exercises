import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

const COLORS = [
  {colorName: 'Base03', hexCode: '#002b36'},
  {colorName: 'Base02', hexCode: '#073642'},
  {colorName: 'Base01', hexCode: '#586e75'},
  {colorName: 'Base00', hexCode: '#657b83'},
  {colorName: 'Base0', hexCode: '#839496'},
  {colorName: 'Base1', hexCode: '#93a1a1'},
  {colorName: 'Base2', hexCode: '#eee8d5'},
  {colorName: 'Base3', hexCode: '#fdf6e3'},
  {colorName: 'Yellow', hexCode: '#b58900'},
  {colorName: 'Orange', hexCode: '#cb4b16'},
  {colorName: 'Red', hexCode: '#dc322f'},
  {colorName: 'Magenta', hexCode: '#d33682'},
  {colorName: 'Violet', hexCode: '#6c71c4'},
  {colorName: 'Blue', hexCode: '#268bd2'},
  {colorName: 'Cyan', hexCode: '#2aa198'},
  {colorName: 'Green', hexCode: '#859900'},
];

const itemList = ({item}) => (
  <Text
    style={[
      styles.textBox,
      {
        backgroundColor: item.hexCode,
        color:
          item.colorName == 'Base2' || item.colorName == 'Base3'
            ? 'black'
            : 'white',
      },
    ]}>
    {item.colorName} {item.hexCode}
  </Text>
);

const Day1FlatList = () => {
  const [refreshing, setRefreshing] = useState(false);
  return (
    <View style={styles.container}>
      <FlatList
        data={COLORS}
        keyExtractor={color => color.colorName}
        ListHeaderComponent={<Text style={styles.header}>Solarized</Text>}
        renderItem={itemList}
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          setTimeout(() => setRefreshing(false), 5000);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textBox: {
    width: '100%',
    marginTop: 5,
    paddingVertical: 15,
    textAlign: 'center',
  },
});

export default Day1FlatList;
