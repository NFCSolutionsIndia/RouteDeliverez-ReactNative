import React from 'react';
import { FlatList } from 'react-native'; 
import StoreCard from './StoreCard';

type propsType = {
    storeItems?: any,
    status?: any, 
    onPress?(item: any, index: any): void,
}

function StoreList(props: propsType) : React.JSX.Element
{ 
    return (
        <FlatList data={props.storeItems}
        contentContainerStyle={{
            paddingTop:15,
            paddingBottom: 30,
          }}
          showsVerticalScrollIndicator={false} 
          renderItem={({item, index}) => <StoreCard item={item} onPress={() => props.onPress ? props.onPress(item, index) : undefined }/>}
          keyExtractor={(item, index) => index.toString()}
           />
    );
}

export default StoreList;