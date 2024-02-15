import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CommonStyles from '../config/CommonStyle';
import styles from '../config/RoutesConfigStyle';
import Images from '../config/Images';
import CardView from 'react-native-cardview';

type propsType = {
    onPress?(item: any, index: any): void,
    status?: boolean,
    item?: any,
    index?: any
}

function RoutesCard(props: propsType): React.JSX.Element {

    return (
        <TouchableOpacity activeOpacity={0.8}
            onPress={() => {
                props.status ? ( props.onPress ? props.onPress(props.item, props.index) : undefined ) : null;
            }}>
            <CardView style={styles.cardView}
                borderRadius={4}
                cardElevation={4}
                cornerRadius={4}>
                <View style={styles.mainView}>
                    <View style={styles.centerView}>
                        <View style={{ flexDirection: 'row' }}>
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={[
                                    CommonStyles.colors.imgStartColor,
                                    CommonStyles.colors.imgEndColor,
                                ]} >
                                <View style={styles.leftView}>
                                    <Image
                                        source={Images.profile.routes}
                                        style={styles.leftImg}
                                    />
                                </View>
                            </LinearGradient>
                        </View>
                    </View>
                    <View style={styles.flexView}>
                        <Text style={styles.txtTitle}>{props.item.title}</Text>
                        <Text style={styles.txtSubTitle}>Route Number : {props.item.subTitle}</Text>
                    </View>
                    {props.status ? (
                        <View style={styles.centerView}>
                            <Image source={Images.profile.right} style={styles.rightImg} />
                        </View>
                    ) : null}
                </View>
            </CardView>
        </TouchableOpacity>
    );
}

export default RoutesCard;

