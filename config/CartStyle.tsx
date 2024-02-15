import { StyleSheet } from "react-native";
import { responsiveWidth } from 'react-native-responsive-dimensions';
import CommonStyles from "./CommonStyle";

const CartStyle = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: CommonStyles.colors.lightWhite,
        },
        mainView: {
            flex: 1,
        },
        buttonView: {
            height: 55,
            position: 'absolute',
            bottom: 20,
            width: '100%',
            backgroundColor: CommonStyles.colors.themeColor,
        },
        button: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        buttonString: {
            fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD,
            color: CommonStyles.colors.white,
            fontSize: 18,
        },
        bottomView: {
            position: 'absolute',
            bottom: 0,
            marginBottom: 8,
            alignSelf: 'center'
        },
        storeNameView: {
            height: 35,
            width: '100%',
            justifyContent: 'center',
            backgroundColor: CommonStyles.colors.white
        },
        storeNameString: {
            fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD,
            fontSize: 15,
            color: CommonStyles.colors.greyMedium,
            textAlign: 'center',
        },
        productCount: {
            fontFamily: CommonStyles.fonts.FONT_REGULAR,
            fontSize: 14,
            height: 35,
            color: CommonStyles.colors.greyDark,
            paddingTop: 6,
            textAlign: 'right',
            marginRight: responsiveWidth(4)
        },
        dialogueTitle: {
            fontFamily: CommonStyles.fonts.FONT_MEDIUM,
            fontSize: 15,
            color: CommonStyles.colors.greyDark,
        },
        dialogueBottom: {
            fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD,
            fontSize: 15,
            color: CommonStyles.colors.themeColor,
        },
        dialogPosition: {
            justifyContent: 'flex-start',
            marginTop: responsiveWidth(16),
        },
    }
);

export default CartStyle;