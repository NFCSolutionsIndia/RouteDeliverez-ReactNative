import React from 'react';
import { Text, View, ImageSourcePropType, Image, TouchableOpacity } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import styles from '../config/MorecardStyle';
import Images from '../config/Images';
import CommonStyles from '../config/CommonStyle';
import CardView from 'react-native-cardview';

type propsType = {
    onPress(): void,
    img: string,
    rgb: string,
    color: string,
    title: string
}

function MoreCard(props: propsType): React.JSX.Element {

    let switchValue: string = props.title;
    let switchText: ImageSourcePropType;
    
    switch (switchValue) {
        case CommonStyles.strings.crate_order:
            switchText = Images.profile.order;
            break;
        case CommonStyles.strings.more_orders:
            switchText = Images.profile.order;
            break;
        case CommonStyles.strings.more_routes:
            switchText = Images.profile.routes;
            break;
        case CommonStyles.strings.more_stores:
            switchText = Images.profile.stores;
            break;
        case CommonStyles.strings.more_products:
            switchText = Images.profile.product;
            break;
        case CommonStyles.strings.more_transfers:
            switchText = Images.profile.transfers;
            break;
        case CommonStyles.strings.more_reports:
            switchText = Images.profile.report;
            break;
        case CommonStyles.strings.logout:
            switchText = Images.profile.profileIcon;
            break;
        default:
            switchText = Images.profile.routes;
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => props.onPress()}>
            <CardView
                style={styles.cardView}
                borderRadius={4}
                cardElevation={4}
                cornerRadius={4} >
                <View style={styles.cardStyle}>
                    <View style={styles.mainView}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ width: 50, flexDirection: 'row' }}>
                                <View
                                    style={{
                                        height: 35,
                                        width: 35,
                                        marginLeft: responsiveWidth(4),
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: props.rgb,
                                        borderRadius: 17.5,
                                    }}>
                                    <Image
                                        source={switchText}
                                        style={styles.leftImg}
                                        tintColor={props.color}
                                    />
                                </View>
                            </View>
                            <Text style={styles.txtSubTitle}>{props.title}</Text>
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Image source={Images.profile.right} style={styles.rightImg} />
                        </View>
                    </View>
                </View>
            </CardView>
        </TouchableOpacity>
    );
}

export default MoreCard;
