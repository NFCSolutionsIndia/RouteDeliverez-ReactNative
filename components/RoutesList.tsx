import React from 'react';
import { FlatList } from 'react-native';
import RoutesCard from '../components/RoutesCard'

type propsType = {
    data?: any,
    status?: any,
    onPress?(item: any, index: any): void,
}

function RoutesList(props: propsType): React.JSX.Element {
    return (
        <FlatList data={props.data}
            contentContainerStyle={{
                paddingTop: 15,
                paddingBottom: 30,
            }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => <RoutesCard item={item} status={props.status} onPress={() => props.onPress ? props.onPress(item, index) : undefined} />}
            keyExtractor={(item, index) => index.toString()}
        />
    );
}

export default RoutesList;