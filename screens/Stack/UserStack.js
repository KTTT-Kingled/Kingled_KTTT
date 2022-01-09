import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import User from '../loginComponent/User';

const Stack = createNativeStackNavigator();
const UserStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="ChangePassword" component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default UserStack;
