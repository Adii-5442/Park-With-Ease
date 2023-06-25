import  {NavigationContainer}  from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import React from 'react';

const Stack = createNativeStackNavigator();

const UserStack = () => {

  return(
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
          headerShown: false
        }}>
            <Stack.Screen name = "Home" component={HomeScreen} options = {{headerShown:false}}/>
            
      </Stack.Navigator>
    </NavigationContainer>
  )


  
}

export default UserStack