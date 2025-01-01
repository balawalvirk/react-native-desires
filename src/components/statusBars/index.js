import React from 'react';
import {StatusBar} from 'react-native';
import {colors} from '../../services';

export const Dark = ({StatusBarsColor}) => {
  return (
    <StatusBar
      translucent
      barStyle="dark-content"
      backgroundColor={StatusBarsColor ? StatusBarsColor : colors.transparent}
    />
  );
};

export const Light = ({StatusBarsColor}) => {
  return (
    <StatusBar
      translucent
      barStyle="light-content"
      // backgroundColor={colors.appBgColor6 + '40'}
      backgroundColor={StatusBarsColor ? StatusBarsColor : colors.transparent}
    />
  );
};
