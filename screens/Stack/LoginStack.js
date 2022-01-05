import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../loginComponent/Login.js';
import Register from '../Register.js'
import HomeScreen from '../HomeScreen.js'
import ForgetPassword from '../loginComponent/ForgetPassword'
import ComboBox from '../loginComponent/ComboBox'
const Stack = createNativeStackNavigator();
const LoginStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
      >
        <Stack.Screen
          name="Home"
          component={Login}
          options={{ title: 'EmtyProduct' }}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ComboBox" component={ComboBox} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginStack;