import { Component } from "react";
import Toast from 'react-native-simple-toast';
import NetworkUtils from '../utils/NetworkUtils';
import DefaultPreference from 'react-native-default-preference';
import { initializeDB } from '../database/database';
import RequestPUT from '../services/PUT';
import ServiceConst from '../services/ServiceConst';

export default class OfflineSync extends Component {

    static async SyncStart() {
        const isConnected = await NetworkUtils.isNetworkAvailable();
        if (isConnected) {
            //To sync Data
            try {
                const value = await DefaultPreference.get('SyncData');

                var syncValue: string | null | undefined = '';

                if (value != '') {
                    syncValue = value;
                }

                if (syncValue == "1") {
                    this.runOfflineSync();
                } 
                
            } catch (e) {
                console.error(e);
            }
        } else {
            Toast.show('Please connect to Internet to Sync the data', 5);
        }
    }

    static async SyncForce() {
        const isConnected = await NetworkUtils.isNetworkAvailable();
        if (isConnected) {
            //To sync Data
            try {
                this.runOfflineSync();
            } catch (e) {
                console.error(e);
            }
        } else {
            Toast.show('Please connect to Internet to Sync the data', 5);
        }
    }

    static async runOfflineSync() {

        const value = await DefaultPreference.get('userData');

        if (value !== null && value !== undefined && typeof value === 'string') {
            if (value.trim() !== '') {
                try {
                    var udata = JSON.parse(value);
                    var db = await initializeDB(udata.results.userName + udata.results.userId, udata.results.password);

                    if (db != null) {
                        const collection = db.rms;

                        console.log('Getting orders from couchdb');

                        var doc = await collection
                            .findOne()
                            .where('_id')
                            .eq('colOrders')
                            .exec();

                        console.log('doc = ' + doc);

                        var colOrders = doc.toJSON();
                        var data = colOrders.data;

                        var finalData = [];
                        var ordersFinalData = [];

                        let finalobject: fObject = {
                            CreateBy: '',
                            modifyBy: '',
                            createDate: new Date(),
                            modifyDate: new Date(),
                            StatusId: '',
                            RouteID: '',
                            StoreID: '',
                            OrderGuID: '',
                            OrderDetails: []
                        }

                        var saleobj = {};
                        var buybackobj = {};

                        console.log('Data length and Data :-', data.length);

                        for (let i = 0; i < data.length; i++) {
                            ordersFinalData = [];
                            for (let j = 0; j < data[i].orderDetails.length; j++) {
                                if (data[i].orderDetails[j].saleQty > 0) {
                                    saleobj = {
                                        IsSale: true,
                                        ProductID:
                                            data[i].orderDetails[j].productID != null
                                                ? data[i].orderDetails[j].productID
                                                : +data[i].orderDetails[j].productId,
                                        Unit: Number(data[i].orderDetails[j].saleQty),
                                        Unitprice:
                                            data[i].orderDetails[j].unitPrice == 0
                                                ? data[i].orderDetails[j].price
                                                : data[i].orderDetails[j].unitPrice,
                                        InvoiceNo: Number(data[i].invoice_id.split('-')[2]),
                                        OrderTypeId: data[i].orderDetails[j].unitPrice == 0 ? 1 : 2,
                                        discountId:
                                            data[i].orderDetails[j].discountId == 0
                                                ? null
                                                : data[i].orderDetails[j].discountId,
                                    };
                                    ordersFinalData.push(saleobj);
                                }
                                if (
                                    data[i].orderDetails[j].buybackQty > 0 ||
                                    data[i].orderDetails[j].damagedQty > 0
                                ) {
                                    buybackobj = {
                                        IsSale: false,
                                        ProductID:
                                            data[i].orderDetails[j].productID != null
                                                ? data[i].orderDetails[j].productID
                                                : +data[i].orderDetails[j].productId,
                                        BuyBackUnit: Number(data[i].orderDetails[j].buybackQty),
                                        BuyBackUnitprice:
                                            data[i].orderDetails[j].buyBackUnitPrice == 0
                                                ? data[i].orderDetails[j].buyBackPrice
                                                : data[i].orderDetails[j].buyBackUnitPrice,
                                        DamagedUnit: Number(data[i].orderDetails[j].damagedQty),
                                        DamagedUnitPrice:
                                            data[i].orderDetails[j].damegedUnitPrice == 0
                                                ? data[i].orderDetails[j].damagedPrice
                                                : data[i].orderDetails[j].damegedUnitPrice,
                                        InvoiceNo: Number(data[i].invoice_id1.split('-')[2]),
                                        OrderTypeId: data[i].orderDetails[j].buyBackUnitPrice == 0 ? 1 : 2,
                                        discountId:
                                            data[i].orderDetails[j].discountId == 0
                                                ? null
                                                : data[i].orderDetails[j].discountId,
                                    };
                                    ordersFinalData.push(buybackobj);
                                }

                                console.log('Sale - buy back Data', saleobj, buybackobj);
                            }

                            const currentDate = new Date();

                            finalobject.CreateBy = data[i].storeDetails.userId;
                            finalobject.modifyBy = data[i].modified_date_time == '' ? 0 : data[i].storeDetails.userId;
                            finalobject.createDate = data[i].created_date_time == '' ? currentDate : new Date(data[i].created_date_time); 
                            finalobject.modifyDate = data[i].modified_date_time == '' ? currentDate : new Date(data[i].modified_date_time);
                            finalobject.StatusId = data[i].status;
                            finalobject.RouteID = data[i].storeDetails.routeId;
                            finalobject.StoreID = data[i].storeDetails.storeId;
                            finalobject.OrderGuID = data[i].order_id;
                            finalobject.OrderDetails = ordersFinalData;

                            finalData.push(finalobject);
                        }

                        console.log('Final Data');
                        console.log('Final Data', JSON.stringify(finalData));
                        console.log('Offline sync Before API');
                        this.offlinesyncData(finalData);
                    }
                    else {
                        console.log('Out', db);
                    }

                }
                catch (error) {
                    console.error('Invalid JSON:', error);
                }
            }
        }

    }

    static offlinesyncData(finalData: any) {
        console.log('Offline sync API Called');
        RequestPUT(
            `${ServiceConst.URLS.development}api/order/OfflineToOnlineOrderSync`,
            finalData,
            this.syncResponse,
            this,
        );
    }

    static syncResponse = (response: any) => {
        DefaultPreference.set('SyncData', '0');
        console.log('Sync Response', response, response.code, response.message);
        Toast.show(response.message, 5); 
      };

}

type fObject = {
    CreateBy: string,
    modifyBy: string,
    createDate: Date,
    modifyDate: Date,
    StatusId: string,
    RouteID: string,
    StoreID: string,
    OrderGuID: any,
    OrderDetails: {}[]
}

