import { StyleSheet } from "react-native"; 
import CommonStyles from '../config/CommonStyle';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

const RoutesConfigStyle = StyleSheet.create(
    {
        cardView: {
            backgroundColor: CommonStyles.colors.white,
            height: 72,
            marginLeft: responsiveWidth(1),
            marginRight: responsiveWidth(1),
            marginTop: responsiveWidth(1.5),
            marginBottom: responsiveWidth(1.5),
          },
          mainView: {
            height: '100%',
            flexDirection: 'row',
          },
          centerView: {
            justifyContent: 'center',
          },
          flexView: {
            marginLeft: responsiveWidth(4),
            flex: 1,
            justifyContent: 'center',
          },
          rightImg: {
            height: 15,
            width: 15,
            tintColor: CommonStyles.colors.grey,
            marginRight: responsiveWidth(3),
          },
          leftImg: {
            height: 25,
            width: 25,
            tintColor: CommonStyles.colors.white,
          },
          txtTitle: {
            fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD,
            fontSize: 16,
            color: CommonStyles.colors.greyDark,
            letterSpacing: -0.3,
            fontWeight: 'bold'
          },
          txtSubTitle: {
            fontFamily: CommonStyles.fonts.FONT_REGULAR,
            fontSize: 15,
            color: CommonStyles.colors.greyMedium,
            letterSpacing: -0.3,
          },
          leftView: {
            height: 72,
            width: 72,
            justifyContent: 'center',
            alignItems: 'center',
          }
    }
);

export default RoutesConfigStyle;