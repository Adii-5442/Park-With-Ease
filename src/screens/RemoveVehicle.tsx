import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  FlatList,
} from 'react-native';
import commonStyle from '../styles/commonStyle';
import colors from '../styles/colors';
import {useQuery, QueryClient, QueryClientProvider} from 'react-query';
import Vehicle from './types';

const {height, width} = Dimensions.get('window');

const RemoveVehicle: React.FC = props => {
  const parkingData = [
    {
      id: 1,
      vehicleNumber: 'UP32JF4160',
      mobileNumber: '123-456-7890',
      timeOfParking: '10:30 AM',
      vehicleType: '4 wheeler',
    },
    {
      id: 2,
      vehicleNumber: 'UP32JF3160',
      mobileNumber: '987-654-3210',
      timeOfParking: '11:45 AM',
      vehicleType: '2 wheeler',
    },
    {
      id: 3,
      vehicleNumber: 'DL08XY5678',
      mobileNumber: '555-555-5555',
      timeOfParking: '2:15 PM',
      vehicleType: '4 wheeler',
    },
    {
      id: 4,
      vehicleNumber: 'KA03CD7890',
      mobileNumber: '333-444-7777',
      timeOfParking: '4:00 PM',
      vehicleType: '2 wheeler',
    },
    {
      id: 5,
      vehicleNumber: 'TN09MN2345',
      mobileNumber: '111-222-3333',
      timeOfParking: '5:30 PM',
      vehicleType: '4 wheeler',
    },
    {
      id: 6,
      vehicleNumber: 'MH12DE6789',
      mobileNumber: '888-999-0000',
      timeOfParking: '7:15 PM',
      vehicleType: '2 wheeler',
    },
    {
      id: 7,
      vehicleNumber: 'RJ14FG3456',
      mobileNumber: '444-555-6666',
      timeOfParking: '9:00 PM',
      vehicleType: '4 wheeler',
    },
    {
      id: 8,
      vehicleNumber: 'GJ06UV9012',
      mobileNumber: '666-777-8888',
      timeOfParking: '10:45 PM',
      vehicleType: '2 wheeler',
    },
    {
      id: 9,
      vehicleNumber: 'HR01KL6789',
      mobileNumber: '222-333-4444',
      timeOfParking: '1:30 AM',
      vehicleType: '4 wheeler',
    },
    {
      id: 10,
      vehicleNumber: 'AP07PQ4567',
      mobileNumber: '777-888-9999',
      timeOfParking: '3:15 AM',
      vehicleType: '2 wheeler',
    },
  ];
  const [searchText, setSearchText] = useState('');
  const queryClient = new QueryClient();
  const {
    data: vehicles = [],
    isLoading,
    error,
  } = useQuery<Vehicle[]>('vehicles', async () => {
    return parkingData;
  });

  const searchVehicle = () => {
    let filteredData = vehicles || [];
    if (searchText) {
      filteredData = filteredData.filter(data =>
        data.vehicleNumber.toLowerCase().startsWith(searchText.toLowerCase()),
      );
    }
    return filteredData;
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.listItem}>
        {item.vehicleType == '4 wheeler' ? (
          <Image
            source={require('../../assets/images/sport-car.png')}
            style={styles.profilePicture}
          />
        ) : (
          <Image
            source={require('../../assets/images/motorcycle1.png')}
            style={styles.profilePicture}
          />
        )}
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.vehicleNumber}</Text>
          <Text style={styles.normalText}>+ {item.mobileNumber}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.normalText}>Time of Parking:</Text>
            <Text style={{fontWeight: 'bold', color: '#290714'}}>
              {item.timeOfParking}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}
      source={require('../../assets/images/peakpx.jpg')}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', margin: 20, marginTop: 50}}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={{zIndex: 1, paddingRight: 20}}>
            <Image
              style={{resizeMode: 'contain', height: 30, width: 30}}
              source={require('../../assets/images/backIcon.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Remove Vehicle</Text>
        </View>
        <View style={styles.mainframe}>
          <Image
            source={require('../../assets/icons/search_icon.png')}
            style={{height: 30, width: 30, marginLeft: 10}}
          />
          <TextInput
            style={styles.txtinp}
            placeholder={'Enter Vehicle Number'}
            placeholderTextColor={'#001F'}
            onChangeText={searchText => setSearchText(searchText)}
            onSubmitEditing={event => {}}
          />
          {/* <View>

        </View> */}
        </View>

        <FlatList
          data={searchVehicle()}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainframe: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 7,
    height: 55,
    marginStart: 15,
    marginEnd: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    alignSelf: 'center',
    fontWeight: '600',
    fontFamily: 'FiraSans-Medium',
  },
  txtinp: {
    flex: 1,
    width: '80%',
    color: 'black',
    fontSize: 18,
    marginStart: 20,
    marginEnd: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: '#128C7E',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  sortText: {
    fontSize: 16,
    color: colors.BLACK,
  },
  searchInput: {
    margin: 16,
    padding: 10,
    backgroundColor: colors.WHITE,
    borderRadius: 8,
  },
  list: {
    flex: 1,
    paddingHorizontal: 16,
  },
  listItem: {
    backgroundColor: '#f2f5f3',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: '#000000',
    borderWidth: 0,
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    elevation: 8,
    marginBottom: 14,
  },
  profilePicture: {
    width: 70,
    height: 70,
    borderRadius: 25,
    marginRight: 12,
    marginLeft: 12,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 30,
  },
  name: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000000',
  },
  normalText: {
    color: '#000000',
  },
});

export default RemoveVehicle;
