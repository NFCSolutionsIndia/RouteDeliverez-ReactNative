import React, { useEffect, useReducer } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import styles from '../config/StoresStyle'; 
import CommonStyles from '../config/CommonStyle';
import { useNavigation, useRoute } from '@react-navigation/native';
import HeaderTitle from '../components/HeaderTitle';
import StoreList from '../components/StoreList';
import DefaultPreference from 'react-native-default-preference';
import { initializeDB } from '../database/database'; 
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { addStore } from '../redux/storeSlice';

function reducer(state: any, action: any) {
    switch (action.type) {
        case 'FETCH_INIT': {
            return { ...state, loading: true, error: null };
        }
        case 'FETCH_SUCCESS': {
            return { ...state, loading: true, storeItems: action.payload };
        }
        case 'EMPTY_CART': {
            return { ...state, loading: true, cart: [], total: 0 };
        }
        case 'RESET': {
            return { ...state, loading: false, error: action.payload };
        }
        default: {
            return state;
        }
    }
} 

function StoresScreen(): React.JSX.Element {

    const navigation = useNavigation();
    const route = useRoute();

    const dispatchs = useDispatch();  
    const storeState = useSelector((state: RootState) => state.store);
    console.log('************ Stores Screen', storeState.Store.length);
    console.log('************ Stores Screen***', storeState.Store);

    var storeParams = route?.params as StoreParams;
    const initialState = {
        status: storeParams?.createOrder,
        routeId: storeParams?.routeId,
        loading: false,
        error: null,
        storeItems: []
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

                        var doc = await collection.findOne()
                            .where('_id')
                            .eq('colStores')
                            .exec();

                        if (doc != null && doc.data != null && doc.data.length > 0) {

                            setTimeout(() => {
                                dispatch({ type: 'FETCH_SUCCESS', payload: doc.data.filter((item: any) => item.routeId === 3) });
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

    const handleHomeScreen = () => {
        navigation.navigate('MoreScreen' as never);
    }

    const gotoStoreDetails = (item: any, index: any) => {
        console.log(' *** gotoStoreDetails ***', item);
        console.log(' *** createOrder ***', storeParams?.createOrder);

        if (storeParams?.createOrder == true) { 
            dispatch({ type: 'EMPTY_CART'});
            dispatchs(addStore(item));
            navigation.navigate(({ key: 'CreateOrder', name: 'CreateOrder', params: { store: item } }) as never);
        }
        else {
            navigation.navigate(({ key: 'StoreDetailsScreen', name: 'StoreDetailsScreen', params: { store: item } }) as never);
        }
    }

    return (
        <SafeAreaView style={CommonStyles.style.container}>
            <HeaderTitle title={CommonStyles.strings.store}
                backBtn={true}
                homeBtn={true}
                onPress={handleGoBack}
                onHomePress={handleHomeScreen}
            />

            <View style={styles.mainView}>
                <View style={CommonStyles.style.curveView}>
                    {routeDels.loading ? (
                        <StoreList
                            storeItems={routeDels.storeItems}
                            onPress={(item: any, index: any) => gotoStoreDetails(item, index)}
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

export default StoresScreen;

export interface StoreParams {
    createOrder: boolean;
    routeId: number; 
}