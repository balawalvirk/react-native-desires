import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes, headers} from '../../services';
import * as App from '../../screens/app';
import BottomTab from './bottomTab';
const AppStack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <AppStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routes.bottomTab}>
      <AppStack.Screen name={routes.bottomTab} component={BottomTab} />
      <AppStack.Screen name={routes.mySearch} component={App.MySearch} />
      <AppStack.Screen name={routes.buyCoins} component={App.BuyCoins} />
      <AppStack.Screen name={routes.appSetting} component={App.AppSetting} />
      <AppStack.Screen name={routes.position} component={App.Position} />
      <AppStack.Screen
        name={routes.subscription}
        component={App.Subscription}
      />
      <AppStack.Screen name={routes.support} component={App.Support} />
      <AppStack.Screen name={routes.postDetail} component={App.PostDetail} />
    </AppStack.Navigator>
  );
};

export default AppNavigation;
