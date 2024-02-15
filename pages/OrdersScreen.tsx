import React, { useEffect, useReducer } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import styles from '../config/OrdersStyle'; 
import CommonStyles from '../config/CommonStyle';
import { useNavigation } from '@react-navigation/native';
import HeaderTitle from '../components/HeaderTitle';
import OrderList from '../components/OrderList';
import DefaultPreference from 'react-native-default-preference';
import { initializeDB } from '../database/database';

function reducer(state: any, action: any) {
    switch (action.type) {
        case 'FETCH_INIT': {
            return { ...state, loading: true, error: null };
        }
        case 'FETCH_SUCCESS': {
            return { ...state, loading: true, data: action.payload };
        }
        case 'RESET': {
            return { ...state, loading: false, error: action.payload };
        }
        default: {
            return state;
        }
    }
}

function OrdersScreen(): React.JSX.Element {

    const initialState = {
        loading: false,
        error: null,
        data: []
    }

    const [routeDels, dispatch] = useReducer(reducer, initialState);

    const navigation = useNavigation();

    // const state: OrdersState = {
    //     status: 'Orders',
    //     userData: {},
    //     isLoading: true,
    //     data: [],
    //     loadingText: CommonStyles.strings.loading,
    // }    

    const fetchData = async () => {
        const value = await DefaultPreference.get('userData');
        dispatch({ type: 'FETCH_INIT' });

        if (value !== null && value !== undefined && typeof value === 'string') {
            if (value.trim() !== '') {
                try {
                    var data = JSON.parse(value);
                    //state.userData = data.results;

                    var db = await initializeDB(data.results.userName + data.results.userId, data.results.password);

                    if (db != null) {
                        const collection = db.rms;

                        var doc = await collection.findOne()
                            .where('_id')
                            .eq('colOrders')
                            .exec();

                        if (doc != null && doc.data != null && doc.data.length > 0) {

                            setTimeout(() => {
                                //state.routeItems = doc.data;
                                dispatch({ type: 'FETCH_SUCCESS', payload: doc.data });
                            }, 2000);
                        }
                        else {
                            console.log('NO', doc.data);
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

    const handleGoBack = () => {
        navigation.navigate('MoreScreen' as never);
    }

    const handleRoutesScreen = () => {
        navigation.navigate('RoutesScreen' as never);
    }

    const handleClick = (item: any, index: any) => { 
        navigation.navigate(({ key: 'OrderDetailsScreen', name: 'OrderDetailsScreen', params: {dataPayload: item} }) as never);
    }

    return (
        <SafeAreaView style={styles.container}>
            <HeaderTitle title={CommonStyles.strings.orders}
                backBtn={true}
                plusBtn={true}
                onPress={handleGoBack}
                onPlusPress={handleRoutesScreen}
            />

            <View style={styles.mainView}>
                <View style={CommonStyles.style.curveView}>
                    {routeDels.loading ? (
                        <OrderList
                            data={routeDels.data.reverse()}
                            status={true}
                            onPress={(item: any, index: any) => handleClick(item, index)}
                        />
                    ) : (
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={CommonStyles.style.messageTxt}>
                                Loading
                            </Text>
                        </View>
                    )}
                </View>
            </View>

            {/* Need to Uncomment */}

            {/* {state.isLoading ? (
                <ActivityIndicator
                    size="large"
                    color={CommonStyles.colors.accentColor}
                    animating={state.isLoading}
                    style={CommonStyles.style.activityIndicator}
                />
            ) : null} */}
        </SafeAreaView>
    );
}

export default OrdersScreen;

export interface OrdersState {
    status: any;
    userData: any;
    isLoading: boolean;
    data: MyObject[];
    loadingText: string
}

type MyObject = {
    status: number;
    order_id: string;
    totalSaleValue: number;
    created_date: Date;
    storeDetails: StoreDetails;
};

type StoreDetails = {
    storeName: string;
};