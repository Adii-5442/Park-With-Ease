import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {Image} from 'react-native';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, ScrollView} from 'react-native';
const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: '#2f302f'}}>
      <View
        style={{
          flex: 0.28,
          backgroundColor: '#2f302f',
        }}>
        <Image
          style={{
            flex: 1,
            alignSelf: 'center',
            marginLeft: 50,
            paddingRight: 20,
            marginTop: 30,
            width: '100%',
            resizeMode: 'contain',
          }}
          source={require('../../assets/icons/gen.png')}
        />
      </View>
      <ScrollView
        style={{
          flex: 0.7,
          backgroundColor: '#c1c9c4',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.box}>
            <Text style={styles.TextNum}>Vehicles Parked : 87</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    width: 200,
    backgroundColor: '#edf2ef', // Transparent white background
    borderRadius: 20,
    opacity: 0.8, // Adjust the opacity to control the transparency level
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5, // For Android, this will give a similar shadow effect
    marginVertical: 20,
  },
  TextNum: {
    fontSize: 15,
    color: '#000',
  },
  textBottom: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
export default HomeScreen;
