/* eslint-disable react-native/no-inline-styles */
import {Text, View, Button, TouchableOpacity.useState} from 'react-native';
import React, {Component} from 'react';
import {Image} from 'react-native';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, ScrollView} from 'react-native';
import {PieChart, LineChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import colors from '../styles/colors';
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

  const [take , setTake] = useState();

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
        <View style={{backgroundColor: colors.BLACK}}>
          <View
            style={{
              height: 200,
              backgroundColor: colors.BLACK,
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
                width={screenWidth * 0.85}
                height={200}
                chartConfig={chartConfig}
                accessor={'population'}
                backgroundColor={'transparent'}
                absolute
              />
            </View>
            <View style={styles.parkingInfo}>
              <Text style={styles.parkingText}>
                Welcome to our parking lot! We provide safe and secure parking
                services for all types of vehicles.
              </Text>
            </View>
            <LineChart
              data={{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                ],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                    ],
                  },
                ],
              }}
              width={screenWidth * 0.95} // from react-native
              height={220}
              yAxisLabel="Rs "
              yAxisSuffix="k"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: '#0e4a20',
                backgroundGradientFrom: '#00ff44',
                backgroundGradientTo: '#002b0c',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#02330f',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
                alignSelf: 'center',
              }}
            />
            <View style={styles.parkingInfo}>
              <Text style={styles.parkingText}>
                Welcome to our parking lot! We provide safe and secure parking
                services for all types of vehicles.
              </Text>
            </View>
            <View style={styles.parkingInfo}>
              <Text style={styles.parkingText}>
                Welcome to our parking lot! We provide safe and secure parking
                services for all types of vehicles.
              </Text>
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
      <View style={styles.buttonContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={() => navigation.push('AddVehicle')}
            style={[styles.floatingButton]}>
            <View style={styles.box2}>
              <Text style={{fontSize: 18, color: '#FFFF'}}>+ Add Vehicle</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.push('RemoveVehicle')}
            style={styles.floatingButton}>
            <View style={styles.box2}>
              <Text style={{fontSize: 18, color: '#FFFF'}}>
                - Remove Vehicle
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
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
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  floatingButton: {
    marginHorizontal: 10,
  },
  box2: {
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#000000', // Transparent white background
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
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
    backgroundColor: colors.BLACK,
  },
});
export default HomeScreen;
