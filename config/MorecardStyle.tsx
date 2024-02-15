import { StyleSheet } from "react-native";
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import CommonStyles from "./CommonStyle";

const MorecardStyle = StyleSheet.create(
    {
        cardStyle: {
            borderRadius: 3,
            height: 45,
            justifyContent: 'center',
          },
          cardView: {
            backgroundColor: CommonStyles.colors.white, 
            margin: responsiveWidth(1),
          },
          mainView: {
            flexDirection: 'row',
            justifyContent: 'center',
          },
          txtSubTitle: {
            fontWeight: 'bold',
            fontFamily: CommonStyles.fonts.FONT_MEDIUM,
            fontSize: 15,
            alignSelf:'center',
            color: CommonStyles.colors.greyDark,
            marginLeft: responsiveWidth(5),
          },
          rightImg: {
            height: 15,
            width: 15,
            tintColor:CommonStyles.colors.grey,
            marginRight: responsiveWidth(4),
          },
          leftImg: {
            height: 18,
            width: 18,
            justifyContent: 'center',
            alignItems:'center',
          },
          circule: {
            height: 25,
            width: 25,
            marginLeft:responsiveWidth(4),
            justifyContent:'center'
          }
    }
);

export default MorecardStyle;