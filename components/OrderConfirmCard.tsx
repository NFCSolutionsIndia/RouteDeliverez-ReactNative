import React from 'react';
import { Text, View } from 'react-native';
import styles from '../config/CreateOrderConfirmationConfigStyle';

type propsType = { 
    item?: any,
    index?: any,
    type?: any
}

type details = {
    qty: number,
    price: number
}

function OrderConfirmCard(props: propsType): React.JSX.Element {

    const obj: details = {
        qty: 0,
        price: 0
    }

    if (props.type == 'sale') {
        obj.qty = props.item.saleQty;
        if (props.item.unitPrice == 0) {
            obj.price = props.item.price;
        } else {
            obj.price = props.item.unitPrice;
        }
      } else if (props.type == 'buyback') {
        obj.qty = props.item.buybackQty;
        if (props.item.buyBackUnitPrice == 0) {
            obj.price = props.item.buyBackPrice;
        } else {
            obj.price = props.item.buyBackUnitPrice;
        }
      } else {
        obj.qty = props.item.damagedQty;
        if (props.item.damegedUnitPrice == 0) {
            obj.price = props.item.damagedPrice;
        } else {
            obj.price = props.item.damegedUnitPrice;
        }
      }

    return (
        <View style={styles.itemHeader}>
        <View style={styles.viewFlex}>
          <Text style={styles.txtTitle}>{props.item.productID}</Text>
        </View>
        <View style={styles.viewFlex1}>
          <Text style={styles.txtTitle}>{props.item.productName}</Text>
        </View>
        <View style={styles.viewRight}>
          <Text style={styles.txtTitle}>{obj.qty}</Text>
        </View>
        <View style={styles.viewRight}>
          <Text style={styles.txtTitle}>${Number(obj.qty * obj.price).toFixed(2)}</Text>
        </View>
      </View>
    );
}

export default OrderConfirmCard;

