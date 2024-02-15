import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../config/Images';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import CommonStyles from '../config/CommonStyle';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../config/CreateOrderConfirmationStyle';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { responsiveHeight } from 'react-native-responsive-dimensions';

type propsType = {
    odr?: any
}

function OrderSuccess(props: propsType): React.JSX.Element {

    console.log('Order_Id', props.odr);

    const orderState = useSelector((state: RootState) => state.order);

    const dispatchs = useDispatch();
    const navigation = useNavigation();
    const route = useRoute();

    const goBack = () => {
        navigation.goBack();
    }

    const done_clicked = async () => {
        navigation.navigate(({ key: 'PrinterScreen', name: 'PrinterScreen', params: { odr: props.odr, text: '', data: '' } }) as never);
    }

    const next_clicked = async () => {
        navigation.navigate(({ key: 'RoutesScreen', name: 'RoutesScreen', params: { createOrder: true } }) as never);
    }

    const home_clicked = async () => {
        navigation.navigate('MoreScreen' as never);
    }

    const order_clicked = async () => {
        navigation.navigate('OrdersScreen' as never);
    }

    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[CommonStyles.colors.startColor, CommonStyles.colors.endColor]}
            style={styles.view}>
            <Image source={Images.profile.success} style={styles.img} />
            <Text
                style={{
                    color: CommonStyles.colors.white,
                    fontFamily: CommonStyles.fonts.FONT_MEDIUM,
                    fontSize: 22,
                    marginTop: responsiveHeight(2),
                }}>
                Order ID:{' '}
                {orderState.order_id.split('-')[2]}
            </Text>

            <Text
                style={{
                    color: CommonStyles.colors.white,
                    fontFamily: CommonStyles.fonts.FONT_MEDIUM,
                    fontSize: 22,
                    marginTop: responsiveHeight(2),
                }}>
                Order Created Successfully
            </Text>

            <View style={styles.viewFlex}>
                <View style={styles.marginFlex}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={done_clicked} >
                        <View style={styles.subFlexView1}>
                            <Image source={Images.profile.print} style={styles.editImg} />
                            <Text style={styles.editTxt}>Print</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.marginFlex}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={next_clicked} >
                        <View style={styles.subFlexView1}>
                            <Image source={Images.profile.routes} style={styles.editImg} />
                            <Text style={styles.editTxt}>Next Customer</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.viewFlex}>
                <View style={styles.marginFlex}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={home_clicked}>
                        <View style={styles.subFlexView1}>
                            <Image source={Images.profile.home} style={styles.editImg} />
                            <Text style={styles.editTxt}>Home</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.marginFlex}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={order_clicked}>
                        <View style={styles.subFlexView1}>
                            <Image source={Images.profile.order} style={styles.editImg} />
                            <Text style={styles.editTxt}>Orders List</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </LinearGradient>
    );

}

export default OrderSuccess;