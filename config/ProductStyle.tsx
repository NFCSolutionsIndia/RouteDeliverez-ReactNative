import { StyleSheet } from "react-native"; 
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

const ProductStyle = StyleSheet.create(
    {
        mainView: {
            flex: 1,
          },
          searchStyle: {
            marginLeft: responsiveWidth(4),
            marginRight: responsiveWidth(4),
            borderColor: 'gray',
            borderRadius: 5,
            borderWidth: 1,
            marginTop: responsiveWidth(1),
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
            width: 16,
            marginRight: responsiveWidth(2),
          },
          searchButton: {
            marginLeft: responsiveWidth(4),
            height: 18,
            width: 18,
          },
          textInputStyle: {
            height: 40,
            width : 250, 
            borderColor: '#009688',
          },
          viewFlex: { 
            flexDirection: 'row',
          },
          marginFlex: {
            flex:1,
          }
    }
);

export default ProductStyle;