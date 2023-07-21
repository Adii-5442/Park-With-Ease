import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import colors from '../../src/styles/colors';

export const authStyle = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: colors.OFF_WHITE,
  },
  scrollViewStyle: {
    padding: 26,
    flex: 0.9,
    backgroundColor: colors.OFF_WHITE,
  },
  marginBottomView: {
    marginTop: 50,
  },
  logoStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginTop: {
    marginTop: 20,
  },
  viewParentStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    // marginBottom:100
  },
  viewParentStyleForgotPassword: {
    flexDirection: 'row',
    justifyContent: 'center',
    // marginTop: 10 ,
    // marginBottom:100
  },
  textStyle: {
    fontSize: width * 0.04,
    color: colors.BLACK,
  },
  boldTextStyle: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: colors.BLACK,
    marginStart: 8,
  },
  forgotPasswordStyle: {
    fontSize: width * 0.035,
    color: colors.BLACK,
    marginTop: 10,
    alignSelf: 'flex-end',

    marginEnd: 8,
  },
  skipText: {
    fontSize: width * 0.045,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  skipParentView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  skipArrow: {marginTop: 5},
});
