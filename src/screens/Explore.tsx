import {View, Text} from 'react-native';
import React from 'react';
import BookCard from '../components/BookCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../AppTabNavigator';
import TopDrawerNavigation from '../components/TopDrawerNavigation';

type Props = NativeStackScreenProps<RootStackParams, 'ExploreStack'>;

const Explore = ({navigation}: Props) => {
  return (
    <View>
      <TopDrawerNavigation />
      <Text>Explore</Text>
      <Text>Related Books</Text>
      <BookCard
        title="Atomic Habits"
        onPress={() => {
          navigation.navigate('BookStack', {
            screen: 'BookDetails',
            params: {title: 'Hello from explore'},
          });
        }}
      />
      <BookCard
        title="The Power of Habits"
        onPress={() => {
          navigation.navigate('BookDetails', {title: 'The Power of Habits'});
        }}
      />
      <BookCard
        title="Tiny Habits"
        onPress={() => {
          navigation.navigate('BookDetails', {title: 'Tiny Habits'});
        }}
      />
      <BookCard
        title="Mini Habits"
        onPress={() => {
          navigation.navigate('BookDetails', {title: 'Mini Habits'});
        }}
      />
    </View>
  );
};

export default Explore;
