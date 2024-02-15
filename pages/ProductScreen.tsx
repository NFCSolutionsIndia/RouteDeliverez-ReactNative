import React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from '../config/ProductStyle';
import Images from '../config/Images';
import CommonStyles from '../config/CommonStyle';
import { useNavigation } from '@react-navigation/native';
import HeaderTitle from '../components/HeaderTitle';
import { responsiveHeight } from 'react-native-responsive-dimensions';

function ProductScreen(): React.JSX.Element {
    const navigation = useNavigation();

    const state: ProductState = {
        status: 'Stores',
        userData: {},
        isLoading: true,
        routeItems: [],
        loadingText: CommonStyles.strings.loading,
    }

    const handleGoBack = () => {
        navigation.navigate('MoreScreen' as never);
    }

    const handleSubmitClick = () => {
    }

    return (
        <SafeAreaView style={CommonStyles.style.container}>
            <HeaderTitle title={CommonStyles.strings.products}
                backBtn={true}
                onPress={handleGoBack}
            />

            <View style={styles.viewFlex}>
                <View style={styles.marginFlex}>
                    <TouchableOpacity activeOpacity={0.9}
                        style={{
                            height: 40, borderRadius: 4,
                            backgroundColor: CommonStyles.colors.themeColor, marginTop: responsiveHeight(0.2),
                            alignItems: 'center', justifyContent: 'center',
                            shadowColor: "#FFFFFF", shadowOpacity: 0.8, shadowRadius: 2,
                            shadowOffset: { height: 1, width: 1 }
                        }}
                        onPress={handleSubmitClick}   >
                        <Text style={{ color: CommonStyles.colors.white, fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD, fontWeight: 'bold', fontSize: 13 }}>
                            User
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.marginFlex}>
                    <TouchableOpacity activeOpacity={0.9}
                        style={{
                            height: 40, borderRadius: 4,
                            backgroundColor: CommonStyles.colors.themeColor, marginTop: responsiveHeight(0.2),
                            alignItems: 'center', justifyContent: 'center',
                            shadowColor: "#FFFFFF", shadowOpacity: 0.8, shadowRadius: 2,
                            shadowOffset: { height: 1, width: 1 }
                        }}
                        onPress={handleSubmitClick}   >
                        <Text style={{ color: CommonStyles.colors.white, fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD, fontWeight: 'bold', fontSize: 13 }}>
                            Warehouse
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.mainView}>
                <View style={styles.searchStyle}>
                    <View style={styles.closeButtonParent}>
                        <Image
                            style={styles.searchButton}
                            source={Images.profile.search}
                        />
                    </View>
                    <TextInput
                        style={styles.textInputStyle}
                        //  onChangeText={text => this.SearchFilterFunction(text)}
                        //  value={this.state.text}
                        underlineColorAndroid="transparent"
                        placeholder="Search Products"
                    />
                    <TouchableOpacity
                        style={styles.closeButtonParent}
                    //   onPress={() => this.clearText()}
                    >
                        <Image
                            style={styles.closeButton}
                            source={Images.profile.close}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.mainView}>
                    <View style={CommonStyles.style.curveView}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={CommonStyles.style.messageTxt}>
                                {CommonStyles.strings.empty_products}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default ProductScreen;

export interface ProductState {
    status: any;
    userData: any;
    isLoading: boolean;
    routeItems: [];
    loadingText: string
}