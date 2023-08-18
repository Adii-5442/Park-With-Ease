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
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import commonStyle from '../styles/commonStyle';
import colors from '../styles/colors';
const {height, width} = Dimensions.get('window');
const AddVehicle = props => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [countryName, setCountryName] = useState('India');
  const [countryCode, setCountryCode] = useState('IN');
  const now = new Date();
  const [typeOfVehicle, settypeOfVehicle] = useState('Two-Wheeler');
  const currentTime = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  console.log(now.toLocaleDateString());

  const handleAddEntry = () => {
    console.log('Adding vehicle entry:', vehicleNumber, currentTime);
  };
  return (
    <ImageBackground
      style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}
      source={require('../../assets/images/peakpx.jpg')}>
      <View style={[styles.container]}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 50,
            marginHorizontal: 20,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={{zIndex: 1, paddingRight: 20}}>
            <Image
              style={{resizeMode: 'contain', height: 30, width: 30}}
              source={require('../../assets/images/backIcon.png')}
            />
          </TouchableOpacity>

          <Text style={styles.title}>VEHICLE ENTRY</Text>
        </View>
        <View>
          <Text style={styles.text2}>Enter Vehicle Number</Text>
          <TextInput
            style={styles.input}
            placeholder="eg. UP32XXXXXX"
            value={vehicleNumber}
            placeholderTextColor={'#012313'}
            onChangeText={text => setVehicleNumber(text)}
          />
        </View>
        <View>
          <Text style={styles.text2}>Enter Owner's Mobile Number</Text>
          <PhoneInput
            textContainerStyle={[commonStyle.phoneNumberTextContainerView]}
            textInputStyle={commonStyle.phoneNumberTextInputView}
            containerStyle={[commonStyle.phoneNumberContainerView, {}]}
            value={phoneNumber} // this is for the phone number
            defaultCode={countryCode} // this is for the code
            layout="first"
            withShadow
            autoFocus
            onChangeCountry={text => {
              setCountryName(text.name);
              setCountryCode(text.cca2);
            }}
            onChangeText={text => {
              setPhoneNumber(text);
            }}
          />
        </View>

        <View style={styles.typeV}>
          <TouchableOpacity
            onPress={() => settypeOfVehicle('Four-Wheeler')}
            style={[
              styles.iconContainer,
              {
                backgroundColor:
                  typeOfVehicle == 'Four-Wheeler' ? '#4fd6d4' : colors.WHITE,
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
              },
            ]}>
            <Image
              style={styles.perIco}
              source={require('../../assets/icons/carico.png')}
            />
          </TouchableOpacity>
          <View style={styles.verticalLine}></View>
          <TouchableOpacity
            onPress={() => settypeOfVehicle('Two-Wheeler')}
            style={[
              styles.iconContainer,
              {
                backgroundColor:
                  typeOfVehicle == 'Two-Wheeler' ? '#4fd6d4' : colors.WHITE,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
              },
            ]}>
            <Image
              style={[styles.perIco, {width: '60%'}]}
              source={require('../../assets/icons/motorcycle.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 16, color: 'cyan'}}>{typeOfVehicle}</Text>
        </View>

        <View
          style={{
            margin: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.timeText}>Current Time: {currentTime}</Text>
          <Text style={styles.timeText}>Date: {now.toLocaleDateString()}</Text>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={handleAddEntry}>
          <Text style={styles.addButtonText}> + Add Entry</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    alignSelf: 'center',
    fontWeight: '600',
    fontFamily: 'FiraSans-Medium',
  },
  input: {
    width: Dimensions.get('window').width * 0.86,
    height: Dimensions.get('window').height * 0.07,
    borderColor: colors.WHITE,
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    margin: 20,
    marginTop: 0,
  },
  verticalLine: {width: 1, backgroundColor: colors.BLACK},
  timeText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#FFFFFF',
  },
  text2: {color: '#ffff', margin: 20, fontSize: 18},
  addButton: {
    backgroundColor: 'cyan',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignContent: 'center',
    alignSelf: 'center',
  },
  typeV: {
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
    backgroundColor: '#ffff',
    height: height * 0.07,
    width: '60%',
    borderRadius: 20,
    flexDirection: 'row',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //margin: 10,
  },
  perIco: {width: '80%', resizeMode: 'contain', alignSelf: 'center'},
  addButtonText: {
    color: '#000000',
    fontSize: 19,
    fontWeight: 'bold',
  },
});

export default AddVehicle;
