import { StyleSheet } from "react-native";
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import CommonStyles from "./CommonStyle";

const CreateOrderStyle = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: CommonStyles.colors.lightWhite,
        },
        mainView: {
            flex: 1,
        },
        messageView: {
            height: 60,
            width: '100%',
            marginTop: responsiveHeight(30),
            alignItems: 'center',
        },
        messageString: {
            textAlign: 'center',
            fontFamily: CommonStyles.fonts.FONT_REGULAR,
            fontSize: 16,
        },
        storeNameView: {
            flex: 1,
            fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD,
            fontSize: 15,
            color: CommonStyles.colors.greyDark,
            letterSpacing: -0.3,
        },
        marginFlex: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            letterSpacing: -0.3,
        },
        storeNameString: {
            fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD,
            fontSize: 15,
            color: CommonStyles.colors.greyMedium,
            textAlign: 'left',
            paddingTop: 6,
            marginLeft: responsiveWidth(4),
            fontWeight: 'bold'
        },
        productCount: {
            fontFamily: CommonStyles.fonts.FONT_REGULAR,
            fontSize: 14,
            height: 35,
            color: CommonStyles.colors.greyDark,
            paddingTop: 6,
            textAlign: 'right',
            marginRight: responsiveWidth(4),
        },
        cardView: {
            backgroundColor: CommonStyles.colors.white,
            height: '100%',
            padding: 8,
            alignItems: 'center',
            flexDirection: 'row',
        },
        plusButton: {
            height: 50,
            width: 50,
            marginRight: 5,
            justifyContent: 'center',
            alignItems: 'center',
        },
        evenSpaceView: {
            height: 55,
            width: '100%',
            marginTop: 4,
            flexDirection: 'row',
            alignItems: 'center',
        },
        bottomView: {
            position: 'absolute',
            flexDirection: 'row',
            bottom: 10,
            backgroundColor: 'white',
            width: '100%',
            height: 70,
            paddingTop: 5,
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
        cartImg: {
            marginTop: -2,
            marginLeft: 6,
            width: 25,
            height: 25,
            tintColor: CommonStyles.colors.white,
        },
        cartCircle: {
            width: 25,
            height: 25,
            marginRight: 16,
            borderRadius: 12.5,
            backgroundColor: CommonStyles.colors.white,
            alignItems: 'center',
            justifyContent: 'center',
        },
        circle: {
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: CommonStyles.colors.themeColor,
            alignItems: 'center',
            justifyContent: 'center',
        },
        widthView: {
            alignItems: 'center',
            justifyContent: 'center',
            width: responsiveWidth(30),
        },
        viewStyle: {
            justifyContent: 'center',
            flex: 1,
            padding: responsiveHeight(1),
        },
        textStyle: {
            padding: 10,
        },
        textInputStyle: {
            height: 35,
            width: 250,
            borderColor: '#009688',
        },
        dialogPosition: {
            justifyContent: 'flex-start',
            marginTop: responsiveWidth(16),
        },
        searchStyle: {
            marginLeft: responsiveWidth(2),
            marginRight: responsiveWidth(2),
            borderColor: 'gray',
            borderRadius: 5,
            borderWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        closeButtonParent: {
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 5,
        },
        closeButton: {
            height: 16,
            marginRight: responsiveWidth(2),
            width: 16,
        },
        searchButton: {
            marginLeft: responsiveWidth(4),
            height: 18,
            width: 18,
        },
        viewRow: {
            flexDirection: 'row',
        }
    }
);

export default CreateOrderStyle;