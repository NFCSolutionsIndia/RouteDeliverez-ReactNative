import React from 'react';
import { Text, View, FlatList } from 'react-native';
import OrderConfirmCard from './OrderConfirmCard';
import CardView from 'react-native-cardview';
import styles from '../config/CreateOrderConfirmationConfigStyle';

type propsType = {
    data?: any,
    name?: string,
    type?: string, 
    total?: string,
    totalValue?: any,
}

function OrderConfirm(props: propsType): React.JSX.Element {

    return (
        <CardView
            style={styles.cardStyle}
            borderRadius={4}
            cardElevation={4}
            cornerRadius={4}>
            <View>
                <View style={styles.viewHeader}>
                    <Text style={styles.txtTableTitle}>{props.name}</Text>
                </View>

                <View style={styles.lineView} />

                <View style={styles.viewHeader}>
                    <View style={styles.viewFlex}>
                        <Text style={styles.txtSubTitle}>Line</Text>
                    </View>
                    <View style={styles.viewFlex1}>
                        <Text style={styles.txtSubTitle}>Desc</Text>
                    </View>
                    <View style={styles.viewRight}>
                        <Text style={styles.txtSubTitle}>Qty</Text>
                    </View>
                    <View style={styles.viewRight}>
                        <Text style={styles.txtSubTitle}>Price</Text>
                    </View>
                </View>

                <FlatList
                    data={props.data}
                    contentContainerStyle={{
                        paddingTop: 5,
                    }}
                    renderItem={({ item, index }) => <OrderConfirmCard item={item} index={index} type={props.type} />}
                    keyExtractor={(item, index) => index.toString()}
                />

                <View style={styles.viewHeader}>
                    <View style={styles.viewFlex} />
                    <View style={styles.viewFlex1}>
                        <Text style={styles.txtSubTitle}>Total</Text>
                    </View>
                    <View style={styles.viewRight}>
                        <Text style={styles.txtSubTitle}>{props.total}</Text>
                    </View>
                    <View style={styles.viewRight}>
                        <Text style={styles.txtSubTitle}>${props.totalValue}</Text>
                    </View>
                </View>
            </View>
        </CardView>
    );
}

export default OrderConfirm;