import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import React from 'react';

type Props = {
  title: string;
  onPress: (title: string) => void;
};
const BookCard = ({title, onPress}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => onPress(title)}>
        <Text>{title}</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    padding: 16,
    marginTop: 8,
  },
});

export default BookCard;
