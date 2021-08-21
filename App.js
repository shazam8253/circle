import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import LoginScreen from './components/Login/login';
import { store } from './configureStore';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppMain from './components/Main/AppMain';


export default function App() {
  return (
    <Provider store={store}>
      <AppMain></AppMain>
    </Provider>
  );
}

