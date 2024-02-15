import { StyleSheet } from "react-native";
import { responsiveWidth } from 'react-native-responsive-dimensions';
import CommonStyles from "./CommonStyle";

const HeaderTitleStyle = StyleSheet.create(
    {
        cardStyle: {
            height: 50,
            width:'100%',
            flexDirection:'row',
            paddingLeft: responsiveWidth(5),
            paddingRight: responsiveWidth(5),
            alignItems:'center'
          },
          titleText: {
            fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD,
            fontSize: 16,
            color: CommonStyles.colors.white,
            alignContent:'center',
            textAlign:'center',
            marginLeft: responsiveWidth(6),
            flex:1,
          },
          leftImg: {
            height: 18,
            width: 18,
            padding: responsiveWidth(4),
            //tintColor: AppStyles.colors.white,
          },
          plusImg : {
            height: 18,
            width: 18,
            padding: responsiveWidth(4),
          },
          homeImg: {
            height: 18,
            width: 18,
            padding: responsiveWidth(4),
            tintColor: CommonStyles.colors.greyDark,
          },
          syncImgGreen: {
            height: 25,
            width: 25,
            padding: responsiveWidth(6),
            tintColor: CommonStyles.colors.onlineGreen,
          },
          syncImgRed: {
            height: 25,
            width: 25,
            padding: responsiveWidth(6),
            tintColor: CommonStyles.colors.red,
          },
          landImage: {
            height: 50,
            width:'75%',
            flexDirection:'row',
            marginLeft: responsiveWidth(5),
            padding: responsiveWidth(5), 
            alignItems: 'center',
            justifyContent: 'center',
            
          },
          cartCountString: {
            fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD,
            fontSize: 12,
            color: CommonStyles.colors.white,
            textAlign:'center',
          },
          cartCircle: {
            width: 20,
            height: 20,
            marginRight: 1,
            borderRadius: 12.5,
            backgroundColor: CommonStyles.colors.accentColor,
            alignItems: 'center',
            justifyContent: 'center',
          },        
    }
);

export default HeaderTitleStyle;