import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';

interface OrderState {
    storeDetails: {};
    orderDetails: any[];
    totalSaleQty: string;
    totalBuybackQty: string;
    totalDamagedQty: string;
    totalSaleValue: string;
    totalBuybackValue: string;
    totalDamagedValue: string;
    order_id: string;
    invoice_id: string;
    invoice_id1: string;
    created_date_time: string;
    modified_date_time: string;
    created_date: string;
    status: number;
    totalOrderValue: number;
}

const initialState: OrderState = {
    storeDetails: {},
    orderDetails: [],
    totalSaleQty: '',
    totalBuybackQty: '',
    totalDamagedQty: '',
    totalSaleValue: '',
    totalBuybackValue: '',
    totalDamagedValue: '',
    order_id: '',
    invoice_id: '',
    invoice_id1: '',
    created_date_time: '',
    modified_date_time: '',
    created_date: '',
    status: 0,
    totalOrderValue: 0
};

const orderCreationSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder(state, action: PayloadAction<any>) {

            const min = 1;
            const max = 10000;
            const rand = min + Math.random() * (max - min);

            state.storeDetails = action.payload.storeDetails;
            state.orderDetails = action.payload.cartItems;
            state.totalSaleQty = action.payload.cartItems.reduce(function (prev: number, current: any) {
                return prev + current.saleQty;
            }, 0);
            state.totalBuybackQty = action.payload.cartItems.reduce(function (prev: number, current: any) {
                return prev + current.buybackQty;
            }, 0);
            state.totalDamagedQty = action.payload.cartItems.reduce(function (prev: number, current: any) {
                return prev + current.damagedQty;
            }, 0);
            state.totalSaleValue = action.payload.cartItems.reduce(function (prev: number, current: any) {
                if (current.unitPrice == 0) {
                    return prev + current.saleQty * current.price;
                } else {
                    return prev + current.saleQty * current.unitPrice;
                }
            }, 0);
            state.totalBuybackValue = action.payload.cartItems.reduce(function (prev: number, current: any) {
                if (current.buyBackUnitPrice == 0) {
                    return prev + current.buybackQty * current.buyBackPrice;
                } else {
                    return prev + current.buybackQty * current.buyBackUnitPrice;
                }
            }, 0);
            state.totalDamagedValue = action.payload.cartItems.reduce(function (prev: number, current: any) {
                if (current.damegedUnitPrice == 0) {
                    return prev + current.damagedQty * current.damagedPrice;
                } else {
                    return prev + current.damagedQty * current.damegedUnitPrice;
                }
            }, 0);

            state.order_id = action.payload.userId + '-' + moment().utc().format('DDMMYYYYHHmmss') + '-' + Math.round(rand);
            state.invoice_id = action.payload.userId + '-' + moment().utc().format('DDMMYYYYHHmmss') + '-' + Math.round(rand + 1);
            state.invoice_id1 = action.payload.userId + '-' + moment().utc().format('DDMMYYYYHHmmss') + '-' + Math.round(rand + 2);
            state.created_date_time = moment().utc().format('DD/MM/YYYY HH:mm:ss');
            state.modified_date_time = '';
            state.created_date = moment().utc().format('MM/DD/YYYY');
            state.status = 1;
            state.totalOrderValue = Number(
                (
                    state.totalSaleValue +
                    state.totalBuybackValue +
                    state.totalDamagedValue
                )
            );

        }
    },
});

export const { addOrder } = orderCreationSlice.actions;
export default orderCreationSlice.reducer;