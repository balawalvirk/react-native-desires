import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {MenuProvider} from 'react-native-popup-menu';
export default function App() {
  return (
    <MenuProvider>
      <GestureHandlerRootView>
        <Provider store={store}>
          <SafeAreaProvider style={{flex: 1}}>
            <Navigation />
          </SafeAreaProvider>
        </Provider>
      </GestureHandlerRootView>
    </MenuProvider>
  );
}
