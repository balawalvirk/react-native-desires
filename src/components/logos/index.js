import React from 'react';
import {
  appIcons,
  appSvgs,
  responsiveHeight,
  responsiveWidth,
} from '../../services';
import * as Icons from '../icons';
import {Image} from 'react-native';

export const Primary = ({size}) => {
  return <Icons.Svg svg={appSvgs.logo} size={size || responsiveWidth(50)} />;
};

export const PrimaryWhite = ({size}) => {
  return (
    <Icons.Svg svg={appSvgs.logo_white} size={size || responsiveWidth(50)} />
  );
};
export const CustomBlack = ({Height, Width, containerStyling}) => {
  return (
    <Image
      source={appIcons.LogoWithBlackText}
      style={{
        height: Height ? Height : responsiveHeight(6),
        width: Width ? Width : responsiveWidth(35),
        // backgroundColor: 'green',
        resizeMode: 'contain',
        ...containerStyling,
      }}
    />
  );
};

export const CustomWhite = ({size}) => {
  return (
    <Icons.Svg svg={appSvgs.logo_white} size={size || responsiveWidth(50)} />
  );
};
