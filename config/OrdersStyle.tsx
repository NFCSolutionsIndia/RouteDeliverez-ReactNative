import { StyleSheet } from "react-native"; 
import CommonStyles from '../config/CommonStyle';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

const OrdersStyle = StyleSheet.create(
    {
        container: {
          flex: 1,
          backgroundColor: CommonStyles.colors.lightWhite,
        },
        mainView: {
          flex: 1,
         
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
        }
      }
);

export default OrdersStyle;