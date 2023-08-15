//Import React and Hooks we needed
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  DeviceEventEmitter,
  ScrollView,
  TextInput,
  TouchableOpacity,
  BackHandler,
  Alert,
  ToastAndroid,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {authStyle} from './authStyle';
import commonStyle from '../../src/styles/commonStyle';
import colors from '../../src/styles/colors';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoader, setLoader] = useState(false);

  const onLogin = async () => {};

  return (
    <ScrollView
      style={authStyle.scrollViewStyle}
      showsVerticalScrollIndicator={false}>
      <View style={authStyle.logoStyle}>
        <Image
          source={require('../../assets/welcome.png')}
          style={{height: 100, width: 200}}
        />
      </View>
      <View style={authStyle.marginTop}>
        <View style={commonStyle.commonTextInputParentStyle}>
          <TextInput
            style={commonStyle.commonTextInputStyle}
            placeholder={'Enter Email'}
            placeholderTextColor={colors.GREY_1}
            value={email}
            autoCapitalize="none"
            onChangeText={text => setEmail(text.trim())}
          />
        </View>
      </View>

      <View style={authStyle.marginTop}>
        <View style={commonStyle.commonTextInputParentStyle}>
          <TextInput
            style={commonStyle.commonTextInputStyle}
            placeholder={'Enter Password'}
            placeholderTextColor={colors.GREY_1}
            value={password}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={text => setPassword(text.trim())}
          />
        </View>
      </View>

      <View style={authStyle.marginBottomView}>
        <TouchableOpacity
          style={commonStyle.buttonView}
          onPress={() => onLogin()}>
          <Text style={commonStyle.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>

      <View style={authStyle.viewParentStyle}>
        <Text style={authStyle.textStyle}>New User?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
          <Text style={authStyle.boldTextStyle}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Login;
