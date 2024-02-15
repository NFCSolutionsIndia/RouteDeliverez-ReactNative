import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import CommonStyles from '../config/CommonStyle';
import HeaderTitle from '../components/HeaderTitle';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../config/CartStyle';
import CartList from '../components/CartList';
import PopUp from '../components/PopUp';
import DefaultPreference from 'react-native-default-preference';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { addOrder } from '../redux/orderCreationSlice';
import Dialog, {
    DialogContent,
    DialogTitle,
    DialogFooter,
    DialogButton,
} from 'react-native-popup-dialog';
import { responsiveWidth } from 'react-native-responsive-dimensions';

type propsType = {
    index?: number,
    visible?: boolean,
    popUpTitle?: string,
    product?: any
}

function CartScreen(props: propsType): React.JSX.Element {

    const dispatchs = useDispatch();  
    const cartState = useSelector((state: RootState) => state.cart);
    const storeState = useSelector((state: RootState) => state.store); 

    const navigation = useNavigation();
    const route = useRoute();

    const goBack = () => {
        navigation.goBack();
    }

    const addProducts = () => {
        navigation.navigate('CreateOrder' as never);
    }

    const onEditPress = (item: any, index: any) => {
        // this.setState({visible: true});
        // this.setState({popUpTitle: item.productName});
        // this.setState({product: item});
        // this.setState({index: index});
    }

    const onDeletePress = (item: any, index: any) => {
        // console.log('index', index);
        // this.props.removeItem(item, index);
    }

    const ok_clicked = () => {
        // console.log('index', index);
        // this.props.removeItem(item, index);
    }

    
    const gotoOrder = async () => { 

        var userId = 0;

        const value = await DefaultPreference.get('userData');
        if (value !== null && value !== undefined && typeof value === 'string') {
            if (value.trim() !== '') {
                var udata = JSON.parse(value);
                userId = udata.results.userId;
            }
        }

        const data = {
            storeDetails: storeState.StoreItem,
            cartItems: cartState.cart,
            userId: userId
          };

        dispatchs(addOrder(data));
        navigation.navigate('CreateOrderConfirmationScreen' as never);
    }

    return (
        <SafeAreaView style={CommonStyles.style.container}>
            <HeaderTitle title={CommonStyles.strings.cart}
                backBtn={true}
                onPress={goBack}
                plusBtn={true}
                onPlusPress={() => addProducts()} />

            <Text style={styles.productCount}>{cartState.cart.length} Products</Text>

            {cartState.cart.length > 0 ? (
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <CartList
                        data={cartState.cart}
                        onEditPress={(item: any, index: any) => onEditPress(item, index)}
                        onDeletePress={(item: any, index: any) => onDeletePress(item, index)}
                    />

                    <Dialog
                        containerStyle={styles.dialogPosition}
                        visible={props.visible}
                        dialogTitle={
                            <DialogTitle
                                title={props.popUpTitle}
                                textStyle={styles.dialogueTitle}
                            />
                        }
                        footer={
                            <DialogFooter>
                                <DialogButton
                                    text="Cancel"
                                    //onPress={() => this.setState({ visible: false })}
                                    textStyle={styles.dialogueBottom}
                                />
                                <DialogButton
                                    text="OK"
                                    onPress={() => ok_clicked()}
                                    textStyle={styles.dialogueBottom}
                                />
                            </DialogFooter>
                        }>
                        <DialogContent>
                            {
                                <View
                                    style={{
                                        height: 200,
                                        width: responsiveWidth(70),
                                    }}>

                                    <PopUp
                                        title="Price"
                                        price={props?.product?.price}
                                        edit={false} />

                                    <PopUp
                                        placeholder="Sale"
                                        price={
                                            props?.product?.unitPrice == 0
                                                ? props?.product?.price
                                                : props?.product?.unitPrice
                                        }
                                        edit={true}
                                        // onChangeText={text => {
                                        //     var value = text.replace(/[^\w\s]/gi, '');
                                        //     this.setState(prevState => {
                                        //         let product = Object.assign({}, prevState.product); // creating copy of state variable jasper
                                        //         product.saleQty = value; // update the name property, assign a new value
                                        //         return { product }; // return new object jasper object
                                        //     })
                                        // }
                                        // }
                                        value={
                                            props?.product?.saleQty == 0
                                                ? ''
                                                : props?.product?.saleQty
                                        } />

                                    <PopUp
                                        placeholder="Buyback"
                                        price={
                                            props?.product?.buyBackUnitPrice == 0
                                                ? props?.product?.buyBackPrice
                                                : props?.product?.buyBackUnitPrice
                                        }
                                        edit={true}
                                        // onChangeText={text => {
                                        //     var value = text.replace(/[^\w\s]/gi, '');
                                        //     this.setState(prevState => {
                                        //         let product = Object.assign({}, prevState.product); // creating copy of state variable jasper
                                        //         product.buybackQty = value; // update the name property, assign a new value
                                        //         return { product }; // return new object jasper object
                                        //     })
                                        // }
                                        // }
                                        value={
                                            props?.product?.buybackQty == 0
                                                ? ''
                                                : props?.product?.buybackQty
                                        } />

                                    <PopUp
                                        placeholder="Damaged"
                                        price={
                                            props?.product?.damegedUnitPrice == 0
                                                ? props?.product?.damagedPrice
                                                : props?.product?.damegedUnitPrice
                                        }
                                        edit={true}
                                        // onChangeText={text => {
                                        //     var value = text.replace(/[^\w\s]/gi, '');
                                        //     this.setState(prevState => {
                                        //         let product = Object.assign({}, prevState.product); // creating copy of state variable jasper
                                        //         product.damagedQty = value; // update the name property, assign a new value
                                        //         return { product }; // return new object jasper object
                                        //     })
                                        // }
                                        // }
                                        value={
                                            props?.product?.damagedQty == 0
                                                ? ''
                                                : props?.product?.damagedQty
                                        } />

                                </View>
                            }
                        </DialogContent>
                    </Dialog>

                    <View style={styles.bottomView}>
                    <TouchableOpacity activeOpacity={0.9}
                                    style={{
                                        height: 50, width: responsiveWidth(40), borderRadius: 4,
                                        backgroundColor: CommonStyles.colors.themeColor, marginTop: 50,
                                        alignItems: 'center', justifyContent: 'center',
                                        shadowColor: "#FFFFFF", shadowOpacity: 0.8, shadowRadius: 2,
                                        shadowOffset: { height: 1, width: 1 }
                                    }}
                                    onPress={gotoOrder}   >
                                    <Text style={{ color: CommonStyles.colors.white, fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD, fontWeight: 'bold', fontSize: 15 }}>
                                        Preview
                                    </Text>
                                </TouchableOpacity>
                    </View>

                </View>
            ) : (
                <View style={{ flex: 1, justifyContent: 'center' }} >
                    <Text style={CommonStyles.style.messageTxt}>
                        {CommonStyles.strings.empty_message}
                    </Text>
                </View>
            )}

        </SafeAreaView>
    );
}

export default CartScreen;