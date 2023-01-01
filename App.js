import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { StackActions } from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {

  const Home = () => {
    return(
      <View>
        <Text style = {{fontSize : 90 , color  : 'black'}}>
          HELLO   DARKFIRE
        </Text>
      </View>
    )
  }



  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component={Home}/>
      </Stack.Navigator>

      
    </NavigationContainer>
  )


  
}

export default App