import { StyleSheet } from "react-native";
import CommonStyles from '../config/CommonStyle';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

const OrderConfigStyle = StyleSheet.create(
    {
        cardView: {
            backgroundColor: CommonStyles.colors.white,
            height: 96,
            margin: responsiveWidth(2),
        },
        mainView: {
            height: '100%',
            flexDirection: 'row',
        },
        centerView: {
            justifyContent: 'center',
        },
        flexView: {
            marginLeft: responsiveWidth(5),
            flex: 1,
            justifyContent: 'center',
        },
        rightImg: {
            height: 15,
            width: 15,
            justifyContent: 'flex-end',
            alignSelf: 'flex-end',
            tintColor: CommonStyles.colors.grey,
            marginRight: responsiveWidth(4),
            position: 'absolute',
            right: 5,
            top: 5,
           // marginRight: 10,
        },
        leftImg: {
            height: 18,
            width: 18,
            tintColor: CommonStyles.colors.greyMedium,
            marginLeft: responsiveWidth(4),
        },
        txtTitle: {
            fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD,
            fontSize: 15,
            color: CommonStyles.colors.greyDark,
            letterSpacing: -0.3,
            fontWeight: 'bold'
        },
        txtSubTitle: {
            fontFamily: CommonStyles.fonts.FONT_REGULAR,
            fontSize: 14,
            marginTop: 2,
            color: CommonStyles.colors.greyMedium,
            letterSpacing: -0.3,
        },
        txtAmount: {
            fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD,
            marginTop: 2,
            fontSize: 15,
            color: CommonStyles.colors.greyDark,
            fontWeight: 'bold'
        },
        txtDate: {
            position: 'absolute',
            right: 5,
            bottom: 8,
            marginRight: responsiveWidth(10),
            paddingTop: 4,
            alignSelf: 'flex-end',
            justifyContent: 'flex-end',
            fontFamily: CommonStyles.fonts.FONT_REGULAR,
            color: CommonStyles.colors.greyDark,
            fontSize: 12,
            height: 25,
            textAlign: 'center',
        },
        txtStatus: {
            position: 'absolute',
            right: 5,
            marginRight: responsiveWidth(10),
            justifyContent: 'flex-end',
            alignSelf: 'flex-end',
            fontFamily: CommonStyles.fonts.FONT_LIGHT,
            color: CommonStyles.colors.greyDark,
            fontSize: 12,
            marginTop: 2,
          //  color: CommonStyles.colors.greyMedium,
            letterSpacing: -0.3,
        }
    }
);

export default OrderConfigStyle;