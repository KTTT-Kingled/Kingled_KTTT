import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Button,Text} from 'react-native'
import ViewDetailBtn from '../productComponent/ViewDetailComponent/ViewDetailImport.js'
import Detail from '../productComponent/Detail.js'
const Stack = createNativeStackNavigator();
const ViewDetailStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
      >
        <Stack.Screen
          name="ViewDetailBtn"
          component={ViewDetailBtn}
          options={{ title: 'EmtyProduct' }}
        />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ViewDetailStack;