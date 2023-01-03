import {
    StyleSheet,
    Dimensions
  } from "react-native";
  import colors from "./colors";
  const {
    width,
    height
  } = Dimensions.get("window");
  
const commonStyle = StyleSheet.create({
    categaryBarItem: {
      height: height * 0.033,
      backgroundColor: colors.WHITE,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 11,
      paddingLeft: 9,
      paddingRight: 9,
    },
    categaryBarItemActive: {
      height: height * 0.045,
      borderRadius: 11,
      backgroundColor: colors.BLACK,
      paddingLeft: 16,
      paddingRight: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 11,
    },
    categaryBarItemText: {
      fontFamily: 'Poppins_Medium',
      fontSize: width * 0.032,
      color: colors.LIGHT_GREY,
      marginLeft: 7,
      textTransform: 'capitalize'
    },
    categaryBarItemTextActive: {
      fontSize: width * 0.038,
      color: colors.WHITE,
      marginLeft: 10,
      textTransform: 'capitalize'
    },
    rowStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    horizontalListContainer: {
      marginStart: 10,
      marginBottom: 5,
      marginTop: 5,
      // backgroundColor:colors.BACKGROUND_COMMON
    },
    flatListHorizontalContentContainerStyle: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor:colors.BACKGROUND_COMMON
    },
    topHeader: {
      height: height * 0.10,
      flexDirection: 'row',
      alignItems: 'center',
      marginStart: 20,
      marginEnd: 20,
      alignItems: 'center'
    },
    headerRow: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    },
    headerRightItem: {
      flex: 1,
      flexDirection: 'row',
      alignItems:
        'center',
      justifyContent: 'flex-end'
    },
    headerMarginLeft: {
      marginLeft: 18
    },
    headerBlack: {
      backgroundColor: colors.BLACK,
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
      height: height * 0.10,
    },
    topHeaderBlack: {
      height: height * 0.10,
      flexDirection: 'row',
      alignItems: 'center',
      marginStart: 20,
      marginEnd: 20,
    },
    logoTextStyle: {
      fontSize: width * 0.075,
      fontFamily: 'Poppins_SemiBoldItalic',
      color: colors.WHITE,
      marginLeft: 18,
      flex: 1,
    },
    searchView: {
      backgroundColor: colors.WHITE,
      height: 40,
      width: 200,
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 12,
      paddingLeft: 8,
      paddingRight: 16,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginEnd: 20
    },
    searchSection: {
      backgroundColor: colors.WHITE,
      flex: 1,
      height: height * 0.050,
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 12,
      flex: 1,
      paddingLeft: 8,
      paddingRight: 16,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
    },
    headerSearch: {
      flex: 1,
      height: height * 0.050,
      fontSize: width * 0.040,
      color: colors.LIGHT_GREY,
    },
    searchIcon: {
      alignSelf: 'center',
      marginStart: 5
    },
    profileSmileIcon: {
      height: height * 0.035,
      width: height * 0.035,
      marginEnd: 15
    },
    profileSmileIcononHeaderAtRight: {
      height: height * 0.035,
      width: height * 0.035,
      marginEnd: 15,
      borderRadius: 100 / 2,
      resizeMode: 'cover'
    },
    header: {
      backgroundColor: colors.WHITE,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      paddingBottom: 10,
    },
    logoutView: {
      backgroundColor: colors.BLACK,
      height: 50,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center'
    },
    logoutText: {
      fontWeight: 'bold',
      fontSize: width * 0.050,
      color: colors.WHITE
    },
    headerLeft: {
      marginLeft: 15,
    },
    commonTextStyle: {
      fontSize: width * 0.040,
      fontWeight: 'bold',
      color: colors.BLACK
    },
    commonTextInputParentStyle: {
      backgroundColor: colors.WHITE,
      height: height * 0.07,
      width: width * 0.86,
      borderRadius: 12,
      marginTop: 10,
      paddingHorizontal: 20,
      // shadowColor: 'rgba(0,0,0,0.4)',
      // shadowOffset: {
      //   width: 1,
      //   height: 5,
      // },
      // shadowOpacity: 0.34,
      // shadowRadius: 6.27,
      // elevation: 10,
    },
    commonTextInputStyle: {
      fontFamily: 'Poppins_Medium',
      fontSize: width * 0.040,
      color: colors.BLACK,
      height: height * 0.07,
    },
    commonUpdateTextInputStyle: {
      fontFamily: 'Poppins_Medium',
      fontSize: width * 0.040,
      color: colors.BLACK,
      width:'100%',
      marginTop:10,
      minHeight:60,
      lineHeight:20,
      padding:10,
      paddingTop:10,
      borderRadius: 5,
      backgroundColor: colors.WHITE    
    },
    buttonView: {
      backgroundColor: colors.BLACK,
      height: height * 0.065,
      width: width * 0.86,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonText: {
      fontSize: width * 0.050,
      color: colors.WHITE,
      fontFamily: 'Poppins_Medium',
    },
    phoneNumberContainerView: {
      height: height * 0.07,
      borderRadius: 12,
      marginTop: 10,
      justifyContent: 'center',
      alignSelf: 'center',
      color: colors.BLACK,
      width: width * 0.86,
    },
    phoneNumberTextContainerView: {
      height: height * 0.07,
      backgroundColor: colors.WHITE,
      borderTopRightRadius: 12,
      borderBottomRightRadius: 12,
      justifyContent: 'center',
      fontFamily: 'Poppins_Regular',
      fontSize: width * 0.040,
      color: colors.GREY_1,
    },
    phoneNumberTextInputView: {
      height: height * 0.07,
      fontSize: width * 0.043,
      justifyContent: 'center',
      alignSelf: 'center',
      marginLeft:10,
      fontFamily: 'Poppins_Medium',
      color: colors.BLACK
    },
    legalModuleHeaderStyle: {
      backgroundColor: colors.WHITE,
      height: 60,
      shadowOpacity: .1,
      shadowRadius: 2,
      elevation: 20,
      borderBottomWidth: 2,
      // position:'absolute',
      // right:100
    },
    commonSmallActivityIndicatorStyle: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
    },
    listEmptyView:{
      marginTop:'85%', 
      justifyContent:'center', 
      alignItems:'center', 
      alignSelf:'center'
    },
    listEmptyText:{
      color:colors.GREY_1, 
      fontSize: width * 0.045,
    }
  
  
  });

  export default commonStyle