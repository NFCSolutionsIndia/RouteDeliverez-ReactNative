import { StyleSheet } from "react-native"; 
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import CommonStyles from "./CommonStyle";
  
const SignInStyle = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: CommonStyles.colors.white
        },
        img: {
            height: responsiveHeight(12.5),
            width: responsiveHeight(12.5),
            tintColor: CommonStyles.colors.white,
            marginRight: responsiveWidth(3),
        },
        titleStyle: {
            fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD,
            fontSize: 18,
            color: CommonStyles.colors.white,
            marginLeft: 5,
        },
        viewStyle: {
            padding: responsiveWidth(8),
            marginTop: responsiveHeight(5),
        },
        view: {
            height: responsiveHeight(25),
            flexDirection: 'row',
            paddingLeft: responsiveWidth(5)
        },
        curveView: {
            backgroundColor: '#fff',
            flex: 1,
            paddingTop: 20,
            elevation: 2,
            paddingLeft: responsiveWidth(3),
            paddingRight: responsiveWidth(3),
            borderTopStartRadius: 30,
            marginTop: responsiveHeight(-6),
        },
        viewFlex: {
            flex: 1,
            flexDirection: 'row',
        },
        leftView: {
            flex: 1,
            marginTop: responsiveHeight(8)
        },
        rightView: {
            flex: 1,
            alignItems: 'flex-end',
            marginTop: responsiveHeight(3),
        }, 
        MarginResponsiveWidth4:
        {
            margin: responsiveWidth(4)
        },
        marginFlex: {
            flex:1,
            padding: 10,
        },
    }
);

export default SignInStyle;