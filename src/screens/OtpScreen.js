import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {authStyle} from './authStyle';
import commonStyle from '../styles/commonStyle';
import auth from '@react-native-firebase/auth';
const OtpScreen = props => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: 6});
  const [propss, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  console.log(props.route.params.verificationId);

  const handleSubmit = async () => {
    try {
      const credential = auth.PhoneAuthProvider.credential(
        props.route.params.verificationId,
        value,
      );
      await auth().signInWithCredential(credential);
    } catch (err) {
      console.log('Error Occurred', err);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <View>
        <Text style={styles.title}>Verification</Text>
        <Text
          style={[
            authStyle.textStyle,
            {marginTop: '10%', textAlign: 'center'},
          ]}>
          Please enter the verification code recieved on your number
        </Text>
      </View>
      <CodeField
        ref={ref}
        {...propss}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={6}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <View style={{marginTop: 40}}>
        <TouchableOpacity style={commonStyle.buttonView} onPress={handleSubmit}>
          <Text style={commonStyle.buttonText}>{'Verify'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30, color: 'black', fontWeight: '500'},
  codeFieldRoot: {marginTop: 50},
  cell: {
    width: 50,
    height: 50,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#00000030',
    textAlign: 'center',
    color: 'black',
  },
  focusCell: {
    borderColor: '#000',
  },
});
