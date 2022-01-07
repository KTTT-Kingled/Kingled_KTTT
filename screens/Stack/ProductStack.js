import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Category from '../productComponent/CategoryProduct';
import Detail from '../productComponent/Detail.js';
import Product from '../productComponent/Product.js';

const Stack = createNativeStackNavigator();
const LoginStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Product"
          component={Product}
          options={{ title: 'EmtyProduct' }}
        />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Category" component={Category} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginStack;
