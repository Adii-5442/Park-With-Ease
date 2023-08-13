import {Text, View , Button , TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {Image} from 'react-native';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, ScrollView} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const HomeScreen = () => {
  console.log(screenWidth);
  const navigation = useNavigation();
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => 'black',
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const data = [
    {
      name: 'Total Vehicles',
      population: 200,
      legendFontColor: '#7F7F7F',
      color: '#1b1c1c',
      legendFontSize: 15,
    },
    {
      name: 'Parked Today',
      population: 30,
      color: '#5c5e5c',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Left Today',
      population: 52,
      color: '#9b9e9c',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={{backgroundColor: '#2f302f'}}>
          <View
            style={{
              height: 200,
              backgroundColor: '#2f302f',
            }}>
            <Image
              style={{
                flex: 1,
                alignSelf: 'center',
                marginLeft: 50,
                paddingRight: 20,
                width: '100%',
                resizeMode: 'contain',
              }}
              source={require('../../assets/icons/gen.png')}
            />
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#c1c9c4',
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              paddingHorizontal: 20,
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
            <View>
              <PieChart
                data={data}
                width={screenWidth}
                height={200}
                chartConfig={chartConfig}
                accessor={'population'}
                backgroundColor={'transparent'}
                paddingLeft={'15'}
                absolute
              />
            </View>
            <View style={styles.parkingInfo}>
              <Text style={styles.parkingText}>
                Welcome to our parking lot! We provide safe and secure parking
                services for all types of vehicles.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity>
        <Text>Hello</Text>
      </TouchableOpacity>
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
    elevation: 5,
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
  parkingInfo: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  parkingText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#c1c9c4',
  },
});
export default HomeScreen;
