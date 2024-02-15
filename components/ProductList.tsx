import React from 'react';
import { FlatList } from 'react-native'; 
import ProductCard from './ProductCard';

type propsType = {
    data?: any,
    status?: any,
    onPress?(item: any, index: any): void,
}

function ProductList(props: propsType) : React.JSX.Element
{ 
    return (
        <FlatList data={props.data}
        refreshing = {true}
        contentContainerStyle={{
            paddingBottom: 80,
          }}
          showsVerticalScrollIndicator={false} 
          renderItem={({item, index}) => <ProductCard item={item} index={index} status={props.status} onPress={() => props.onPress ? props.onPress(item, index) : undefined }/>}
          keyExtractor={(item, index) => index.toString()}
           />
    );
}

export default ProductList;