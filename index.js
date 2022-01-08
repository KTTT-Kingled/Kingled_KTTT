/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { OrderProvider } from './contexts/orderContext';
import { SearchProvider } from './contexts/searchContext';
import { UserProvider } from './contexts/userContext';

const RNContext = () => {
  return (
    <UserProvider>
      <OrderProvider>
        <SearchProvider>
        <App />
        </SearchProvider>
      </OrderProvider>
    </UserProvider>
  );
};
AppRegistry.registerComponent(appName, () => RNContext);
