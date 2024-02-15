import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from '../config/OrderConfigStyle';
import Images from '../config/Images';
import CardView from 'react-native-cardview';

type propsType = { 
    onPress?(item: any, index: any): void,
    status?: boolean,
    item?: any,
    index?: any
}

type State = { 
    statusValue: string
}

function OrderCard(props: propsType): React.JSX.Element {

    const state: State = {
        statusValue: ''
    }

    if (props.item.status == 1) {
        state.statusValue = 'New';
      } else if (props.item.status == 2) {
        state.statusValue = 'Updated';
      } else if (props.item.status == 4) {
        state.statusValue = 'Print';
      } else if (props.item.status == 7) {
        state.statusValue = 'Void';
      } else {
        state.statusValue = 'New';
      }

    return (
        <TouchableOpacity activeOpacity={1}
            onPress={() => {
                props.status ? ( props.onPress ? props.onPress(props.item, props.index) : undefined ) : null;
            }}>
            <CardView style={styles.cardView}
                borderRadius={4}
                cardElevation={4}
                cornerRadius={4}>
                <View style={styles.mainView}>
                    <View style={styles.flexView}>
                    <Text style={styles.txtTitle}>Order# {props.item.order_id}</Text> 
                    <View style={{flexDirection: 'row'}}>
                <Text style={styles.txtSubTitle}>
                  {props.item.storeDetails.storeName}
                </Text>
                <Text style={styles.txtStatus}>{state.statusValue}</Text>
                <Image source={Images.profile.right} style={styles.rightImg} />
              </View>
              <Text style={styles.txtAmount}>
                $ {Number(props.item.totalSaleValue).toFixed(2)}
              </Text>
               <Text style={styles.txtDate}>{props.item.created_date}</Text> 
                    </View> 
                </View>
            </CardView>
        </TouchableOpacity>
    );
}

export default OrderCard;

// const formatDate = (date: Date) => {
//     const month = date.getMonth() + 1; // getMonth returns zero-based months, so adding 1
//     const day = date.getDate();
//     const year = date.getFullYear();
  
//     // Pad single-digit month and day with leading zeros
//     const formattedMonth = month < 10 ? `0${month}` : `${month}`;
//     const formattedDay = day < 10 ? `0${day}` : `${day}`;
  
//     return `${formattedMonth}/${formattedDay}/${year}`;
//   };

