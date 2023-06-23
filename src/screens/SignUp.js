//Import React and Hooks we needed
import React, {
    useState,
    useEffect
  } from 'react';
  
  import {
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    TouchableOpacity,
    ToastAndroid
  
  } from 'react-native';
  
  import colors from '../styles/colors';
  import {authStyle} from './authStyle';
  import commonStyle from '../styles/commonStyle';
  import PhoneInput from 'react-native-phone-number-input';
  import  {useNavigation}  from '@react-navigation/native';
  
  const SignUp = (props) => {
    const [email, setEmail] = useState('');
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
  
  
    const registerUser = async () => {
      var username = email.match(/^([^@]*)@/)[1];
      if (!firstName && !lastName && !email  && !phoneNumber && !password && !confirmPassword) {
        console.log("Please enter the details first.");
      } else if (!firstName) {
        console.log("Please enter the first name.");
      } else if (!lastName) {
        console.log("Please enter the last name.");
      } else if (!email) {
        console.log("Please enter an email.");
      } else if (!phoneNumber) {
        console.log("Please enter a phone number.");
      } else if (phoneNumber.trim().length < 10) {
        console.log("Please enter at least a 10-digit phone number.");
      } else if (!password) {
        console.log("Please enter a password.");
      } else if (password.length < 5) {
        console.log("Password length should be at least 5 characters.");
      } else if (
        password == "password" ||
        password == "12345" ||
        password == "123456" ||
        password == "1234567" ||
        username == password
      ) {
        console.log("Please enter a strong password.");
      } else if (!confirmPassword) {
        console.log("Please re-enter the password.");
      } else if (confirmPassword.trim() != password.trim()) {
        console.log("Password is not matching.");
      }else {
        setLoader(true);
        try{
          ToastAndroid.show("Creating your account",ToastAndroid.SHORT)
          await createUserWithEmailAndPassword(auth,email,password).then((user)=>{
              console.log("Account created successfully",user.user.uid)
              ToastAndroid.show("Signed Up successfully",ToastAndroid.LONG)
              setDoc(doc(db,'users',user.user.uid),{
                fullname:firstName + " " + lastName,
                firstName:firstName,
                email:email,
                phone:phoneNumber,
                countryName:countryName,
                likedItems:[]
              })
              props.navigation.navigate('Login')
          })
          
  
        }catch(error){
          console.log("Aye!!, erroro",error)
        }
  
      }
    };
    
  
    return (
        <ScrollView style={authStyle.scrollViewStyle}
            showsVerticalScrollIndicator={false}>
            {/* <ProgressLoader loading={isLoader} /> */}
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={{marginLeft: 15,}}>
                
            </TouchableOpacity>
  
            <View style={[authStyle.logoStyle]}>
                {/* <CloutLogo width="100" height="40" /> */}
                <Image source={require('../../assets/welcome.png')} style={{height:100,width:200}}/>
            </View>
  
            <View style={authStyle.marginTop}>
                {/* <Text style={commonStyle.commonTextStyle}>{string.first_name}</Text> */}
                <View style={commonStyle.commonTextInputParentStyle}>
                    <TextInput
                        style={commonStyle.commonTextInputStyle}
                        placeholder={"Enter First Name"}
                        placeholderTextColor={colors.GREY_1}
                        value={firstName}
                        onChangeText={(text) => setFirstName(text)}
                    />
                </View>
            </View>
  
            <View style={authStyle.marginTop}>
                {/* <Text style={commonStyle.commonTextStyle}>{string.last_name}</Text> */}
                <View style={commonStyle.commonTextInputParentStyle}>
                    <TextInput
                        style={commonStyle.commonTextInputStyle}
                        placeholder={"Enter Last name"}
                        placeholderTextColor={colors.GREY_1}
                        value={lastName}
                        onChangeText={(text) => setLastName(text)}
                    />
                </View>
            </View>
            
  
            <View style={authStyle.marginTop}>
                <View style={commonStyle.commonTextInputParentStyle}>
                    <TextInput
                        style={commonStyle.commonTextInputStyle}
                        placeholder={"Your email"}
                        placeholderTextColor={colors.GREY_1}
                        value={email}
                        autoCapitalize='none'
                        keyboardType='email-address'
                        onChangeText={(text) => setEmail(text.trim())}
                    />
                </View>
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
                    onChangeCountry={(text) => {
                        setCountryName(text.name);
                        setCountryCode(text.cca2);
                    }}
                    onChangeText={(text) => {
                        setPhoneNumber(text);
                    }}
                />
            </View>
  
            <View style={authStyle.marginTop}>
                <View style={commonStyle.commonTextInputParentStyle}>
                    <TextInput
                        style={commonStyle.commonTextInputStyle}
                        placeholder={"Enter Password "}
                        placeholderTextColor={colors.GREY_1}
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text.trim())}
                    />
                </View>
            </View>
  
            <View style={authStyle.marginTop}>
                {/* <Text style={commonStyle.commonTextStyle}>{string.confirm_password}</Text> */}
                <View style={commonStyle.commonTextInputParentStyle}>
                    <TextInput
                        style={commonStyle.commonTextInputStyle}
                        placeholder={"Enter confirm password"}
                        placeholderTextColor={colors.GREY_1}
                        value={confirmPassword}
                        secureTextEntry={true}
                        onChangeText={(text) => setConfirmPassword(text.trim())}
                    />
                </View>
            </View>
  
            <View style={{marginTop:40}}>
                <TouchableOpacity style={commonStyle.buttonView}
                    onPress={() => registerUser()}>
                    <Text style={commonStyle.buttonText}>{"Sign Up"}</Text>
                </TouchableOpacity>
            </View>
  
            <View style={authStyle.viewParentStyle}>
                <Text style={authStyle.textStyle}>{"Already have an account?"}</Text>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Login')}>
                    <Text style={authStyle.boldTextStyle}>{"Login"}</Text>
                </TouchableOpacity>
            </View>
  
        </ScrollView>
    );
  };
  export default SignUp;