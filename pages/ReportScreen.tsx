import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import styles from '../config/RoutesStyle'; 
import CommonStyles from '../config/CommonStyle';
import { useNavigation } from '@react-navigation/native';
import HeaderTitle from '../components/HeaderTitle'; 

function ReportScreen(): React.JSX.Element {
    const navigation = useNavigation();

    const state: ReportState = {
        status: 'Report',
        userData: {},
        isLoading: true,
        routeItems: [],
        loadingText: CommonStyles.strings.loading,
    }

    const handleGoBack = () => {
        navigation.navigate('MoreScreen' as never);
    }

    const handleRoutesScreen = () => {
        navigation.navigate('RoutesScreen' as never);
    } 
     
    return (
        <SafeAreaView style={styles.container}>
            <HeaderTitle title={CommonStyles.strings.more_reports}
                backBtn={true}
                plusBtn={true}
                onPress={handleGoBack}
                onPlusPress={() => handleRoutesScreen}
            />

            <View style={CommonStyles.style.curveView}>
                {
                    state.routeItems.length > 0 ? (

                        <View>
                            <Text>Orders</Text>
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

export default ReportScreen;

export interface ReportState {
    status: any;
    userData: any;
    isLoading: boolean;
    routeItems: [];
    loadingText: string
}