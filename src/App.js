import React from 'react';
import AppNavigator from './navigators/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import { WalletProvider } from './components/walletContext';

export default function App() {
  return (
    <WalletProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </WalletProvider>
  );
}
