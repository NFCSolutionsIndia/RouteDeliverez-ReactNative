import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import CommonStyles from '../config/CommonStyle';
import HeaderTitle from '../components/HeaderTitle';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../config/CreateOrderConfirmationStyle';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import OrderConfirm from '../components/OrderConfirm';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import DefaultPreference from 'react-native-default-preference';
import { initializeDB } from '../database/database'; 
import { emptyCart } from '../redux/cartSlice'; 

type propsType = {
    index?: number
}

function CreateOrderConfirmationScreen(props: propsType): React.JSX.Element {

    const orderState = useSelector((state: RootState) => state.order);

    const dispatchs = useDispatch();
    const navigation = useNavigation();
    const route = useRoute();

    const goBack = () => {
        navigation.goBack();
    }

    const handleSubmitClick = async () => {
        const min = 1;
        const max = 10000;
        const rand = min + Math.random() * (max - min);

        const value = await DefaultPreference.get('userData');

        if (value !== null && value !== undefined && typeof value === 'string') {
            if (value.trim() !== '') {
                try {
                    var udata = JSON.parse(value);
                    var db = await initializeDB(udata.results.userName + udata.results.userId, udata.results.password);

                    if (db != null) {
                        const collection = db.rms;

                        var doc = await collection
                            .findOne()
                            .where('_id')
                            .eq('colOrders')
                            .exec();

                        if (doc != null) {
                            var colOrders = doc.toJSON();
                            var data = colOrders.data;  

                            data.push(orderState); 

                            await doc.update({
                                $set: {
                                    data: data,
                                },
                            });

                            console.log('*** ORDER DATA *** ', orderState);

                            DefaultPreference.set('SyncData', '1');
                            dispatchs(emptyCart());

                            navigation.navigate(({ key: 'OrderSuccess', name: 'OrderSuccess', params: {odr: orderState} }) as never);
                        }
                        else {
                            console.log('doc - null');
                        }
                    }
                    else {
                        console.log('Out', db);
                    }

                }
                catch (error) {
                    console.error('Invalid JSON:', error);
                }
            }
        }

    };

    return (
        <SafeAreaView style={CommonStyles.style.container}>

            <HeaderTitle
                title={CommonStyles.strings.createOrderConfirm}
                backBtn={true}
                onPress={() => goBack()}
            />

            <Text style={styles.productCount}>
                {orderState.orderDetails.length} Products
            </Text>

            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.viewItems}>
                        <OrderConfirm
                            data={orderState.orderDetails}
                            name={CommonStyles.strings.sale}
                            type="sale"
                            total={orderState.totalSaleQty}
                            totalValue={orderState.totalSaleValue}
                        />
                        <OrderConfirm
                            data={orderState.orderDetails}
                            name={CommonStyles.strings.Buyback}
                            type="buyback"
                            total={orderState.totalBuybackQty}
                            totalValue={orderState.totalBuybackValue}
                        />
                        <OrderConfirm
                            data={orderState.orderDetails}
                            name={CommonStyles.strings.damaged}
                            type="damaged"
                            total={orderState.totalDamagedQty}
                            totalValue={orderState.totalDamagedValue}
                        />
                    </View>
                </ScrollView>

                <View style={styles.bottomView}>


                    <TouchableOpacity activeOpacity={0.9}
                        style={{
                            height: 50, borderRadius: 4, width: responsiveWidth(40),
                            backgroundColor: CommonStyles.colors.themeColor, marginTop: 50,
                            alignItems: 'center', justifyContent: 'center',
                            shadowColor: "#FFFFFF", shadowOpacity: 0.8, shadowRadius: 2,
                            shadowOffset: { height: 1, width: 1 }
                        }}
                        onPress={handleSubmitClick}   >
                        <Text style={{ color: CommonStyles.colors.white, fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD, fontWeight: 'bold', fontSize: 15 }}>
                            Create
                        </Text>
                    </TouchableOpacity>



                    {/* 
                    {!this.state.isEditOrder ? (
                        <CustomButton
                            height={50}
                            width={AppStyles.dimensions.customWidth(40)}
                            backgroundColor={AppStyles.colors.themeColor}
                            title="Create"
                            marginTop={50}
                            onPress={() => this.submit()}
                            textColor={AppStyles.colors.white}
                            fontFamily={AppStyles.fonts.FONT_SEMI_BOLD}
                            fontSize={15}
                            borderRadius={4}
                        />
                    ) : (
                        <CustomButton
                            height={50}
                            width={AppStyles.dimensions.customWidth(40)}
                            backgroundColor={AppStyles.colors.themeColor}
                            title="Update"
                            marginTop={50}
                            onPress={() => this.update()}
                            textColor={AppStyles.colors.white}
                            fontFamily={AppStyles.fonts.FONT_SEMI_BOLD}
                            fontSize={15}
                            borderRadius={4}
                        />
                    )} */}

                </View>
            </View>

        </SafeAreaView>
    );

}


export default CreateOrderConfirmationScreen;