import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../AppTabNavigator';
import BookCard from '../components/BookCard';
import TopBackNavigation from '../components/TopBackNavigation';

type Props = NativeStackScreenProps<RootStackParams, 'BookDetails'>;

const BookDetails: React.FC<Props> = ({route, navigation}) => {
  return (
    <View>
      <TopBackNavigation />
      <Text>This is BookDetails Screen</Text>
      <Text>{route.params.title}</Text>
      <Text>Related Books</Text>
      <BookCard
        title="Atomic Habits"
        onPress={() => {
          navigation.push('BookDetails', {title: 'Atomic Habits'});
        }}
      />
      <BookCard
        title="The Power of Habits"
        onPress={() => {
          navigation.push('BookDetails', {title: 'The Power of Habits'});
        }}
      />
      <BookCard
        title="Tiny Habits"
        onPress={() => {
          navigation.push('BookDetails', {title: 'Tiny Habits'});
        }}
      />
      <BookCard
        title="Mini Habits"
        onPress={() => {
          navigation.push('BookDetails', {title: 'Mini Habits'});
        }}
      />
    </View>
  );
};

export default BookDetails;
