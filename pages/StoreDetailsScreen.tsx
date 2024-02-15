import React from 'react';
import { SafeAreaView } from 'react-native';
import CommonStyles from '../config/CommonStyle';
import HeaderTitle from '../components/HeaderTitle';
import { useNavigation } from '@react-navigation/native';

function StoreDetailsScreen(): React.JSX.Element {

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={CommonStyles.style.container}>
            <HeaderTitle title={CommonStyles.strings.store_details}
                backBtn={true} 
                onPress={() => goBack()} />
        </SafeAreaView>
    )
}

export default StoreDetailsScreen;