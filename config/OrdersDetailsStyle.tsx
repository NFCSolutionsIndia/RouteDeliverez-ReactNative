import { StyleSheet } from "react-native"; 
import CommonStyles from '../config/CommonStyle';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

const OrdersDetailsStyle = StyleSheet.create(
    {
        mainView: {
            flex: 1,
            marginLeft: responsiveWidth(3),
            marginRight: responsiveWidth(3),
            marginTop: responsiveHeight(-5),
          },
          txtSubTitle: {
            fontFamily: CommonStyles.fonts.FONT_MEDIUM,
            fontSize: 14,
            color: CommonStyles.colors.greyDark,
            letterSpacing: -0.3,
            textAlign: 'left',
          },
          txtOrderHead: {
            fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD,
            fontSize: 13,
            color: CommonStyles.colors.greyDark,
            letterSpacing: -1,
            textAlign: 'left',
          },
          txtOrder: {
            fontFamily: CommonStyles.fonts.FONT_REGULAR,
            fontSize: 13,
            color: CommonStyles.colors.greyDark,
            letterSpacing: -1,
            textAlign: 'left',
          },
          txtBaseTitle: {
            width:90,
            fontFamily: CommonStyles.fonts.FONT_MEDIUM,
            fontSize: 14,
            color: CommonStyles.colors.greyDark,
            letterSpacing: -0.3,
            textAlign: 'left',
          },
          txtBaseSubTitle: {
            fontFamily: CommonStyles.fonts.FONT_REGULAR,
            fontSize: 14,
            color: CommonStyles.colors.greyMedium,
            letterSpacing: -0.3,
            textAlign: 'left',
            marginRight: responsiveWidth(25),
          },
          txtBold: {
            fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD,
            fontSize: 15,
            color: CommonStyles.colors.greyDark,
            letterSpacing: -0.3,
            textAlign: 'left',
          },
          txtStatus: {
            paddingTop: 4,
            justifyContent: 'flex-start',
            fontFamily: CommonStyles.fonts.FONT_MEDIUM,
            color: CommonStyles.colors.white,
            backgroundColor: CommonStyles.colors.themeColor,
            fontSize: 12,
            height: 25,
            width: 80,
            textAlign: 'center',
            borderRadius: 12.5,
          },
          txtTitle: {
            fontFamily: CommonStyles.fonts.FONT_REGULAR,
            fontSize: 14,
            color: CommonStyles.colors.greyMedium,
            letterSpacing: -0.3,
            textAlign: 'left',
            
          },
          linearGradient: {
            paddingLeft: responsiveWidth(4),
            paddingRight: responsiveWidth(4),
            height: responsiveHeight(20),
            width: responsiveWidth(100),
            paddingTop: responsiveHeight(5),
          },
          titleText: {
            fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD,
            fontSize: 18,
            color: CommonStyles.colors.white,
          },
          leftImg: {
            height: 18,
            width: 18,
            tintColor: CommonStyles.colors.white,
            padding: responsiveWidth(3),
            marginRight: responsiveWidth(3),
          },
          headerView: {
            flexDirection: 'row',
            alignItems: 'center',
          },
          cardView: {
            backgroundColor: CommonStyles.colors.white,
            margin: responsiveWidth(1),
          },
          viewFlex: {
            flex: 1,
            flexDirection: 'row',
          },
          marginFlex: {
            flex:1,
            padding: 10,
          },
    }
);

export default OrdersDetailsStyle;