import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Login from '../loginComponent/Login.js';
import Register from '../Register.js';
import User from '../loginComponent/User';

const Stack = createNativeStackNavigator();
const LoginStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="User" component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginStack;
