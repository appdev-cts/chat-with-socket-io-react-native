import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const naviagtion = useNavigation()
  return (
    <View style={{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        rowGap:10
    }}>
        <View style={{
            borderWidth:2,
            borderColor:'silver',
            borderRadius:10,
            width:'80%',
            padding:10
        }}>

      <TextInput placeholder='Enter your name' style={{
        fontSize:20
      }}/>
        </View>
        <TouchableOpacity
        onPress={()=>{
            naviagtion.navigate('Home')
        }}
        style={{
            borderWidth:2,
            borderColor:'silver',
            borderRadius:10,
            width:'40%',
            padding:10,
            alignItems:"center",
            justifyContent:"center"
        }}>
            <Text style={{
        fontSize:20,
        fontWeight:"700"
      }}>
                Login
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})