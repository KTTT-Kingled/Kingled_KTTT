import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ChangePassword from '../loginComponent/ChangePassword';
import User from '../loginComponent/User';

const Stack = createNativeStackNavigator();
const UserStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          initialRouteName: 'User',
        }}>
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default UserStack;
