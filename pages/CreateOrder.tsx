import React, { useEffect, useReducer, useState } from 'react';
import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import CommonStyles from '../config/CommonStyle';
import HeaderTitle from '../components/HeaderTitle';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../config/CreateOrderStyle';
import DefaultPreference from 'react-native-default-preference';
import { initializeDB } from '../database/database';
import Images from '../config/Images';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import ProductList from '../components/ProductList';
import Dialog, { DialogContent, DialogTitle, DialogFooter, DialogButton } from 'react-native-popup-dialog';
import PopUp from '../components/PopUp';
import Toast from 'react-native-simple-toast';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { RootState } from '../redux/rootReducer';

function reducer(state: any, action: any) {
    switch (action.type) {
        case 'FETCH_INIT': {
            return { ...state, loading: true, error: null };
        }
        case 'FETCH_SUCCESS_PRODUCTS': {
            return { ...state, loading: true, productItems: action.payload };
        }
        case 'FETCH_SUCCESS_PRODUCTS_SEARCH': {
            return { ...state, loading: true, productItemsSearch: action.payload };
        }
        case 'FETCH_SUCCESS_ORDERS': {
            return { ...state, loading: true, orders: action.payload };
        }
        case 'POPUP_VISIBILE': {
            return { ...state, loading: true, visible: action.payload };
        }
        case 'POPUP_TITLE': {
            return { ...state, loading: true, popUpTitle: action.payload };
        }
        case 'POPUP_PRODUCT': {
            return { ...state, loading: true, product: action.payload };
        }
        case 'SALE_TEXTBOX': {
            return { ...state, loading: true, sale: action.payload };
        }
        case 'BUYBACK_TEXTBOX': {
            return { ...state, loading: true, buyback: action.payload };
        }
        case 'DAMAGED_TEXTBOX': {
            return { ...state, loading: true, damaged: action.payload };
        }
        case 'TEXT_VALUE': {
            return { ...state, loading: true, text: action.payload };
        }
        case 'ADD_TO_CART': {
            return { ...state, loading: true, Cart: [action.payload, ...state.Cart] };
        }
        case 'EDIT_FROM_CART': {
            const item = [...state.cart];
            item[action.index] = action.payload;
            return { ...state, loading: true, Cart: item };
        }
        case 'CART_COUNT': {
            return { ...state, loading: true, cartCount: action.payload };
        }
        case 'RESET': {
            return { ...state, loading: false, error: action.payload };
        }
        default: {
            return state;
        }
    }
}

function CreateOrder(): React.JSX.Element {

    const dispatchs = useDispatch(); 
    const cartState = useSelector((state: RootState) => state.cart);

    const navigation = useNavigation();
    const route = useRoute();
    const [searchText, setText] = useState('');

    var storeParams = route?.params as any;

    const initialState = {
        loading: false,
        error: null,
        orders: [],
        productItems: [],
        productItemsSearch: [],
        cartCount: 0,
        visible: false,
        popUpTitle: '',
        sale: 0,
        damaged: 0,
        buyback: 0,
        cartData: [],
        editOrderId: '',
        product: {},
        text: '',
        Cart: []
    }

    const [routeDels, dispatch] = useReducer(reducer, initialState);

    const fetchData = async () => {
        const value = await DefaultPreference.get('userData');
        dispatch({ type: 'FETCH_INIT' });

        if (value !== null && value !== undefined && typeof value === 'string') {
            if (value.trim() !== '') {
                try {
                    var data = JSON.parse(value);

                    var db = await initializeDB(data.results.userName + data.results.userId, data.results.password);

                    if (db != null) {
                        const collection = db.rms;

                        var prd = await collection.findOne()
                            .where('_id')
                            .eq('colProducts')
                            .exec();

                        var ord = await collection.findOne()
                            .where('_id')
                            .eq('colOrders')
                            .exec();

                        if (ord != null && ord.data != null && ord.data.length > 0) {

                            for (let storeCounter = 0; storeCounter < ord.data.length; storeCounter++) {
                                try {
                                    if (
                                        isCurrentDate(
                                            ord.data[storeCounter].created_date.split('/')[0],
                                            ord.data[storeCounter].created_date.split('/')[1],
                                            ord.data[storeCounter].created_date.split('/')[2],
                                        )
                                    ) {
                                        var todayOrdersData = ord.data[storeCounter];
                                        for (let i = 0; i < todayOrdersData.orderDetails.length; i++) {
                                            for (let j = 0; j < prd.data.length; j++) {
                                                if (todayOrdersData.status != 7) {
                                                    if (
                                                        prd.data[j].number ==
                                                        todayOrdersData.orderDetails[i].number
                                                    ) {
                                                        var newpieces = todayOrdersData.orderDetails[i].saleQty;
                                                        var boxes = prd.data[j].availBoxes;
                                                        var pieces = prd.data[j].availPieces;
                                                        var ppb = prd.data[j].piecesPerBox;
                                                        var stock = boxes * ppb + pieces;

                                                        if (newpieces <= pieces) {
                                                            prd.data[j].availPieces =
                                                                pieces - newpieces; 
                                                        } else {
                                                            stock = stock - newpieces;
                                                            prd.data[j].availBoxes = parseInt(
                                                                String(stock / ppb),
                                                            );
                                                            prd.data[j].availPieces = stock % ppb; 
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        //console.log('No Orders for Todays Data');
                                    }
                                } catch (error) {
                                    console.log('Error' + error);
                                }
                            }

                            setTimeout(() => {
                                dispatch({ type: 'FETCH_SUCCESS_PRODUCTS', payload: prd.data.filter((item: any) => item.storeID === storeParams?.store?.storeId) });
                                dispatch({ type: 'FETCH_SUCCESS_PRODUCTS_SEARCH', payload: prd.data.filter((item: any) => item.storeID === storeParams?.store?.storeId) });
                                dispatch({ type: 'FETCH_SUCCESS_ORDERS', payload: ord.data });
                            }, 1000);
                        }
                        else {
                            console.log('NO', prd.data);
                        }

                    }
                    else {
                        console.log('Out', db);
                    }
                } catch (error) {
                    console.error('Invalid JSON:', error);
                }
            }
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const goBack = () => {
        navigation.goBack();
    }

    const goHome = () => {
        navigation.navigate('MoreScreen' as never);
    }

    const gotoCart = () => {
        if(cartState.total != 0)
        {
            navigation.navigate('CartScreen' as never);
        }
        else
        {
            Toast.show('Add the Products', 10);
        }
    }

    const SearchFilterFunction = (text: any) => {
        var result = routeDels.productItems.filter((item: any) => item?.productName.toLowerCase().includes(text.toLowerCase()));
        setText(text);
        setTimeout(() => {
            dispatch({ type: 'FETCH_SUCCESS_PRODUCTS_SEARCH', payload: result });
        }, 500);
    }

    const clearText = () => {
        setText('');
        SearchFilterFunction('');
    }

    const onClick = (item: any, index: any) => {

        setTimeout(() => {
            dispatch({ type: 'POPUP_VISIBILE', payload: true });
            dispatch({ type: 'POPUP_TITLE', payload: item?.productName });
            dispatch({ type: 'POPUP_PRODUCT', payload: item });
        }, 500);

    }

    const cancelPopUp = () => {
        setTimeout(() => {
            dispatch({ type: 'POPUP_VISIBILE', payload: false });
        }, 10);
    }

    const OkClicked = () => {
        if (routeDels.sale > 0 || routeDels.buyback > 0 || routeDels.damaged > 0) {
            if (routeDels.sale <= routeDels.product.availBoxes * routeDels.product.piecesPerBox + routeDels.product.availPieces) {
                const cart = cartState.cart;
 
                if (cart.length > 0) {
                    try {
                        const store_name = cart.find((obj: any) => {
                            return obj.productName === routeDels.product.productName;
                        }).productName;

                        const store_index = cart.findIndex((obj: any) => {
                            return obj.productName === routeDels.product.productName;
                        }, 0);

                        if (store_name == routeDels.product.productName) {
                            dispatch({ type: 'POPUP_VISIBILE', payload: false });

                            var cartItem = routeDels.product; 
                            cartItem['saleQty'] = routeDels.sale;
                            cartItem['buybackQty'] = routeDels.buyback;
                            cartItem['damagedQty'] = routeDels.damaged;
                            //this.props.editCart(cartItem, store_index);
                            //  dispatch({ type: 'EDIT_FROM_CART', payload: cartItem, index: store_index });

                            dispatch({ type: 'TEXT_VALUE', payload: 0 });
                            dispatch({ type: 'SALE_TEXTBOX', payload: 0 });
                            dispatch({ type: 'BUYBACK_TEXTBOX', payload: 0 });
                            dispatch({ type: 'DAMAGED_TEXTBOX', payload: 0 });
                        } else {
                            dispatch({ type: 'POPUP_VISIBILE', payload: false });
                            var cartItem = routeDels.product; 
                            cartItem['saleQty'] = routeDels.sale;
                            cartItem['buybackQty'] = routeDels.buyback;
                            cartItem['damagedQty'] = routeDels.damaged;
                            //  this.props.addToCart(cartItem); 
                            dispatchs(addToCart(cartItem));
 
                            dispatch({ type: 'TEXT_VALUE', payload: 0 });
                            dispatch({ type: 'SALE_TEXTBOX', payload: 0 });
                            dispatch({ type: 'BUYBACK_TEXTBOX', payload: 0 });
                            dispatch({ type: 'DAMAGED_TEXTBOX', payload: 0 });
                        }

                    }
                    catch (e) {
                        console.log('error', e);
                        dispatch({ type: 'POPUP_VISIBILE', payload: false });

                        var cartItem = routeDels.product; 
                        cartItem['saleQty'] = routeDels.sale;
                        cartItem['buybackQty'] = routeDels.buyback;
                        cartItem['damagedQty'] = routeDels.damaged;
                        // this.props.addToCart(cartItem); 
                        dispatchs(addToCart(cartItem)); 

                        dispatch({ type: 'TEXT_VALUE', payload: 0 });
                        dispatch({ type: 'SALE_TEXTBOX', payload: 0 });
                        dispatch({ type: 'BUYBACK_TEXTBOX', payload: 0 });
                        dispatch({ type: 'DAMAGED_TEXTBOX', payload: 0 });
                    }
                }
                else {
                    dispatch({ type: 'POPUP_VISIBILE', payload: false });
                    var cartItem = routeDels.product; 

                    cartItem['saleQty'] = routeDels.sale;
                    cartItem['buybackQty'] = routeDels.buyback;
                    cartItem['damagedQty'] = routeDels.damaged;
                    //this.props.addToCart(cartItem);
                    dispatchs(addToCart(cartItem)); 

                    dispatch({ type: 'TEXT_VALUE', payload: 0 });
                    dispatch({ type: 'SALE_TEXTBOX', payload: 0 });
                    dispatch({ type: 'BUYBACK_TEXTBOX', payload: 0 });
                    dispatch({ type: 'DAMAGED_TEXTBOX', payload: 0 });
                }
            }
            else {
                Alert.alert(
                    '',
                    'Entered quantity exceeds available quantity',
                    [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                    { cancelable: false },
                );
            }
        }
        else {
            Alert.alert(
                '',
                "Quantities can't be zero",
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false },
            );
        }
    }

    const handleSaleChange = (text: string) => {
        var value = text.replace(/[^\w\s]/gi, '');
        dispatch({ type: 'SALE_TEXTBOX', payload: Number(value) });
    }

    const handleBuybackhange = (text: string) => {
        var value = text.replace(/[^\w\s]/gi, '');
        dispatch({ type: 'BUYBACK_TEXTBOX', payload: Number(value) });
    }

    const handleDamegedChange = (text: string) => {
        var value = text.replace(/[^\w\s]/gi, '');
        dispatch({ type: 'DAMAGED_TEXTBOX', payload: Number(value) });
    }

    return (
        <SafeAreaView style={CommonStyles.style.container}>
            <HeaderTitle title={CommonStyles.strings.crate_order}
                backBtn={true}
                cartBtn={true}
                homeBtn={true}
                onHomePress={goHome}
                onPress={goBack}
                onCartPress={gotoCart}
                cartCount={cartState.total.toString()} />

            <View style={styles.viewRow}>
                <View style={styles.storeNameView}>
                    <Text style={styles.storeNameString}>{storeParams?.store?.title}</Text>
                </View>
                <View style={styles.marginFlex}>
                    <Text style={styles.productCount}>
                        {routeDels.productItemsSearch?.length} Products
                    </Text>
                </View>
            </View>

            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={styles.viewStyle}>
                    <View style={styles.searchStyle}>
                        <View style={styles.closeButtonParent}>
                            <Image
                                style={styles.searchButton}
                                source={Images.profile.search}
                            />
                        </View>
                        <TextInput
                            style={styles.textInputStyle}
                            onChangeText={text => SearchFilterFunction(text)}
                            value={searchText}
                            underlineColorAndroid="transparent"
                            placeholder="Search Products"
                        />
                        <TouchableOpacity
                            style={styles.closeButtonParent}
                            onPress={clearText}>
                            <Image
                                style={styles.closeButton}
                                source={Images.profile.close}
                            />
                        </TouchableOpacity>
                    </View>

                    {routeDels.productItemsSearch && routeDels.productItemsSearch?.length > 0 ? (
                        <ProductList
                            data={routeDels.productItemsSearch}
                            status={true}
                            onPress={(item: any, index: any) => onClick(item, index)}
                        />

                    ) :
                        (
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={CommonStyles.style.messageTxt}>
                                    {CommonStyles.strings.loading}
                                </Text>
                            </View>
                        )}

                </View>

                <Dialog
                    containerStyle={styles.dialogPosition}
                    visible={routeDels.visible}
                    dialogTitle={
                        <DialogTitle
                            title={routeDels.popUpTitle}
                            textStyle={styles.dialogueTitle}
                        />
                    }
                    footer={
                        <DialogFooter>
                            <DialogButton
                                text="Cancel"
                                onPress={cancelPopUp}
                                textStyle={styles.dialogueBottom}
                            />
                            <DialogButton
                                text="OK"
                                onPress={OkClicked}
                                textStyle={styles.dialogueBottom}
                            />
                        </DialogFooter>
                    }>
                    <DialogContent>
                        {
                            <View
                                style={{
                                    height: 220,
                                    width: responsiveWidth(70),
                                }}>
                                <PopUp
                                    title="Price"
                                    price={routeDels?.product?.price}
                                    edit={false} />

                                <PopUp
                                    placeholder="Sale"
                                    price={
                                        routeDels.product.unitPrice == 0
                                            ? routeDels.product.price
                                            : routeDels.product.unitPrice
                                    }
                                    editable={
                                        routeDels.product.availBoxes *
                                            routeDels.product.piecesPerBox +
                                            routeDels.product.availPieces ==
                                            0 ? false : true
                                    }
                                    edit={true}
                                    onChangeText={handleSaleChange}
                                    value={routeDels.sale > 0 ? String(routeDels.sale) : ''}

                                />

                                <PopUp
                                    placeholder="Buyback"
                                    price={
                                        routeDels.product.buyBackUnitPrice == 0
                                            ? routeDels.product.buyBackPrice
                                            : routeDels.product.buyBackUnitPrice
                                    }
                                    edit={true}
                                    onChangeText={handleBuybackhange}
                                    value={routeDels.buyback > 0 ? String(routeDels.buyback) : ''}
                                />

                                <PopUp
                                    placeholder="Damaged"
                                    price={
                                        routeDels.product.damegedUnitPrice == 0
                                            ? routeDels.product.damagedPrice
                                            : routeDels.product.damegedUnitPrice
                                    }
                                    edit={true}
                                    onChangeText={handleDamegedChange}
                                    value={routeDels.damaged > 0 ? String(routeDels.damaged) : ''}
                                />

                            </View>
                        }
                    </DialogContent>
                </Dialog>

            </View>

        </SafeAreaView>
    )
}

export default CreateOrder;

function isCurrentDate(mm: any, dd: any, yyyy: any) {
    var retVal = false;
    var inputDate = new Date(yyyy, mm - 1, dd);
    var todaysDate = new Date();
    if (inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0)) {
        retVal = true;
    } 
    return retVal;
}