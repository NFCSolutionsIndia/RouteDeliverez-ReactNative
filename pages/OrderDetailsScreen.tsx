import React from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../config/OrdersDetailsStyle';
import CommonStyles from '../config/CommonStyle';
import HeaderTitle from '../components/HeaderTitle';
import CardView from 'react-native-cardview';

function OrderDetailsScreen(): React.JSX.Element {

    const route = useRoute();
    var storeParams = route?.params as any;

    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }

    const handleVoided = () => {
        console.log('handleVoided');
    }

    const gotoPrint = () => {
        console.log('Print Data - Order Details Screen', storeParams?.dataPayload);
        navigation.navigate(({ key: 'PrinterScreen', name: 'PrinterScreen', params: { odr: storeParams?.dataPayload, text: '', data: ''} }) as never);
    }

    return (
        <SafeAreaView style={CommonStyles.style.container}>
            <HeaderTitle title={CommonStyles.strings.orderDetails}
                backBtn={true}
                plusBtn={true}
                onPress={handleGoBack}
            />

            <View style={CommonStyles.style.curveView}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <CardView
                        style={styles.cardView}
                        borderRadius={4}
                        cardElevation={4}
                        cornerRadius={4}>
                        <View
                            style={{
                                marginLeft: 8,
                                marginTop: 8,
                                marginBottom: 8,
                            }}>
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <Text style={styles.txtBaseTitle}>Store Name</Text>
                                <Text style={styles.txtTitle}>{' : '}</Text>
                                <Text style={styles.txtTitle}>
                                    {storeParams?.dataPayload?.storeDetails?.storeName}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <Text style={styles.txtBaseTitle}>Store#</Text>
                                <Text style={styles.txtTitle}>{' : '}</Text>
                                <Text style={styles.txtTitle}>
                                    {storeParams?.dataPayload?.storeDetails?.number}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <Text style={styles.txtBaseTitle}>Address</Text>
                                <Text style={styles.txtTitle}>{' : '}</Text>
                                <Text style={styles.txtBaseSubTitle}>
                                    {storeParams?.dataPayload?.storeDetails?.address}
                                    {', '}
                                    {storeParams?.dataPayload?.storeDetails?.city}
                                    {', '}
                                    {storeParams?.dataPayload?.storeDetails?.state}
                                    {' - '}
                                    {storeParams?.dataPayload?.storeDetails?.zipCode}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <Text style={styles.txtBaseTitle}>Invoice#</Text>
                                <Text style={styles.txtTitle}>{' : '}</Text>
                                <Text style={styles.txtTitle}>
                                    {storeParams?.dataPayload?.invoice_id}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <Text style={styles.txtBaseTitle}>Created on</Text>
                                <Text style={styles.txtTitle}>{' : '}</Text>
                                <Text style={styles.txtTitle}>
                                    {storeParams?.dataPayload?.created_date}
                                </Text>
                            </View>
                        </View>
                    </CardView>

                    <View style={{ height: 8 }} />
                    <CardView
                        style={styles.cardView}
                        borderRadius={4}
                        cardElevation={4}
                        cornerRadius={4}>
                        <View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    padding: 8,
                                    alignItems: 'center',
                                    backgroundColor: CommonStyles.colors.lightGreyCOlor,
                                }}>
                                <View style={{ flex: 1 }}>
                                    {/* <Text style={styles.txtBold}>
                      Order# : {this.state.dataPayload.order_id}
                    </Text> */}
                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <Text style={styles.txtOrderHead}>Order# : </Text>

                                        <Text style={styles.txtOrder}>
                                            {storeParams?.dataPayload?.order_id}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <Text style={styles.txtOrderHead}>Status : </Text>

                                        <Text style={styles.txtOrder}>
                                            {storeParams?.dataPayload?.statusValue}
                                        </Text>
                                    </View>
                                    {/* <Text style={styles.txtStatus}>Status : New</Text> */}
                                </View>
                            </View>

                            <View
                                style={{
                                    height: 0.5,
                                    backgroundColor: CommonStyles.colors.inactiveGreyColor,
                                }}
                            />

                            <View
                                style={{
                                    flexDirection: 'row',
                                    padding: 8,
                                    alignItems: 'center',
                                    backgroundColor: CommonStyles.colors.lightGreyCOlor,
                                }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.txtSubTitle}>Type</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.txtSubTitle}>Date</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={styles.txtSubTitle}>Qty</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={styles.txtSubTitle}>Price</Text>
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    padding: 8,
                                    alignItems: 'center',
                                }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.txtTitle}>Sale</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.txtTitle}>
                                        {storeParams?.dataPayload?.created_date}
                                    </Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={styles.txtTitle}>
                                        {storeParams?.dataPayload?.totalSaleQty}
                                    </Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={styles.txtTitle}>
                                        ${' '}
                                        {Number(storeParams?.dataPayload?.totalSaleValue).toFixed(2)}
                                    </Text>
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    padding: 8,
                                    alignItems: 'center',
                                }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.txtTitle}>Damaged</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.txtTitle}>
                                        {storeParams?.dataPayload?.created_date}
                                    </Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={styles.txtTitle}>
                                        {storeParams?.dataPayload?.totalDamagedQty}
                                    </Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={styles.txtTitle}>
                                        ${' '}
                                        {Number(storeParams?.dataPayload?.totalDamagedValue).toFixed(
                                            2,
                                        )}
                                    </Text>
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    padding: 8,
                                    alignItems: 'center',
                                }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.txtTitle}>Buyback</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.txtTitle}>
                                        {storeParams?.dataPayload?.created_date}
                                    </Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={styles.txtTitle}>
                                        {storeParams?.dataPayload?.totalBuybackQty}
                                    </Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={styles.txtTitle}>
                                        ${' '}
                                        {Number(storeParams?.dataPayload?.totalBuybackValue).toFixed(
                                            2,
                                        )}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </CardView>

                    <View style={{ height: 8 }} />
                    <CardView
                        style={styles.cardView}
                        borderRadius={4}
                        cardElevation={4}
                        cornerRadius={4}>
                        <View>
                            <View
                                style={{
                                    alignItems: 'flex-end',
                                    marginRight: 8,
                                    marginTop: 5,
                                    flexDirection: 'row',
                                }}>
                                <View style={{ flex: 3, alignItems: 'flex-end' }}>
                                    <Text style={styles.txtTitle}>Sales :</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={styles.txtSubTitle}>
                                        ${' '}
                                        {Number(storeParams?.dataPayload?.totalSaleValue).toFixed(2)}
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    alignItems: 'flex-end',
                                    marginRight: 8,
                                    marginTop: 3,
                                    flexDirection: 'row',
                                }}>
                                <View style={{ flex: 3, alignItems: 'flex-end' }}>
                                    <Text style={styles.txtTitle}>Buyback/Damaged :</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={styles.txtSubTitle}>
                                        ${' '}
                                        {(
                                            storeParams?.dataPayload?.totalBuybackValue +
                                            storeParams?.dataPayload?.totalDamagedValue
                                        ).toFixed(2)}
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    alignItems: 'flex-end',
                                    marginRight: 8,
                                    marginTop: 3,
                                    marginBottom: 5,
                                    flexDirection: 'row',
                                }}>
                                <View style={{ flex: 3, alignItems: 'flex-end' }}>
                                    <Text style={styles.txtTitle}>Bal Due :</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={styles.txtSubTitle}>
                                        ${' '}
                                        {(
                                            storeParams?.dataPayload?.totalSaleValue -
                                            (storeParams?.dataPayload?.totalBuybackValue +
                                                storeParams?.dataPayload?.totalDamagedValue)
                                        ).toFixed(2)}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </CardView>
                    <View style={{ height: 8 }} />

                    <View style={styles.viewFlex}>
                        <View style={styles.marginFlex}>
                            {storeParams?.dataPayload?.status == 7 ||
                                storeParams?.dataPayload?.status == 4 ? (

                                <TouchableOpacity activeOpacity={0.9}
                                    style={{
                                        height: 45, borderRadius: 4,
                                        backgroundColor: CommonStyles.colors.themeColor,
                                        alignItems: 'center', justifyContent: 'center',
                                        shadowColor: "#000000", shadowOpacity: 0.8, shadowRadius: 2,
                                        shadowOffset: { height: 1, width: 1 }
                                    }}
                                    onPress={handleVoided} >
                                    <Text style={{ color: CommonStyles.colors.white, fontFamily: CommonStyles.fonts.FONT_REGULAR, fontSize: 15 }}>
                                        Edit
                                    </Text>
                                </TouchableOpacity>

                            ) : (

                                <TouchableOpacity activeOpacity={0.9}
                                    style={{
                                        height: 45, borderRadius: 4,
                                        backgroundColor: CommonStyles.colors.themeColor,
                                        alignItems: 'center', justifyContent: 'center',
                                        shadowColor: "#000000", shadowOpacity: 0.8, shadowRadius: 2,
                                        shadowOffset: { height: 1, width: 1 }
                                    }}
                                    onPress={handleVoided} >
                                    <Text style={{ color: CommonStyles.colors.white, fontFamily: CommonStyles.fonts.FONT_REGULAR, fontSize: 15 }}>
                                        Edit
                                    </Text>
                                </TouchableOpacity>

                            )}
                        </View>
                        <View style={styles.marginFlex}>
                            {storeParams?.dataPayload?.status == 7 ||
                                storeParams?.dataPayload?.status == 4 ? (

                                <TouchableOpacity activeOpacity={0.9}
                                    style={{
                                        height: 45, borderRadius: 4,
                                        backgroundColor: CommonStyles.colors.themeColor,
                                        alignItems: 'center', justifyContent: 'center',
                                        shadowColor: "#000000", shadowOpacity: 0.8, shadowRadius: 2,
                                        shadowOffset: { height: 1, width: 1 }
                                    }}
                                    onPress={handleVoided} >
                                    <Text style={{ color: CommonStyles.colors.white, fontFamily: CommonStyles.fonts.FONT_REGULAR, fontSize: 15 }}>
                                        Void
                                    </Text>
                                </TouchableOpacity>

                            ) : (

                                <TouchableOpacity activeOpacity={0.9}
                                    style={{
                                        height: 45, borderRadius: 4,
                                        backgroundColor: CommonStyles.colors.themeColor,
                                        alignItems: 'center', justifyContent: 'center',
                                        shadowColor: "#000000", shadowOpacity: 0.8, shadowRadius: 2,
                                        shadowOffset: { height: 1, width: 1 }
                                    }}
                                    onPress={handleVoided} >
                                    <Text style={{ color: CommonStyles.colors.white, fontFamily: CommonStyles.fonts.FONT_REGULAR, fontSize: 15 }}>
                                        Void
                                    </Text>
                                </TouchableOpacity>

                            )}
                        </View>
                        <View style={styles.marginFlex}>
                            {storeParams?.dataPayload?.status == 7 ? (

                                <TouchableOpacity activeOpacity={0.9}
                                    style={{
                                        height: 45, borderRadius: 4,
                                        backgroundColor: CommonStyles.colors.themeColor,
                                        alignItems: 'center', justifyContent: 'center',
                                        shadowColor: "#000000", shadowOpacity: 0.8, shadowRadius: 2,
                                        shadowOffset: { height: 1, width: 1 }
                                    }}
                                    onPress={gotoPrint} >
                                    <Text style={{ color: CommonStyles.colors.white, fontFamily: CommonStyles.fonts.FONT_REGULAR, fontSize: 15 }}>
                                        Print
                                    </Text>
                                </TouchableOpacity>


                            ) : (

                                <TouchableOpacity activeOpacity={0.9}
                                    style={{
                                        height: 45, borderRadius: 4,
                                        backgroundColor: CommonStyles.colors.themeColor,
                                        alignItems: 'center', justifyContent: 'center',
                                        shadowColor: "#000000", shadowOpacity: 0.8, shadowRadius: 2,
                                        shadowOffset: { height: 1, width: 1 }
                                    }}
                                    onPress={gotoPrint} >
                                    <Text style={{ color: CommonStyles.colors.white, fontFamily: CommonStyles.fonts.FONT_REGULAR, fontSize: 15 }}>
                                        Print
                                    </Text>
                                </TouchableOpacity>

                            )}
                        </View>
                    </View>


                </ScrollView>
            </View>

        </SafeAreaView>
    );
}

export default OrderDetailsScreen;