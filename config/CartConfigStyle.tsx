import { StyleSheet } from "react-native";
import { responsiveWidth } from 'react-native-responsive-dimensions';
import CommonStyles from "./CommonStyle";

const CartConfigStyle = StyleSheet.create(
    {
        cardView: {
            backgroundColor: CommonStyles.colors.white,
            height: 160,
            padding: 5,
            margin: responsiveWidth(2),
          },
          mainView: {
            height: '100%',
          },
          subView: {
            flexDirection: 'row',
          },
          titleTxt: {
            fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD,
            fontSize: 16,
            color: CommonStyles.colors.greyDark,
          },
          editTxt: {
            fontFamily: CommonStyles.fonts.FONT_MEDIUM,
            fontSize: 15,
            color: CommonStyles.colors.white,
            justifyContent: 'center',
            marginLeft: responsiveWidth(2),
          },
          evenSpaceView: {
            height: 22,
            width: '100%',
            marginTop: 2,
            flexDirection: 'row',
            alignItems: 'center',
          },
          centerView: {
            flex: 1,
            height: 40,
            marginTop:10,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          },
          flexView: {
            marginLeft: responsiveWidth(1),
            flex: 1,
          },
          leftImg: {
            height: 90,
            width: 90,
            resizeMode: 'contain',
            marginRight: responsiveWidth(2)
          },
          editImg: {
            height: 20,
            width: 20,
            tintColor:CommonStyles.colors.white
          },
          horView: {
            height: 0.5,
            marginTop: 8,
            backgroundColor: '#dadada',
            flexDirection:'row'
          },
          verView: {
            width: 0.5,
            height: 35,
            marginTop: 5,
            backgroundColor: '#dadada',
          },
          subFlexView: {
            height: 35,
            width:100,
            borderRadius:4,
            backgroundColor:CommonStyles.colors.orange,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginLeft: responsiveWidth(2),
            marginRight: responsiveWidth(2),
          },
          subFlexView1: {
            height: 35,
            width:100,
            borderRadius:4,
            backgroundColor:CommonStyles.colors.green,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginLeft: responsiveWidth(2),
            marginRight: responsiveWidth(2),
          },
    }
);

export default CartConfigStyle;