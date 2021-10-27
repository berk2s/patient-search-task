import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SearchScreen} from '../screens';
import {ResultScreen} from '../screens';
import {navigationRef} from '../services';

const Stack = createNativeStackNavigator();

export const Navigations = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Results"
          component={ResultScreen}
          options={{headerShown: true, headerTitle: 'Results'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
