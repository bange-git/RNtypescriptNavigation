import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  BookStackParams,
  ExploreStackParams,
  RootStackParams,
} from '../../AppTabNavigator';

type NavigationProp = BookStackParams & ExploreStackParams & RootStackParams;

const Menu = () => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigationProp>>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Navigation</Text>
      <TouchableOpacity
        onPress={() => {
          // go to explore
          navigation.navigate('Books');
        }}>
        <Text style={styles.link}>Books</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // go to restaurants
          navigation.navigate('Explore');
        }}>
        <Text style={styles.link}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // go to profile
          navigation.navigate('Profile');
        }}>
        <Text style={styles.link}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    padding: 16,
    marginTop: 8,
  },
  link: {
    fontSize: 16,
    marginTop: 4,
    color: '#097ade',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
  },
});

export default Menu;
