//Import React and Hooks we needed
import React, {useState, useEffect} from 'react';

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
import loader from '../components/loader';
import colors from '../styles/colors';
import {authStyle} from './authStyle';
import commonStyle from '../styles/commonStyle';
import PhoneInput from 'react-native-phone-number-input';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../hooks/useAuth';
import FastImage from 'react-native-fast-image';
import auth from '@react-native-firebase/auth';
import BottomLoader from '../components/bottomLoader';

const SignUp = props => {
  const [email, setEmail] = useState('');
  const {user} = useAuth();
  const navigation = useNavigation();
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [countryName, setCountryName] = useState('India');
  const [countryCode, setCountryCode] = useState('IN');
  const [lastName, setLastName] = useState('');
  const [isLoader, setLoader] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [verificationID, setverificationID] = useState(null);
  const signIn = async () => {
    setLoader(true);
    try {
      ToastAndroid.show('Please Wait', ToastAndroid.SHORT);
      const confirmation = await auth().signInWithPhoneNumber(
        `+91${phoneNumber}`,
      );
      setverificationID(confirmation.verificationId);
      setLoader(false);
      console.log(confirmation);
      props.navigation.navigate('OtpScreen', {
        verificationId: confirmation.verificationId,
      });
    } catch (error) {
      setLoader(false);
      ToastAndroid.show('Some Error occurred', ToastAndroid.LONG);
      console.log('Unable to process request', error);
    }
  };

  // const registerUser = async () => {
  //   var username = email.match(/^([^@]*)@/)[1];
  //   if (!firstName && !lastName && !email  && !phoneNumber && !password && !confirmPassword) {
  //     console.log("Please enter the details first.");
  //   } else if (!firstName) {
  //     console.log("Please enter the first name.");
  //   } else if (!lastName) {
  //     console.log("Please enter the last name.");
  //   } else if (!email) {
  //     console.log("Please enter an email.");
  //   } else if (!phoneNumber) {
  //     console.log("Please enter a phone number.");
  //   } else if (phoneNumber.trim().length < 10) {
  //     console.log("Please enter at least a 10-digit phone number.");
  //   } else if (!password) {
  //     console.log("Please enter a password.");
  //   } else if (password.length < 5) {
  //     console.log("Password length should be at least 5 characters.");
  //   } else if (
  //     password == "password" ||
  //     password == "12345" ||
  //     password == "123456" ||
  //     password == "1234567" ||
  //     username == password
  //   ) {
  //     console.log("Please enter a strong password.");
  //   } else if (!confirmPassword) {
  //     console.log("Please re-enter the password.");
  //   } else if (confirmPassword.trim() != password.trim()) {
  //     console.log("Password is not matching.");
  //   }else {
  //     setLoader(true);
  //     try{
  //       ToastAndroid.show("Creating your account",ToastAndroid.SHORT)
  //       await createUserWithEmailAndPassword(auth,email,password).then((user)=>{
  //           console.log("Account created successfully",user.user.uid)
  //           ToastAndroid.show("Signed Up successfully",ToastAndroid.LONG)
  //           setDoc(doc(db,'users',user.user.uid),{
  //             fullname:firstName + " " + lastName,
  //             firstName:firstName,
  //             email:email,
  //             phone:phoneNumber,
  //             countryName:countryName,
  //             likedItems:[]
  //           })
  //           props.navigation.navigate('Login')
  //       })

  //     }catch(error){
  //       console.log("Aye!!, erroro",error)
  //     }

  //   }
  // };
  const onProceed = () => {
    if (phoneNumber.length == 10) {
      signIn();
    } else {
      Alert.alert('Invalid Input!', 'Please enter a valid phone Number');
    }
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={authStyle.scrollViewStyle}
        showsVerticalScrollIndicator={false}>
        {/* <ProgressLoader loading={isLoader} /> */}

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{marginLeft: 15}}></TouchableOpacity>

        <View style={[authStyle.logoStyle]}>
          {/* <CloutLogo width="100" height="40" /> */}
          <FastImage
            source={require('../../assets/phoneAuth.gif')}
            style={{height: 250, width: 250}}
          />
        </View>

        <View style={authStyle.marginTop}>
          <PhoneInput
            textContainerStyle={commonStyle.phoneNumberTextContainerView}
            textInputStyle={commonStyle.phoneNumberTextInputView}
            containerStyle={commonStyle.phoneNumberContainerView}
            value={phoneNumber} // this is for the phone number
            defaultCode={countryCode} // this is for the code
            layout="first"
            // withShadow
            // autoFocus
            onChangeCountry={text => {
              setCountryName(text.name);
              setCountryCode(text.cca2);
            }}
            onChangeText={text => {
              setPhoneNumber(text);
            }}
          />
        </View>

        <View style={{marginTop: 40}}>
          <TouchableOpacity style={commonStyle.buttonView} onPress={onProceed}>
            <Text style={commonStyle.buttonText}>{'Proceed'}</Text>
          </TouchableOpacity>
        </View>

        <View style={authStyle.viewParentStyle}>
          <Text style={authStyle.textStyle}>{'Already have an account?'}</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text style={authStyle.boldTextStyle}>{'Login'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View
        style={{
          flex: 0.01,
          marginBottom: 5,
          backgroundColor: colors.OFF_WHITE,
        }}>
        <BottomLoader isLoading={isLoader} />
      </View>
    </View>
  );
};
export default SignUp;
