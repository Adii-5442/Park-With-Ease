import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddVehicle from '../screens/AddVehicle';
import colors from '../styles/colors';
import React, {useState, useEffect} from 'react';
import RemoveVehicle from '../screens/RemoveVehicle';
import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddVehicle" component={AddVehicle} />
      <Stack.Screen name="RemoveVehicle" component={RemoveVehicle} />
    </Stack.Navigator>
  );
};

const UserStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../../assets/icons/home.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? colors.BLACK : '#D1CAD8',
                    height: 35,
                    width: 35,
                  }}
                />
                <Image
                  source={require('../../assets/icons/home.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? colors.BLACK : colors.WHITE,
                    height: 5,
                    width: 5,
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Details"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../../assets/icons/to-do-list.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? colors.BLACK : '#D1CAD8',
                    height: 35,
                    width: 35,
                  }}
                />
                <Image
                  source={require('../../assets/icons/home.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? colors.BLACK : colors.WHITE,
                    height: 5,
                    width: 5,
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../../assets/icons/profile-user.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? colors.BLACK : '#D1CAD8',
                    height: 35,
                    width: 35,
                  }}
                />
                <Image
                  source={require('../../assets/icons/home.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? colors.BLACK : colors.WHITE,
                    height: 5,
                    width: 5,
                  }}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default UserStack;
