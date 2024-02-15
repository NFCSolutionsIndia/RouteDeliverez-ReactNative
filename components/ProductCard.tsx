import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native'; 
import CommonStyles from '../config/CommonStyle';
import styles from '../config/ProductCardStyle'; 
import CardView from 'react-native-cardview'; 

type propsType = {
    onPress?(item: any, index: any): void,
    status?: boolean,
    item?: any,
    index?: any
}

function ProductCard(props: propsType): React.JSX.Element {

    return (
        <CardView style={styles.cardView}
            borderRadius={4}
            cardElevation={4}
            cornerRadius={4}>

            {props.status ? (
                <View style={styles.mainView}>
                    <View style={styles.flexView}>
                        <View style={styles.viewRow}>
                            <View>
                                <Text style={styles.txtTitle}>
                                    {props.item.number + ' - ' + props.item.productName}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.viewRow}>
                            <View>
                                <Text style={styles.txtSubTitle}>
                                    Stock :{' '}
                                    {props.item.availBoxes * props.item.piecesPerBox + props.item.availPieces}
                                </Text>
                            </View>
                            <View style={styles.marginFlex}>
                                <Text style={styles.txtSubQty}>
                                    Boxes : {props.item.availBoxes} & Pieces : {props.item.availPieces}{' '}
                                    (PiecesPerBox : {props.item.piecesPerBox})
                                </Text>
                            </View>
                        </View>

                        <View style={styles.viewRow}>
                            <View>
                                <Text style={styles.txtPrice}>$ {props.item.price.toFixed(2)}</Text>
                            </View>
                            <View style={styles.marginFlex}>
                                <TouchableOpacity activeOpacity={0.9}
                                    style={{
                                        top: 3,
                                        borderRadius: 2, paddingLeft: 10, paddingRight: 10, paddingTop: 3, paddingBottom: 3,
                                        backgroundColor: CommonStyles.colors.orange,
                                        alignItems: 'center', justifyContent: 'center',
                                        shadowColor: "#FFFFFF", shadowOpacity: 0.8, shadowRadius: 2,
                                        shadowOffset: { height: 1, width: 1 }
                                    }}
                                    onPress={() => {
                                        props.status ? (props.onPress ? props.onPress(props.item, props.index) : undefined) : null;
                                    }}  >
                                    <Text style={{ color: CommonStyles.colors.white, fontFamily: CommonStyles.fonts.FONT_SEMI_BOLD, fontWeight: 'bold', fontSize: 12 }}>
                                        ADD
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
            ) : (
                <View style={styles.flexView}>
                    <View style={styles.viewRow}>
                        <View>
                            <Text style={styles.txtTitle}>
                                {props.item.number + ' - ' + props.item.productName}
                            </Text>
                        </View>
                        <View style={styles.viewRow}>
                            <View>
                                <Text style={styles.txtSubTitle}>
                                    Stock :{' '}
                                    {props.item.availBoxes != null
                                        ? props.item.availBoxes * props.item.piecesPerBox + props.item.availPieces
                                        : props.item.closingBoxes * props.item.piecesPerBox + props.item.closingPieces}
                                </Text>
                            </View>
                            <View style={styles.marginFlex}>
                                <Text style={styles.txtSubQty}>
                                    Boxes :{' '}
                                    {props.item.availBoxes != null
                                        ? props.item.availBoxes
                                        : props.item.closingBoxes}{' '}
                                    & Pieces :{' '}
                                    {props.item.availPieces != null
                                        ? props.item.availPieces
                                        : props.item.closingPieces}{' '}
                                    (PiecesPerBox : {props.item.piecesPerBox})
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.txtPrice}>$ {props.item.price.toFixed(2)}</Text>
                    </View>
                </View>
            )}

        </CardView>
    );
}

export default ProductCard;


