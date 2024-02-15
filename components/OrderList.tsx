import React from 'react';
import { FlatList } from 'react-native'; 
import OrderCard from './OrderCard';

type propsType = {
    data?: any,
    status?: any, 
    onPress?(item: any, index: any): void,
}

function OrderList(props: propsType) : React.JSX.Element
{ 
    return (
        <FlatList data={props.data}
        contentContainerStyle={{
            paddingTop:15,
            paddingBottom: 30,
          }}
          showsVerticalScrollIndicator={false} 
          renderItem={({item, index}) => <OrderCard item={item} index={index} status={props.status} onPress={() => props.onPress ? props.onPress(item, index) : undefined} />}
          keyExtractor={(item, index) => index.toString()}
           />
    );
}

export default OrderList;