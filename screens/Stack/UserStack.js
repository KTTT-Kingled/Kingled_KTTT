import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ChangePassword from '../loginComponent/ChangePassword';

const Stack = createNativeStackNavigator();
const UserStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default UserStack;
