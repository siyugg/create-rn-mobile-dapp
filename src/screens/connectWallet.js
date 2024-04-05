import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { useWallet } from '../components/walletContext';

// Example of connecting to WalletConnect
const ConnectWallet = () => {
    const {isConnected, address, connectWallet, disconnectWallet} = useWallet();

    const handleConnection = () => {
    if (isConnected) {
      console.log('wallet is connected');
      disconnectWallet();
    } else {
      console.log('Wallet is not connected');
      connectWallet();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.displayAddress}>
        {isConnected ? `Your address: ${address}` : 'Connect to Your Wallet'}
      </Text>
      <TouchableOpacity onPress={handleConnection} style={styles.connectButton}>
        <Text style={styles.connectionText}>
          {isConnected ? 'Disconnect' : 'Connect'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'eee',
    alignItems: 'center',
    justifyContent: 'center',
  },

  displayAddress: {
    marginVertical: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  connectButton: {
    backgroundColor: '#0ac2ff',
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    height: 50,
    width: '50%',
  },
  connectionText: {
    fontSize: 16,
    fontWeight: '500',
    width: '90%',
    textAlign: 'center',
    color: 'white',
  },
});

export default ConnectWallet;