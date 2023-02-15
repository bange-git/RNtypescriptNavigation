/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Books from './src/screens/Books';
import Explore from './src/screens/Explore';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './src/screens/Profile';
import BookDetails from './src/screens/BookDetails';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreIcon from './src/icons/ExploreIcon';
import ProfileIcon from './src/icons/ProfileIcon';
import * as Icon from 'react-native-feather';

export type RootStackParams = {
  BookStack: NavigatorScreenParams<BookStackParams>;
  ExploreStack: undefined;
  Profile: undefined;
  BookDetails: {
    title: string;
  };
};

export type BookStackParams = {
  Books: undefined;
  BookDetails: {
    title: string;
  };
};

export type ExploreStackParams = {
  Explore: undefined;
  BookDetails: {
    title: string;
  };
};

const BookStack = createNativeStackNavigator<BookStackParams>();

const ExploreStack = createNativeStackNavigator<ExploreStackParams>();

const RootStack = createBottomTabNavigator<RootStackParams>();

const BookStackScreen = () => {
  return (
    <BookStack.Navigator>
      <BookStack.Screen name="Books" component={Books} />
      <BookStack.Screen name="BookDetails" component={BookDetails} />
    </BookStack.Navigator>
  );
};

const ExploreStackScreen = () => {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen name="Explore" component={Explore} />
      <ExploreStack.Screen name="BookDetails" component={BookDetails} />
    </ExploreStack.Navigator>
  );
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#080bd8',
          tabBarInactiveTintColor: 'gray',
        }}>
        {/* <RootStack.Screen name="Books" component={Books} /> */}
        <RootStack.Screen
          name="BookStack"
          component={BookStackScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon.Book color={color} width={size} height={size} />
            ),
            headerShown: false,
            tabBarLabel: 'Books',
          }}
        />
        <RootStack.Screen
          name="ExploreStack"
          component={ExploreStackScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <ExploreIcon color={color} size={size} />
            ),
            headerShown: false,
            tabBarLabel: 'Explore',
          }}
        />
        <RootStack.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({color, size}) => (
              <ProfileIcon color={color} size={size} />
            ),
          }}
        />
        {/* <RootStack.Screen name="BookDetails" component={BookDetails} /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
