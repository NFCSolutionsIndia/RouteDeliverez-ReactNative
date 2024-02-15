import React from 'react';
import { Text, View } from 'react-native'; 
import CommonStyles from '../config/CommonStyle';
import styles from '../config/CartConfigStyle'; 
import { responsiveWidth } from 'react-native-responsive-dimensions';

type propsType = {
    title?: string,
    qty?: string,
    price?: string
}

function CardSBD(props: propsType): React.JSX.Element {
    return (
        <View style={styles.evenSpaceView}>
            <Text style={{ marginLeft: 0, fontSize: 14, color: CommonStyles.colors.greyDark, width: responsiveWidth(40), fontFamily: CommonStyles.fonts.FONT_REGULAR }}>
                {props.title}
            </Text>
            <Text style={{ fontSize: 14, textAlign: 'right', color: CommonStyles.colors.greyDark, width: responsiveWidth(20), fontFamily: CommonStyles.fonts.FONT_REGULAR }}>
                {props.qty}
            </Text>
            <Text style={{ marginRight: 0, fontSize: 15, textAlign: 'right', color: CommonStyles.colors.greyDark, width: responsiveWidth(30), fontFamily: CommonStyles.fonts.FONT_MEDIUM }}>
                ${props.price}
            </Text>
        </View>
    );
}

export default CardSBD;

