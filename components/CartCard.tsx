import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native'; 
import styles from '../config/CartConfigStyle';
import Images from '../config/Images';
import CardSBD from './CardSBD';

type propsType = {
    onEditPress?(item: any, index: any): void,
    onDeletePress?(item: any, index: any): void,
    status?: boolean,
    item?: any,
    index?: any
}

type State = {
    statusValue: string
}

function CartCard(props: propsType): React.JSX.Element {
    return (
        <View style={styles.cardView}>
            <View style={styles.mainView}>
                <View style={styles.subView}>

                    <View style={styles.flexView}>
                        <Text style={styles.titleTxt}>{props.item.productName}</Text>
                        <CardSBD
                            title="Sale"
                            qty={props.item.saleQty}
                            price={
                                props.item.unitPrice == 0
                                    ? Number(props.item.saleQty * props.item.price).toFixed(2)
                                    : Number(props.item.saleQty * props.item.unitPrice).toFixed(2)
                            } />

                        <CardSBD
                            title="Buyback"
                            qty={props.item.buybackQty}
                            price={
                                props.item.buyBackUnitPrice == 0
                                    ? Number(props.item.buybackQty * props.item.buyBackPrice).toFixed(2)
                                    : Number(props.item.buybackQty * props.item.buyBackUnitPrice).toFixed(2)
                            } />

                        <CardSBD
                            title="Damaged"
                            qty={props.item.damagedQty}
                            price={
                                props.item.damegedUnitPrice == 0
                                    ? Number(props.item.damagedQty * props.item.damagedPrice).toFixed(2)
                                    : Number(props.item.damagedQty * props.item.damegedUnitPrice).toFixed(2)
                            } />

                    </View>
                </View>
                <View style={styles.centerView}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => {
                            props.status ? (props.onDeletePress ? props.onDeletePress(props.item, props.index) : undefined) : null;
                        }}>
                        <View style={styles.subFlexView}>
                            <Image source={Images.profile.delete} style={styles.editImg} />
                            <Text style={styles.editTxt}>Delete</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => {
                            props.status ? (props.onEditPress ? props.onEditPress(props.item, props.index) : undefined) : null;
                        }}>
                        <View style={styles.subFlexView1}>
                            <Image source={Images.profile.edit} style={styles.editImg} />
                            <Text style={styles.editTxt}>Edit</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default CartCard;

