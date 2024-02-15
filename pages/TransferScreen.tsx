import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import styles from '../config/RoutesStyle';
import CommonStyles from '../config/CommonStyle';
import { useNavigation } from '@react-navigation/native';
import HeaderTitle from '../components/HeaderTitle'; 

function TransferScreen(): React.JSX.Element {
    const navigation = useNavigation();

    const state: TransferState = {
        status: 'Transfer',
        userData: {},
        isLoading: true,
        routeItems: [],
        loadingText: CommonStyles.strings.loading,
    }

    const handleGoBack = () => {
        navigation.navigate('MoreScreen' as never);
    } 
     
    return (
        <SafeAreaView style={styles.container}>
            <HeaderTitle title={CommonStyles.strings.transfer}
                backBtn={true}
                onPress={handleGoBack}
            />

            <View style={CommonStyles.style.curveView}>
                {
                    state.routeItems.length > 0 ? (

                        <View>
                            <Text>Transfers</Text>
                        </View>


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

export default TransferScreen;

export interface TransferState {
    status: any;
    userData: any;
    isLoading: boolean;
    routeItems: [];
    loadingText: string
}