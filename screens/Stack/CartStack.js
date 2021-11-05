import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Button,Text} from 'react-native'
import EmptyProduct from '../component/activity/EmptyProduct.js';
import CartProduct from '../component/activity/CartProduct.js';
import AddressCart from '../component/activity/AddressCart.js';
import AbateCart from '../component/activity/AbateCart.js';
import ConfirmCart from '../component/activity/ConfirmCart.js';
const Stack = createNativeStackNavigator();
const CartStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
      >
        <Stack.Screen
          name="Home"
          component={EmptyProduct}
          options={{ title: 'EmtyProduct' }}
        />
        <Stack.Screen name="CartProduct" component={CartProduct} />
        <Stack.Screen name="AddressCart" component={AddressCart} />
        <Stack.Screen name="AbateCart" component={AbateCart} />
        <Stack.Screen name="ConfirmCart" component={ConfirmCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CartStack;