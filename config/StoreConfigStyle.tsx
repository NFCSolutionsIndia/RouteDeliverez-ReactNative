import { StyleSheet } from "react-native"; 
import { responsiveWidth } from 'react-native-responsive-dimensions'; 
import CommonStyles from "./CommonStyle";
  
const StoreConfigStyle = StyleSheet.create(
    {
        cardView : {
            backgroundColor: CommonStyles.colors.white,
            height: 110 ,
            marginLeft: responsiveWidth(1),
            marginRight: responsiveWidth(1),
            marginTop: responsiveWidth(1.5),
            marginBottom: responsiveWidth(1.5),
        
          },
          mainView : {
            height: '100%',
            flexDirection: 'row',
          },
          centerView : {
            justifyContent: 'center',
          },
          flexView: {
            marginLeft: responsiveWidth(4),
            flex: 1,
            justifyContent: 'center',
            paddingBottom:5,
            paddingTop:5
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
            fontSize: 14,
            color: CommonStyles.colors.greyMedium,
            letterSpacing: -0.3,
          },
          leftView: {
            height: 110,
            width: 60,
            justifyContent: 'center',
            alignItems: 'center',
          },
    }
);

export default StoreConfigStyle;