import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { StyleSheet } from 'react-native';
import CommonStyles from '../config/CommonStyle';

const ProductCardStyle = StyleSheet.create({
    cardView: {
      backgroundColor: CommonStyles.colors.lightGreyCOlor,
      height: 80,    
      padding: responsiveWidth(3), 
      margin: responsiveWidth(2),
    },
    mainView: {
      height: '100%',
      flexDirection: 'row',
    },
    centerView: {
      justifyContent: 'flex-end',
      marginBottom: 10,
    },
    flexView: {
      marginLeft: responsiveWidth(0),
      flex: 1,
      justifyContent: 'center',
    },
    rightImg: {
      height: 15,
      width: 15,
      bottom: 0,
      tintColor: CommonStyles.colors.grey,
      marginRight: responsiveWidth(4),
      marginLeft: responsiveWidth(2),
    },
    leftImg: {
      height: 90,
      width: 90,
      marginTop: 10,
      resizeMode: 'contain',
      marginRight: responsiveWidth(2),
    },
    txtTitle: {
      fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD,
      fontSize: 15,
      color: CommonStyles.colors.greyDark,
      letterSpacing: -0.3,
      fontWeight: 'bold'
    },
    txtSubTitle: {
      fontFamily: CommonStyles.fonts.FONT_REGULAR,
      fontSize: 12,
      color: CommonStyles.colors.grey,
      letterSpacing: -0.3,
    },
    txtSubQty: {
      fontFamily: CommonStyles.fonts.FONT_REGULAR,
      fontSize: 11,
      color: CommonStyles.colors.grey,
      letterSpacing: -0.3,
    },
    txtPrice: {
      fontFamily: CommonStyles.fonts.FONT_BOLD,
      fontSize: 14,
      color: CommonStyles.colors.greyMedium,
      letterSpacing: -0.3,
      fontWeight: 'bold'
    },
    leftView: {
      height: 30,
      width: 30,
      marginLeft: responsiveWidth(3),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: CommonStyles.colors.yellow,
      borderRadius: 15,
    },
    viewRow: {
      flexDirection: 'row',
    },
    marginFlex: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end', 
      letterSpacing: -0.3,
    },
  });

export default ProductCardStyle;
