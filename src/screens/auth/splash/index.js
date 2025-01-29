import React, { Component, useEffect, useState } from 'react';
import { Wrapper, Logos } from '../../../components';
import {
  appImages,
  appStyles,
  appSvgs,
  colors,
  responsiveHeight,
  responsiveWidth,
} from '../../../services';

import DeviceInfo from 'react-native-device-info';
import { height, width, totalSize } from 'react-native-dimension'
const isTablet = DeviceInfo.isTablet();

function Splash() {
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(!Loading), 1500);
  }, []);


  return (
    <Wrapper isMain>
      {Loading ? (
        <Wrapper isImageBackground source={appImages.SplashBackgroundImage}>
          <Wrapper isCenter flex={1} backgroundColor={colors.windowTint}>
            <Wrapper
              animation={'fadeIn'}
              paddingHorizontalBase
              // backgroundColor={'red'}
              style={{
                height: responsiveHeight(47)
              }}>

              {isTablet ? <Logos.PrimaryTabletWhite /> :
               <Logos.PrimaryWhite />}

              {/* <Logos.PrimaryWhite /> */}

            </Wrapper>
          </Wrapper>
        </Wrapper>
      ) : (
        <Wrapper animation={'fadeIn'} flex={1} isCenter>
          {isTablet ? <Logos.PrimaryTablet /> : <Logos.Primary />}

          {/* <Logos.Primary /> */}

        </Wrapper>
      )}
    </Wrapper>
  );
}

export default Splash;