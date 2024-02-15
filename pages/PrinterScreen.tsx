import React, { useState } from 'react';
import Images from '../config/Images';
import { Text, View, SafeAreaView, Image, TouchableOpacity, NativeModules, FlatList, Platform } from 'react-native';
import CommonStyles from '../config/CommonStyle';
import HeaderTitle from '../components/HeaderTitle';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../config/PrinterStyle';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { StarPRNT } from 'react-native-star-prnt-fork';
import CardView from 'react-native-cardview';

type propsType = {
    odr?: any;
}

function PrinterScreen(props: propsType): React.JSX.Element {

    const orderState = useSelector((state: RootState) => state.order);
    const [show, setShow] = useState(0);
    const EmulationPrinter = 'EscPosMobile';

    const { StarPRNTManager } = NativeModules;

    const dispatchs = useDispatch();
    const navigation = useNavigation();
    const route = useRoute();
    var storeParams = route?.params as any;

    const goBack = () => {
        navigation.goBack();
    }

    const goHome = () => {
        navigation.navigate('MoreScreen' as never);
    }

    const next_routeclicked = () => {
        navigation.navigate(({ key: 'RoutesScreen', name: 'RoutesScreen', params: { createOrder: true } }) as never);
    }

    const discovery = async () => {
        console.log('Print');

        try {
            let printers = await StarPRNT.portDiscovery('Bluetooth');
            console.log('printers = ' + JSON.stringify(printers), printers[0].portName);

            storeParams.text = printers.toString();
            storeParams.data = printers;

            setShow(1);

        } catch (e) {
            console.error(e);
        }

    }

    const connect = (item: any) => { 

      //  console.log('item', item);
       // console.log('portName', item.portName);
     //   console.log(EmulationPrinter);

        try {
            var isConnected = StarPRNT.connect(
                "00:15:0E:E3:14:30",
                EmulationPrinter,
                false,
            );
            console.log('isConnected - ', isConnected); // Printer Connected!
            if (isConnected) {
                console.log('printerprnt is connected, start printing', isConnected);

                print1(item);

            } else {
                console.log('printerprnt is not connected', isConnected);
            }
        } catch (e) {
            console.error(e);
        }

    }

    let commandsxxx: {
        append: string;
    }[];

    const print1 = (item: any) => {

      //  console.log('*** print screen order data - print1 - odr ***  ', storeParams?.odr);

    //    var printString = JSON.parse(JSON.stringify(storeParams?.odr));
 
        const commands: Printing = {
            details: []
        };

        //commandsxxx.push({append: 'dd'});
        
        commands.details.push({append: '\r\n' + 
        '\r\n' +
        '---------------------------------------------------------------------' });

        console.log('*** print receipt ***  ', commands.details);
        if (Platform.OS === 'android') {
            try {

                console.log('details', commands.details);
              //  console.log('item.portName', item.portName);

              var c =  StarPRNT.print(EmulationPrinter, commands.details, "00:15:0E:E3:14:30");

              console.log('ffffffff', c);
 
                console.log('***** successfully printed............SS.......'); // Success!
                StarPRNT.disconnect();
            } catch (e) {
                console.error(e);
            }
        } else {
            try {
                var printResult = StarPRNT.print(EmulationPrinter, commands.details);
                StarPRNT.disconnect();
                console.log('***** successfully printed.', printResult, item.portName); // Success!
            } catch (e) {
                console.error(e);
            }
        }

    }

    return (
        <SafeAreaView style={styles.container}>
            <HeaderTitle
                title={CommonStyles.strings.printer}
                backBtn={true}
                homeBtn={true}
                onPress={goBack}
                onHomePress={goHome}
            />

            <View style={styles.mainView}>
                <View style={CommonStyles.style.curveView}>
                    {show == 1 ? (
                        <FlatList
                            data={storeParams?.data}
                            contentContainerStyle={{
                                paddingTop: 50,
                                paddingBottom: 30,
                            }}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={(item: any) => connect(item)}
                                >
                                    <CardView
                                        style={styles.cardView}
                                        borderRadius={4}
                                        cardElevation={4}
                                        cornerRadius={4}>
                                        <View style={styles.mainView}>
                                            <Text style={styles.titleText}>{item.modelName}</Text>
                                        </View>
                                    </CardView>
                                </TouchableOpacity>
                            )} 
                        />
                    ) : (
                        <View style={CommonStyles.style.center}>

                            <TouchableOpacity activeOpacity={0.9}
                                style={{
                                    height: 45, borderRadius: 4, width: 80,
                                    backgroundColor: CommonStyles.colors.themeColor, marginTop: 10,
                                    alignItems: 'center', justifyContent: 'center',
                                    shadowColor: "#000000", shadowOpacity: 0.8, shadowRadius: 2,
                                    shadowOffset: { height: 1, width: 1 }
                                }}
                                onPress={discovery} >
                                <Text style={{ color: CommonStyles.colors.white, fontFamily: CommonStyles.fonts.FONT_REGULAR, fontSize: 15 }}>
                                    Print
                                </Text>
                            </TouchableOpacity>

                        </View>
                    )}
                </View>
                <View style={styles.marginFlex}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={next_routeclicked}>
                        <View style={styles.subFlexView1}>
                            <Image source={Images.profile.routes} style={styles.editImg} />
                            <Text style={styles.editTxt}>Next Customer</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );

}

export default PrinterScreen;

interface Printing {
    details: any[]; 
}
