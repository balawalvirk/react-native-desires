import React from 'react';
import {View} from 'react-native';
import {colors} from '../../services';

export function Horizontal({style, height, width, color}) {
  return (
    <View
      style={[
        {
          height: height ? height : 0.5,
          width: width || null,
          backgroundColor: color ? color : colors.appBorderColor1,
        },
        style,
      ]}
    />
  );
}
