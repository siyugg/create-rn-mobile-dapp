import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ConnectWallet from '../screens/connectWallet';
import TestContract from '../screens/testContract';


const AppNavigator = ({navigation}) => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="HomeStackNavigate"
      activeColor="#0a74ff"
      theme={{colors: {secondaryContainer: 'transparent'}}}
      screenOptions={{
        tabBarStyle: {position: 'absolute'},
        barStyle: {backgroundColor: '#eee'},
      }}>
      <Tab.Screen
        name="ConnectWallet"
        component={ConnectWallet}
        options={{
          tabBarLabel: 'Connect Wallet',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="wallet" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="TestContract"
        component={TestContract}
        options={{
          tabBarLabel: 'Test Contract',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="note-text" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
