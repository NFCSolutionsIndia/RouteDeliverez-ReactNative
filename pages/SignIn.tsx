import React, { useState } from 'react';
import { Text, View, SafeAreaView, Image, ScrollView, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import styles from '../config/SignInStyle';
import commonStyle from '../config/CommonStyle';
import Images from '../config/Images';
import LinearGradient from 'react-native-linear-gradient'; 
import CommonStyles from '../config/CommonStyle';
import { OutlinedTextField } from 'rn-material-ui-textfield';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import NetworkUtils from '../utils/NetworkUtils';
import ServiceConst from '../services/ServiceConst';
import DeviceInfo from 'react-native-device-info';
import Request from '../services/POST';
import DefaultPreference from 'react-native-default-preference';

function SignIn(): React.JSX.Element {

    const navigation = useNavigation();

    const state: SignInState = {
        username: '',
        password: '',
        animating: false
    }

    const body: LoginDetails = {
        username: '',
        password: '',
        deviceType: '',
        devicemodel: ''
    }

    const [userName, setUserName] = useState('');

    const handleUsernameChange = (text: string) => {
        setUserName(text);
    }

    const [password, setPassword] = useState('');

    const handlePasswordChange = (text: string) => {
        setPassword(text)
    }

    const handleSubmitClick = async () => {

        const isConnected = await NetworkUtils.isNetworkAvailable();

        console.log(isConnected);

        if (isConnected) {
            console.log('user name = ', userName);
            console.log('password = ', password);

            console.log('URL = ', ServiceConst.URLS.development);
            console.log('login url = ', '${ServiceConst.URLS.development}api/Account/Login');

            if (userName.length > 0 && password.length > 0) { 

                state.username = userName.toString();
                state.password = password.toString();
                state.animating = true;

                body.username = userName.toString();
                body.password = password.toString();
                body.deviceType = DeviceInfo.getBrand(),
                body.devicemodel = DeviceInfo.getModel()

                Request(
                    `${ServiceConst.URLS.development}api/Account/Login`,
                    body,
                    login_user,
                    state
                );
            }
            else {
                Alert.alert(
                    '',
                    'Please enter credentials',
                    [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                    { cancelable: false },
                );
            }
        }
        else {
            Alert.alert(
                '',
                'Please connect to Internet',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false },
            );
        }
    }

    const login_user = (response: any) => {
        console.log('******* response for login', response);

        if (response.code == 200) {

            //storing user login information which can be used later
            DefaultPreference.set('userData', JSON.stringify(response));
            DefaultPreference.set('SyncData', '0');

            if (response.results.passwordStatus == 0) {
                navigation.navigate('ChangePassword' as never);
            } else {
                navigation.navigate('MoreScreen' as never);
            }
        }
        else {

            console.log(response);
 
            Alert.alert(
                '',
                response.message,
                [
                    {
                        text: 'OK',
                        onPress: () => {
                            state.animating = false;
                        },
                    },
                ],
                { cancelable: false },
            );
        }

    };

    const handleForgotClick = () => {
        navigation.navigate('ForgotScreen' as never);
    }

    return (
        <SafeAreaView style={styles.container} >
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[commonStyle.colors.startColor, commonStyle.colors.endColor]}
                style={styles.view} >
                <View style={styles.viewFlex}>
                    <View style={styles.leftView}>
                        <Text style={styles.titleStyle}>Sign In</Text>
                    </View>
                    <View style={styles.rightView}>
                        <Image source={Images.profile.logo} style={styles.img} />
                    </View>
                </View>
            </LinearGradient>

            <View style={styles.curveView}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.MarginResponsiveWidth4} >
                        <OutlinedTextField
                            style={{ fontFamily: CommonStyles.fonts.FONT_REGULAR }}
                            containerStyle={{ marginTop: 5 }}
                            textColor={CommonStyles.colors.greyMedium}
                            labelFontSize={12}
                            fontSize={15}
                            lineWidth={1}
                            activeLineWidth={1}
                            labelTextStyle={{ fontFamily: CommonStyles.fonts.FONT_REGULAR, paddingTop: 2 }}
                            tintColor={CommonStyles.colors.themeColor}
                            label="Username"
                            editable={true}
                            value={userName}
                            onChangeText={handleUsernameChange}
                        />

                        <OutlinedTextField
                            style={{ fontFamily: CommonStyles.fonts.FONT_REGULAR }}
                            containerStyle={{ marginTop: 5 }}
                            textColor={CommonStyles.colors.greyMedium}
                            labelFontSize={12}
                            fontSize={15}
                            lineWidth={1}
                            activeLineWidth={1}
                            labelTextStyle={{ fontFamily: CommonStyles.fonts.FONT_REGULAR, paddingTop: 2 }}
                            tintColor={CommonStyles.colors.themeColor}
                            label="Password"
                            editable={true}
                            value={password}
                            onChangeText={handlePasswordChange}
                            secureTextEntry
                        />

                        {
                            !state.animating ? (
                                <TouchableOpacity activeOpacity={0.9}
                                    style={{
                                        height: 45, borderRadius: 4,
                                        backgroundColor: CommonStyles.colors.themeColor, marginTop: responsiveHeight(10),
                                        alignItems: 'center', justifyContent: 'center',
                                        shadowColor: "#FFFFFF", shadowOpacity: 0.8, shadowRadius: 2,
                                        shadowOffset: { height: 1, width: 1 }
                                    }}
                                    onPress={handleSubmitClick}   >
                                    <Text style={{ color: CommonStyles.colors.white, fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD, fontWeight: 'bold', fontSize: 15 }}>
                                        Sign In
                                    </Text>
                                </TouchableOpacity>
                            ) :
                                (
                                    <ActivityIndicator
                                        animating={state.animating}
                                        hidesWhenStopped={true}
                                        size="large"
                                        color={CommonStyles.colors.startColor} />
                                )
                        }

                        <TouchableOpacity activeOpacity={0.9}
                            style={{
                                height: 20, borderRadius: 4,
                                backgroundColor: CommonStyles.colors.transparent, marginTop: responsiveHeight(6),
                                alignItems: 'center', justifyContent: 'center',
                                shadowColor: "#000000", shadowOpacity: 0.8, shadowRadius: 2,
                                shadowOffset: { height: 1, width: 1 }
                            }}
                            onPress={handleForgotClick} >
                            <Text style={{ color: CommonStyles.colors.themeColor, fontFamily: CommonStyles.fonts.FONT_REGULAR, fontSize: 15 }}>
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default SignIn;

export interface SignInState {
    username: string;
    password: string;
    animating: boolean;
}

export interface LoginDetails {
    username: string;
    password: string;
    deviceType: string;
    devicemodel: string;
}