import { StyleSheet } from "react-native"; 
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'; 
  
const StoresStyle = StyleSheet.create(
    {
        mainView: {
            width: responsiveWidth(100),
            height: responsiveHeight(100),
          },
    }
);

export default StoresStyle;