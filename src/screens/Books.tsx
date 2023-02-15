import {View, Text} from 'react-native';
import React from 'react';
import BookCard from '../components/BookCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../AppTabNavigator';
import TopDrawerNavigation from '../components/TopDrawerNavigation';

type Props = NativeStackScreenProps<RootStackParams, 'BookStack'>;

const Books = ({navigation}: Props) => {
  return (
    <View>
      <TopDrawerNavigation />
      <Text>All Books</Text>
      <View>
        <BookCard
          title="Atomic Habits"
          onPress={title => {
            navigation.navigate('BookDetails', {title});
          }}
        />
        <BookCard
          title="The Power of Habits"
          onPress={title => navigation.navigate('BookDetails', {title})}
        />
        <BookCard
          title="Tiny Habits"
          onPress={title => navigation.navigate('BookDetails', {title})}
        />
        <BookCard
          title="Mini Habits"
          onPress={title => navigation.navigate('BookDetails', {title})}
        />
      </View>
    </View>
  );
};

export default Books;
