import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screen/Login'
import Home from '../screen/Home'

const StackNavigation = () => {
    const Stack = createStackNavigator()
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
    </Stack.Navigator>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})