import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {Image} from 'react-native';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();
  setTimeout(function () {
    navigation.navigate('Home');
  }, 700);

  return (
    <View style={{flex: 1, backgroundColor: '#000000'}}>
      <View style={{flex: 0.8}}>
        <Image
          source={require('../../assets/images/ParkWelcLogo.jpeg')}
          style={{
            flex: 1,
            width: '100%',
            height: '120%',
            resizeMode: 'contain',
          }}
        />
      </View>
      <View>
        <Progress.Bar
          animationType={'spring'}
          useNativeDriver={true}
          indeterminate={true}
          progress={0.4}
          width={null}
          animated={true}
          color={'#FFFFFF'}
          style={{marginLeft: 50, marginRight: 50}}
        />
      </View>
    </View>
  );
};

export default Welcome;
