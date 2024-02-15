import { StyleSheet } from "react-native";
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import CommonStyles from "./CommonStyle";

const CreateOrderConfirmationStyle = StyleSheet.create(
    {
        mainView: {
            flex: 1,
            marginLeft: responsiveWidth(3),
            marginRight: responsiveWidth(3),
          },
          txtSubTitle: {
            fontFamily: CommonStyles.fonts.FONT_MEDIUM,
            fontSize: 15,
            color: CommonStyles.colors.greyDark,
            textAlign: 'left',
            marginBottom:5,
            marginLeft: responsiveWidth(2)
          },
          viewItems: {
            marginBottom: 72,
          },
          bottomView: {
            position: 'absolute',
            bottom: 0,
            marginBottom:8,
            alignSelf:'center'
          },
          view: {
            flex: 1,
            paddingTop: responsiveWidth(4),
            alignItems: 'center',
          },  
          img: {
            width: responsiveWidth(20),
            height: responsiveWidth(20),
        },
        storeNameView: {
          height: 35,
          width: '100%',
          justifyContent: 'center',
          backgroundColor:CommonStyles.colors.white
        },
        storeNameString: {
          fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD,
          fontSize: 15,
          color: CommonStyles.colors.greyMedium,
          textAlign:'center',
        },
        productCount: {
          fontFamily: CommonStyles.fonts.FONT_REGULAR,
          fontSize: 14,
          height:35,
          color: CommonStyles.colors.greyDark,
          paddingTop:6,
          textAlign:'right',
          marginRight: responsiveWidth(4)
        },
        viewFlex: {
          flexDirection: 'row',
        },
        marginFlex: {
          flex:1,
          padding: 10,
          marginTop: responsiveHeight(5)
        },
        subFlexView1: {
          height: 45,
          width:150,
          borderRadius:4,
          backgroundColor:CommonStyles.colors.white,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          marginLeft: responsiveWidth(2),
          marginRight: responsiveWidth(2),
        },
        
         editImg: {
          height: 20,
          width: 20,
          tintColor:CommonStyles.colors.themeColor
        },
        
          editTxt: {
          fontFamily: CommonStyles.fonts.FONT_MEDIUM,
          fontSize: 15,
          color: CommonStyles.colors.themeColor,
          justifyContent: 'center',
          marginLeft: responsiveWidth(2),
          //fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD,
        },
    }
);

export default CreateOrderConfirmationStyle;