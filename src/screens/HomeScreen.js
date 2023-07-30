import {Text, View} from 'react-native';
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
    <ScrollView style={{flex: 1, backgroundColor: '#2f302f'}}>
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
        <View style={styles.parkingInfo}>
          <Text style={styles.parkingText}>
            With our efficient parking management system, we ensure a
            hassle-free experience for all our customers.
          </Text>
        </View>
        <View style={styles.parkingInfo}>
          <Text style={styles.parkingText}>
            Whether you need short-term parking or long-term parking, we've got
            you covered.
          </Text>
        </View>
        <View style={styles.parkingInfo}>
          <Text style={styles.parkingText}>
            Our parking lot is equipped with 24/7 surveillance cameras, ensuring
            the safety and security of your vehicles at all times.
          </Text>
        </View>
        <View style={styles.parkingInfo}>
          <Text style={styles.parkingText}>
            We offer convenient payment options, including mobile payments, so
            you can easily pay for your parking without any hassle.
          </Text>
        </View>
        <View style={styles.parkingInfo}>
          <Text style={styles.parkingText}>
            Whether you are a daily commuter or a visitor, our spacious parking
            lot has plenty of spots to accommodate all types of vehicles.
          </Text>
        </View>
        <View style={styles.parkingInfo}>
          <Text style={styles.parkingText}>
            Enjoy your day knowing that your vehicle is parked in a secure and
            well-maintained parking facility.
          </Text>
        </View>
      </View>
    </ScrollView>
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
});
export default HomeScreen;
