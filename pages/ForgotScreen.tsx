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
import RequestPost from '../services/POST';
import ServiceConst from '../services/ServiceConst';
import DefaultPreference from 'react-native-default-preference';

function ForgotScreen(): React.JSX.Element {
    const navigation = useNavigation();

    const state: ForgotState = {
        username: '',
        animating: false,
        validUser: ''
    }

    const [userName, setUserName] = useState('');

    const handleUsernameChange = (text: string) => {
        setUserName(text)
    }

    const handleCancelClick = () => {
        navigation.navigate("SignIn" as never);
    }

    const handleSubmitClick = async () => { 
        const isConnected = await NetworkUtils.isNetworkAvailable();
        if (isConnected) {
          if (userName.length > 0) { 
            var body = {
              UserName: userName,
            };
            RequestPost(
              `${ServiceConst.URLS.development}/api/Account/ForgotPassword`,
              body,
              forgot_password,
              ''
            );
          } else {
            Alert.alert(
              '',
              'Please enter valid Username',
              [{text: 'OK', onPress: () => console.log('OK Pressed')}],
              {cancelable: false},
            );
          }
        } else {
          Alert.alert(
            '',
            'Please connect to Internet',
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
            {cancelable: false},
          );
        }
    }

    const forgot_password = (response: any) => {
        console.log('******* response for forgot password', response);

        if (response.messageStatus == 200) {
            //storing Generated Password information which can be used in Change Password
            DefaultPreference.set('passData', JSON.stringify(response));
            console.log(
              '******* response for forgot password',
              JSON.stringify(response),
            );
            // this.setState({animating: false});
            // this.setState({validUser: response.userName});
            Alert.alert(
              '',
              response.message,
              [
                {
                  text: 'OK',
                  onPress: () => {
                   // this.checkValidUser();
                  },
                },
              ],
              {cancelable: false},
            );
          } else {
            Alert.alert(
              ' ',
              response.message,
              [
                {
                  text: 'OK',
                  onPress: () => {
                   // this.setState({animating: false});
                  },
                },
              ],
              {cancelable: false},
            );
          }

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
                        <Text style={styles.titleStyle}>Forgot Password</Text>
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
                        <View style={styles.viewFlex}>
                            <View style={styles.marginFlex}>
                                <TouchableOpacity activeOpacity={0.9}
                                    style={{
                                        height: 45, borderRadius: 4,
                                        backgroundColor: CommonStyles.colors.themeColor, marginTop: responsiveHeight(10),
                                        alignItems: 'center', justifyContent: 'center',
                                        shadowColor: "#FFFFFF", shadowOpacity: 0.8, shadowRadius: 2,
                                        shadowOffset: { height: 1, width: 1 }
                                    }}
                                    onPress={handleCancelClick}   >
                                    <Text style={{ color: CommonStyles.colors.white, fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD, fontWeight: 'bold', fontSize: 15 }}>
                                        Cancel
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.marginFlex}>
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
                                                Submit
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
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default ForgotScreen;

export interface ForgotState {
    username: string;
    animating: boolean;
    validUser: string;
}