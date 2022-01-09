import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { OrderContext } from '../../contexts/orderContext.js';
import AbateCart from '../component/activity/AbateCart.js';
import AddressCart from '../component/activity/AddressCart.js';
import CartProduct from '../component/activity/CartProduct.js';
import ConfirmCart from '../component/activity/ConfirmCart.js';
import EmptyProduct from '../component/activity/EmptyCart.js';

const Stack = createNativeStackNavigator();
const CartStack = () => {
  const {isEmpty} = useContext(OrderContext);
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isEmpty ? (
          <Stack.Screen name="EmptyCart" component={EmptyProduct} />
        ) : (
          <>
            <Stack.Screen name="CartProduct" component={CartProduct} />
            <Stack.Screen name="AddressCart" component={AddressCart} />
            <Stack.Screen name="AbateCart" component={AbateCart} />
            <Stack.Screen name="ConfirmCart" component={ConfirmCart} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CartStack;
