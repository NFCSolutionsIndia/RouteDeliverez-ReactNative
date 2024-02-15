import { StyleSheet } from "react-native";
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import CommonStyles from "./CommonStyle";

const MoreStyle = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#f4f4f4'
        },
        mainView: {
            flex: 1,
            marginTop: responsiveHeight(2),

        },
        lineView: {
            height: 0.5,
            backgroundColor: CommonStyles.colors.lightGreyCOlor
        },
        linearGradient: {
            paddingLeft: responsiveWidth(4),
            paddingRight: responsiveWidth(4),
            height: responsiveHeight(20),
            width: responsiveWidth(100),
        },
        titleText: {
            fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD,
            fontSize: 16,
            color: CommonStyles.colors.white,
        },
        titleNormal: {
            fontFamily: CommonStyles.fonts.FONT_REGULAR,
            fontSize: 14,
            color: CommonStyles.colors.white,
            //textTransform:'lowercase',
        },
        titleLowercase: {
            fontFamily: CommonStyles.fonts.FONT_REGULAR,
            fontSize: 14,
            color: CommonStyles.colors.white,
            textTransform: 'lowercase',
        }
    }
);

export default MoreStyle;