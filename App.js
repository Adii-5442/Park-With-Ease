import { Text, View } from 'react-native';
import React, { Component, useEffect } from 'react';
import { StackActions } from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import OtpScreen from './screens/OtpScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  const Home = () => {
    return(
      <View style = {{backgroundColor:'black',flex:1}}>
        <Text style = {{fontSize : 90 , color  : 'white'}}>
          HELLO   DARKFIRE
        </Text>
      </View>
    )
  }



  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name = "Login" component={Login} options = {{headerShown:false}}/>
      <Stack.Screen name = "OtpScreen" component={OtpScreen} options = {{headerShown:false}}/>
      <Stack.Screen name = "Welcome" component={Welcome} options = {{headerShown:false}}/>
      <Stack.Screen name = "Home" component={Home}/>
      </Stack.Navigator>

      
    </NavigationContainer>
  )


  
}

export default App