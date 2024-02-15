import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, Image, ScrollView, Alert } from 'react-native';
import styles from '../config/MoreStyle';
import commonStyle from '../config/CommonStyle';
import Images from '../config/Images';
import LinearGradient from 'react-native-linear-gradient';
import CommonStyles from '../config/CommonStyle';
import { useNavigation } from '@react-navigation/native';
import MoreCard from '../components/MoreCard';
import DefaultPreference from 'react-native-default-preference';
import OfflineSync from '../pages/OfflineSync';

function MoreScreen(): React.JSX.Element {

    OfflineSync.SyncStart();
    const navigation = useNavigation();

    const [userData, setUserData] = useState<string | null | undefined>(undefined);

    const [userName, setUserName] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [mobile, setMobile] = useState<string>('');

    const state: MoreState = {
        userData: {
            userName: '',
            name: '',
            email: '',
            mobile: ''
        },
        animating: false,
        isPayloadCalled: 0
    }

    const fetchData = async () => {
        const value = await DefaultPreference.get('userData');

        if (value !== null && value !== undefined && typeof value === 'string') {
            if (value.trim() !== '') {
                try {
                    var data = JSON.parse(value);
                    state.userData = data.results;
                    setUserData(data.results);
                    setUserName(data.results.userName);
                    setName(data.results.name);
                    setEmail(data.results.email);
                    setMobile(data.results.mobile);
                } catch (error) {
                    console.error('Invalid JSON:', error);
                }
            }
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleStoresClick = () => {
        navigation.navigate('StoresScreen' as never);
    }

    const handleRoutesClick = () => {
        navigation.navigate('RoutesScreen' as never);
    }

    const handleOrdersClick = () => {
        navigation.navigate('OrdersScreen' as never);
    }

    const handleTransfersClick = () => {
        navigation.navigate('TransferScreen' as never);
    }

    const handleProductClick = () => {
        navigation.navigate('ProductScreen' as never);
    }

    const handleProfileClick = () => {
        navigation.navigate('ProfileScreen' as never);
    }

    const handleReportClick = () => {
        navigation.navigate('ReportScreen' as never);
    }

    const handleLogoutClick = () => {
        
        Alert.alert(
            '',
            'Are you sure you want to logout ?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => logout(),
                },
            ],
            {
                cancelable: false,
            },
        );

    }

    const logout = () => {
        DefaultPreference.set('userData', ''); 
        navigation.navigate('SignIn' as never);
    }

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[commonStyle.colors.startColor, commonStyle.colors.endColor]}
                style={styles.linearGradient}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={Images.profile.profile}
                        style={{ height: 50, width: 50, justifyContent: 'center' }}
                        resizeMode={'cover'}
                    />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.titleLowercase}>
                            {userName}
                        </Text>
                        <Text style={styles.titleNormal}>
                            {name}
                        </Text>
                        <Text style={styles.titleLowercase}>
                            {email}
                        </Text>
                        <Text style={styles.titleNormal}>
                            {mobile}
                        </Text>
                    </View>
                </View>
            </LinearGradient>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.mainView}>
                    <MoreCard title={CommonStyles.strings.crate_order}
                        img={Images.profile.order}
                        color={CommonStyles.colors.themeColor}
                        rgb={CommonStyles.colors.blueRgb}
                        onPress={handleRoutesClick} />
                    <MoreCard title={CommonStyles.strings.more_orders}
                        img={Images.profile.order}
                        color={CommonStyles.colors.yellow}
                        rgb={CommonStyles.colors.yellowRgb}
                        onPress={handleOrdersClick} />
                    <MoreCard title={CommonStyles.strings.more_routes}
                        img={Images.profile.routes}
                        color={CommonStyles.colors.themeColor}
                        rgb={CommonStyles.colors.blueRgb}
                        onPress={handleRoutesClick} />
                    <MoreCard title={CommonStyles.strings.more_stores}
                        img={Images.profile.stores}
                        color={CommonStyles.colors.green}
                        rgb={CommonStyles.colors.greenRgb}
                        onPress={handleStoresClick} />
                    <MoreCard title={CommonStyles.strings.more_products}
                        img={Images.profile.product}
                        color={CommonStyles.colors.orange}
                        rgb={CommonStyles.colors.orangeRgb}
                        onPress={handleProductClick} />
                    <MoreCard title={CommonStyles.strings.more_transfers}
                        img={Images.profile.transfers}
                        color={CommonStyles.colors.lightgreen}
                        rgb={CommonStyles.colors.lightgreenRgb}
                        onPress={handleTransfersClick} />
                    <MoreCard title={CommonStyles.strings.more_reports}
                        img={Images.profile.report}
                        color={CommonStyles.colors.violet}
                        rgb={CommonStyles.colors.violetRgb}
                        onPress={handleReportClick} />
                    <MoreCard title={CommonStyles.strings.logout}
                        img={Images.profile.profileIcon}
                        color={CommonStyles.colors.red}
                        rgb={CommonStyles.colors.yellowRgb}
                        onPress={handleLogoutClick} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default MoreScreen;

export interface MoreState {
    userData: UserData;
    animating: boolean;
    isPayloadCalled: number;
}

export interface UserData {
    userName: string;
    name: string;
    email: string;
    mobile?: string;
}