import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CommonStyles from '../config/CommonStyle';
import styles from '../config/StoreConfigStyle';
import Images from '../config/Images';
import CardView from 'react-native-cardview';

type propsType = {
    onPress?(item: any, index: any): void,
    status?: boolean,
    item?: any,
    index?: any
}

function StoreCard(props: propsType): React.JSX.Element {

    return (
        <TouchableOpacity activeOpacity={0.8}
            onPress={() => {
                props.onPress ? props.onPress(props.item, props.index) : undefined;
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
                                        source={Images.profile.stores}
                                        style={styles.leftImg}
                                    />
                                </View>
                            </LinearGradient>
                        </View>
                    </View>
                    <View style={styles.flexView}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.txtTitle}>{props.item.title}
                            </Text>
                            <Text style={{ textAlign: 'right', flex: 1 }}>
                                {props.item.number}
                            </Text>
                        </View>
                        <Text numberOfLines={3} style={styles.txtSubTitle}>{props.item.subTitle}</Text>
                        <Text style={styles.txtSubTitle}>{props.item.phone}</Text>
                    </View>
                    <View style={styles.centerView}>
                        <Image source={Images.profile.right} style={styles.rightImg} />
                    </View>
                </View>
            </CardView>
        </TouchableOpacity>
    );
}

export default StoreCard;

