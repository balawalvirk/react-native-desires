import React from 'react';
import {
  appIcons,
  appSvgs,
  responsiveHeight,
  responsiveWidth,
} from '../../services';
import * as Icons from '../icons';
import {Image} from 'react-native';
import {totalSize,height,width} from 'react-native-dimension'

export const Primary = ({size,height,width}) => {
  return <Icons.Svg svg={appSvgs.logo} height={height} width={width} size={size || responsiveWidth(50)} />;
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


export const PrimaryTablet = ({size,height,width}) => {
  return <Icons.Svg svg={appSvgs.logoTablet} height={height} width={width} size={totalSize(18)} />;
};

export const PrimaryTabletWhite = ({size}) => {
  return (
    <Icons.Svg svg={appSvgs.logoTabletWhite}  size={size??totalSize(18)} />
  );
};