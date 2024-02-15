import React, { useEffect, useReducer } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import styles from '../config/RoutesStyle'; 
import CommonStyles from '../config/CommonStyle';
import { useNavigation } from '@react-navigation/native';
import HeaderTitle from '../components/HeaderTitle';
import RoutesList from '../components/RoutesList';
import DefaultPreference from 'react-native-default-preference';
import { UserData } from './MoreScreen';
import { initializeDB } from '../database/database';
import OfflineSync from '../pages/OfflineSync';

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

function RoutesScreen(): React.JSX.Element {

    const initialState = {
        loading: false,
        error: null,
        data: []
    }

    OfflineSync.SyncStart();

    const [routeDels, dispatch] = useReducer(reducer, initialState);

    const navigation = useNavigation();

    const state: RouteState = {
        status: 'Create Order',
        userData: {
            userName: '',
            name: '',
            email: '',
            mobile: ''
        },
        isLoading: true,
        routeItems: [],
        loadingText: CommonStyles.strings.loading,
    }

    const fetchData = async () => {
        const value = await DefaultPreference.get('userData');
        dispatch({ type: 'FETCH_INIT' });

        if (value !== null && value !== undefined && typeof value === 'string') {
            if (value.trim() !== '') {
                try {
                    var data = JSON.parse(value);
                    state.userData = data.results;

                    var db = await initializeDB(data.results.userName + data.results.userId, data.results.password);

                    if (db != null) {
                        const collection = db.rms;

                        var doc = await collection.findOne()
                            .where('_id')
                            .eq('colRoutes')
                            .exec();

                        if (doc != null && doc.data != null && doc.data.length > 0) {

                            setTimeout(() => {
                                state.routeItems = doc.data;
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

    const handleCallSync = () => {
        OfflineSync.SyncForce();
        navigation.goBack();
    }

    const handleSelectRouteClick = (item: any, index: any) => {
        console.log(' ***Routes List***', item);
        navigation.navigate(({ key: 'StoresScreen', name: 'StoresScreen', params: {createOrder: true, routeId: item.routeId} }) as never);
    }

    return (
        <SafeAreaView style={styles.container}>
            <HeaderTitle title={CommonStyles.strings.routes}
                backBtn={true}
                syncBtn={true}
                onPress={handleGoBack}
                onSyncPress={handleCallSync}
            />

            <View style={CommonStyles.style.curveView}>
                {
                    routeDels.loading ? (

                        <RoutesList
                            data={routeDels.data}
                            status={true}
                            onPress={(item: any, index: any) => handleSelectRouteClick(item, index)}
                        />

                    ) : (
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={CommonStyles.style.messageTxt}>
                                {state.loadingText}
                            </Text>
                        </View>
                    )
                }
            </View>

            {/* Need to Uncomment */}

            {/* {routeDels.loading ? (
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

export default RoutesScreen;

export interface RouteState {
    status: any;
    userData: UserData;
    isLoading: boolean;
    routeItems: RouteDetails[];
    loadingText: string
}

export interface RouteDetails {
    createDate: Date;
    email: string;
    fullName: string;
    number: number;
    routeId: number;
    routeName: string;
    status: number;
    subTitle: number;
    title: string;
    userId: number;
    userName: string;
}
