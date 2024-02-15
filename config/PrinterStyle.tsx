import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { StyleSheet } from 'react-native';
import CommonStyles from '../config/CommonStyle';

const PrinterStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CommonStyles.colors.lightWhite,
      },
      mainView: {
        flex: 1,
        alignContent: 'center',
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
        fontSize: 15,
        alignSelf: 'center',
        color: CommonStyles.colors.black,
        marginTop: 20,
        marginLeft: 12,
      },
      cardView: {
        backgroundColor: CommonStyles.colors.white,
        height: 72,
        margin: responsiveWidth(2),
      },
      marginFlex: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
      },
      subFlexView1: {
        height: 45,
        width: 150,
        borderRadius: 4,
        backgroundColor: CommonStyles.colors.themeColor,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: responsiveWidth(2),
        marginRight: responsiveWidth(2),
      },
      editImg: {
        height: 20,
        width: 20,
        tintColor: CommonStyles.colors.white,
      },
      editTxt: {
        fontFamily: CommonStyles.fonts.FONT_MEDIUM,
        fontSize: 15,
        color: CommonStyles.colors.white,
        justifyContent: 'center',
        marginLeft: responsiveWidth(2),
        //fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD,
      }
  });

export default PrinterStyle;
