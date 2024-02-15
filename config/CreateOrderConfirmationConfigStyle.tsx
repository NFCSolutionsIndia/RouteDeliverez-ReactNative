import { StyleSheet } from "react-native";
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import CommonStyles from "./CommonStyle";

const CreateOrderConfirmationConfigStyle = StyleSheet.create(
    {
        cardStyle: {
            backgroundColor: CommonStyles.colors.white,
            marginLeft: responsiveWidth(4),
            marginRight: responsiveWidth(4),
            marginTop: responsiveHeight(1.5)
        },
        txtSubTitle: {
            fontFamily: CommonStyles.fonts.FONT_MEDIUM,
            fontSize: 15,
            color: CommonStyles.colors.greyDark,
            letterSpacing: -0.3,
            textAlign: 'left',
        },

        txtTableTitle: {
            fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD,
            fontSize: 16,
            color: CommonStyles.colors.greyDark,
            letterSpacing: -0.3,
            textAlign: 'left',
        },

        txtTitle: {
            fontFamily: CommonStyles.fonts.FONT_MEDIUM,
            fontSize: 15,
            color: CommonStyles.colors.greyMedium,
            letterSpacing: -0.3,
            textAlign: 'left',
        },
        viewHeader: {
            padding: 5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: CommonStyles.colors.lightGreyCOlor,
            flexDirection: 'row'
        },
        itemHeader: {
            padding: 5,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row'
        },
        lineView: {
            height: 0.5,
            backgroundColor: CommonStyles.colors.inactiveGreyColor,
        },
        viewFlex: {
            flex: 2,
        },
        viewFlex1: {
            flex: 2,
        },
        viewRight: {
            flex: 1.9,
            alignItems: 'flex-end'
        }
    }
);

export default CreateOrderConfirmationConfigStyle;