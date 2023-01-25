import { Text, View , Dimensions , StyleSheet, Button} from 'react-native'
import React, { Component, useState , useRef} from 'react'
import PhoneInput from "react-native-phone-number-input";
import colors from '../src/colors';
import commonStyle from '../src/commonStyle'
import { useNavigation } from '@react-navigation/native';


const {
    width,
    height
  } = Dimensions.get("window");


const Login = () => {
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef(0);
    const navigation = useNavigation();
    

    return (
        <View style = {{backgroundColor:'white',flex:1,alignContent:'center'}}>
          <Text style = {{fontSize: width * 0.080,
                              fontWeight: 'bold',
                              color: colors.BLACK,
                              margin:50,
                              alignSelf:'center',
                              justifyContent:'center'
                  
                              }}>
            WELCOME !!
          </Text>
            <Text style = {{fontSize: width * 0.050,
                              fontWeight: 'bold',
                              color: colors.BLACK,
                              margin:20,
                              marginLeft:27
                              }}>
                Please Enter Your Mobile Number
            </Text>
            <View style = {{flex:0.7}}>
              <PhoneInput
                  containerStyle={commonStyle.phoneNumberContainerView}
                  textContainerStyle={commonStyle.phoneNumberTextContainerView}
                  textInputStyle = {commonStyle.phoneNumberTextInputView}
                  ref={phoneInput}
                  defaultValue={value}
                  defaultCode="IN"
                  layout="first"
                  onChangeText={(text) => {
                      setValue(text);
                  }}
                  onChangeFormattedText={(text) => {
                      setFormattedValue(text);
                  }}
                  withDarkTheme
                  withShadow
                  autoFocus
            />

            </View>
          <View style = {{marginTop:0}}>
            <Button title='Proceed' style = {{marginTop:20}} onPress ={()=>navigation.navigate('OtpScreen')} />
          </View>
        </View>
    )

}

export default Login ;

