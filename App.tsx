import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../RouteDeliverEz/pages/SignIn';
import ForgotScreen from '../RouteDeliverEz/pages/ForgotScreen';
import MoreScreen from '../RouteDeliverEz/pages/MoreScreen';
import RoutesScreen from '../RouteDeliverEz/pages/RoutesScreen';
import OrdersScreen from '../RouteDeliverEz/pages/OrdersScreen';
import StoresScreen from '../RouteDeliverEz/pages/StoresScreen';
import ProductScreen from '../RouteDeliverEz/pages/ProductScreen';
import TransferScreen from '../RouteDeliverEz/pages/TransferScreen';
import ReportScreen from '../RouteDeliverEz/pages/ReportScreen';
import CreateOrder from '../RouteDeliverEz/pages/CreateOrder';
import StoreDetailsScreen from '../RouteDeliverEz/pages/StoreDetailsScreen';
import CartScreen from '../RouteDeliverEz/pages/CartScreen';
import CreateOrderConfirmationScreen from '../RouteDeliverEz/pages/CreateOrderConfirmationScreen';
import OrderSuccess from '../RouteDeliverEz/pages/OrderSuccess';
import PrinterScreen from '../RouteDeliverEz/pages/PrinterScreen';
import OrderDetailsScreen from '../RouteDeliverEz/pages/OrderDetailsScreen';

import { Provider } from 'react-redux';
import store from '../RouteDeliverEz/redux/store';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (
    <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name='SignIn' component={SignIn} ></Stack.Screen>
          <Stack.Screen name='ForgotScreen' component={ForgotScreen} ></Stack.Screen>
          <Stack.Screen name='MoreScreen' component={MoreScreen} ></Stack.Screen>
          <Stack.Screen name='RoutesScreen' component={RoutesScreen} ></Stack.Screen>
          <Stack.Screen name='OrdersScreen' component={OrdersScreen} ></Stack.Screen>
          <Stack.Screen name='StoresScreen' component={StoresScreen} ></Stack.Screen>
          <Stack.Screen name='ProductScreen' component={ProductScreen} ></Stack.Screen>
          <Stack.Screen name='TransferScreen' component={TransferScreen} ></Stack.Screen>
          <Stack.Screen name='ReportScreen' component={ReportScreen} ></Stack.Screen>
          <Stack.Screen name='CreateOrder' component={CreateOrder} ></Stack.Screen>
          <Stack.Screen name='StoreDetailsScreen' component={StoreDetailsScreen} ></Stack.Screen>
          <Stack.Screen name='CartScreen' component={CartScreen} ></Stack.Screen>
          <Stack.Screen name='CreateOrderConfirmationScreen' component={CreateOrderConfirmationScreen} ></Stack.Screen>
          <Stack.Screen name='OrderSuccess' component={OrderSuccess} ></Stack.Screen> 
          <Stack.Screen name='PrinterScreen' component={PrinterScreen} ></Stack.Screen> 
          <Stack.Screen name='OrderDetailsScreen' component={OrderDetailsScreen} ></Stack.Screen> 
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
