import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './frontend/src/screen/Home'
import Login from './frontend/src/screen/Login'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import StackNavigation from './frontend/src/navigation/StackNavigation';


const App = () => {
  return <NavigationContainer>
  <StackNavigation/>
  </NavigationContainer>
}

export default App

const styles = StyleSheet.create({})