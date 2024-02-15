import React from 'react';
import { Text, View, Platform } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import styles from '../config/CreateOrderStyle'; 
import CommonStyles from '../config/CommonStyle';
import { OutlinedTextField } from 'rn-material-ui-textfield'; 

type propsType = {
    title?: string,
    placeholder?: string,
    edit?: boolean,
    editable?: boolean,
    price?: number,
    onChangeText?(txt: string): void,
    value?: string
}

function PopUp(props: propsType): React.JSX.Element {
 
    return (
        <View style={styles.evenSpaceView}>
            {props.edit ? (
                <View style={{ flex: 1, justifyContent: 'center', }}>
                    <OutlinedTextField
                       style = {{fontFamily:  CommonStyles.fonts.FONT_REGULAR}}
                       containerStyle = {{marginTop: 44}}
                       textColor={CommonStyles.colors.greyMedium}
                       labelFontSize={12}
                       fontSize = {15}
                       lineWidth={1}
                       activeLineWidth={1}
                       returnKeyType ='done'
                       keyboardType={Platform.OS === 'android' ? "numeric" : "number-pad"}
                       labelTextStyle={{ fontFamily: CommonStyles.fonts.FONT_REGULAR,paddingTop:2}}
                       autoCapitalize='none'
                       tintColor={CommonStyles.colors.themeColor}
                       placeHolder={props.placeholder}
                       label={props.placeholder}  
                       placeholderTextColor={CommonStyles.colors.grey}
                       autoFocus={false}
                       onChangeText={(txt: string) => props.onChangeText ? props.onChangeText(txt) : undefined } 
                       value={props.value} 
                       maxLength = {4} 
                       editable={props.editable}
                        />
                </View>
            ) : (
                <View style={{ justifyContent: 'flex-end', height: 45, flex: 1 }}>
                    <Text style={{ marginLeft: 0, width: responsiveWidth(25), fontFamily: CommonStyles.fonts.FONT_REGULAR, fontSize: 16 }}>
                        {props.title}
                    </Text>
                </View>
            )}

            <View style={{ justifyContent: 'flex-end', height: 45 }}>
                <Text style={{ marginRight: 0, width: responsiveWidth(25), fontFamily: CommonStyles.fonts.FONT_REGULAR, fontSize: 14, textAlign: 'center' }}>
                    {/* ${props.price.toFixed(2)} */}
                    ${props.price}
                </Text>
            </View>

        </View>
    );
}

export default PopUp;
