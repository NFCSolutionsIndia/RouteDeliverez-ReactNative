import React from 'react';
import { FlatList } from 'react-native';
import CartCard from './CartCard';

type propsType = {
    data?: any,
    status?: any,
    onEditPress?(item: any, index: any): void,
    onDeletePress?(item: any, index: any): void,
}

function CartList(props: propsType): React.JSX.Element {
    return (
        <FlatList
            data={props.data}
            contentContainerStyle={{
                paddingBottom: 80,
            }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <CartCard
                    item={item}
                    index={index}
                    onEditPress={() => props.onEditPress ? props.onEditPress(item, index) : undefined}
                    onDeletePress={() => props.onDeletePress ? props.onDeletePress(item, index) : undefined}
                />
            )}
            keyExtractor={(item, index) => index.toString()}
        // ItemSeparatorComponent={this.renderSeparator}
        />
    );
}

export default CartList;