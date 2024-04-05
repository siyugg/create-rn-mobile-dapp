import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import useContract from '../components/contractSetup';
import { useWallet } from '../components/walletContext';

// Example of calling a view function in the smart contract
const TestContract = () => {
    const {contract} = useContract
    const {address} = useWallet();
    const [balance, setBalance] = useState(null)

    const getBalance = async () => {
        if (contract) {
            const myBalance = await contract.balanceOf(address);
            setBalance(myBalance.toString());
        } else {
            console.log('Contract is not connected.');
        }
    };
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Test Your Contract Here</Text>
            <TouchableOpacity style={styles.button} onPress={getBalance}>
                <Text style={styles.text}>Get Balance</Text>
            </TouchableOpacity>
        {contract && <Text style={styles.balance}>Your balance: {balance}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 18,
        padding:10,
    },
  button: {
    backgroundColor: '#0ac2ff',
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    height: 50,
    width: '50%',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    width: '90%',
    textAlign: 'center',
    color: 'white',
  },
  balance:{
    fontSize: 20,
    padding: 10
  },
});
export default TestContract;