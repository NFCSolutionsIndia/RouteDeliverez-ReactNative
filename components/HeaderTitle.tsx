import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CommonStyles from '../config/CommonStyle';
import styles from '../config/HeaderTitleStyle';
import Images from '../config/Images';

type propsType = {
    title?: string,
    backBtn?: boolean,
    homeBtn?: boolean,
    syncBtn?: boolean,
    cartBtn?: boolean,
    cartCount?: string,
    plusBtn?: boolean,
    onPress?(): void,
    onHomePress?(): void,
    onSyncPress?(): void,
    onCartPress?(): void,
    onPlusPress?(): void
}

const state: HeaderState = {
    syncData: 0
}

function HeaderTitle(props: propsType): React.JSX.Element {

    return (
        <LinearGradient start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[CommonStyles.colors.white, CommonStyles.colors.white]} >
            <View style={{ flexDirection: 'column' }}>
                <View style={styles.cardStyle}>
                    {
                        props.backBtn ? (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => props.onPress ? props.onPress() : undefined }>
                                <Image
                                    source={Images.profile.backIcon}
                                    style={styles.leftImg}
                                />
                            </TouchableOpacity>
                        ) : null
                    }
                    <Image
                        source={Images.profile.logo_landscape}
                        style={styles.landImage}
                    />
                    {props.homeBtn ? (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => props.onHomePress ? props.onHomePress() : undefined}>
                            <Image source={Images.profile.home} style={styles.homeImg} />
                        </TouchableOpacity>
                    ) : null}
                    {props.syncBtn ? (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => props.onSyncPress ? props.onSyncPress() : undefined}>
                            {state.syncData == 1 ? (
                                <Image
                                    source={Images.profile.newsync}
                                    style={styles.syncImgRed}
                                />
                            ) : (
                                <Image
                                    source={Images.profile.newsync}
                                    style={styles.syncImgGreen}
                                />
                            )}
                        </TouchableOpacity>
                    ) : null}
                </View>

                <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[CommonStyles.colors.startColor, CommonStyles.colors.endColor]} >
            <View style={styles.cardStyle}>
              {/* {this.props.backBtn ? (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.props.onPress()}>
                <Image
                  source={Images.profile.backIcon}
                  style={styles.leftImg}
                />
              </TouchableOpacity>
            ) : null} */}
              <Text style={styles.titleText}>{props.title}</Text>
              {/* <Image style={styles.leftImg} /> */}
              {props.cartBtn ? (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => props.onCartPress ? props.onCartPress() : undefined}>
                  <View style={styles.cartCircle}>
                    <Text style={styles.cartCountString}>
                      {props.cartCount}
                    </Text>
                  </View>
                  <Image source={Images.profile.cart} style={styles.leftImg} />
                </TouchableOpacity>
              ) : null}
              {props.plusBtn ? (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => props.onPlusPress ? props.onPlusPress() : undefined}>
                  <Image source={Images.profile.plus} style={styles.plusImg} />
                </TouchableOpacity>
              ) : null}
            </View>
          </LinearGradient>
            </View>
        </LinearGradient>
    );
}

export default HeaderTitle;

export interface HeaderState {
    syncData: number;
}

