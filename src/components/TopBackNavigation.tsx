import {View, StyleSheet, TouchableHighlight} from 'react-native';
import React from 'react';
import BackIcon from '../icons/BackIcon';
import {useNavigation} from '@react-navigation/native';

const TopBackNavigation = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor="#f0ddcc"
        style={styles.BackIcon}
        onPress={() => navigation.goBack()}>
        <BackIcon color="#333333" size={22} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  BackIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default TopBackNavigation;
