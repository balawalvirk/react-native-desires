import React, {useEffect, useRef, useState} from 'react';
import {Animated, ImageBackground, StyleSheet} from 'react-native';
import {responsiveHeight, responsiveWidth} from '../../services';
import {BlurView} from '@react-native-community/blur';

export const AnimatedView = ({
  NotFlexed,
  isAbsolute,
  height,
  width,
  children,
  onPressStart,
  onPressClosed,
  onStartDuration,
  onReturnDuration,
  zIndex,
  isCenter,
}) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const handleStartAnimation = () => {
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: width ? -width : 0,
        duration: onStartDuration ? onStartDuration : 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: height ? -height : 0,
        duration: onStartDuration ? onStartDuration : 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleReturnAnimation = () => {
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: 0,
        duration: onReturnDuration ? onReturnDuration : 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: onReturnDuration ? onReturnDuration : 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  if (onPressStart) handleStartAnimation();
  if (onPressClosed) handleReturnAnimation();

  return (
    <Animated.View
      style={[
        !NotFlexed && {
          flex: 1,
        },
        isAbsolute && {
          position: 'absolute',
          //top: 0,
        },
        {
          transform: [{translateX}, {translateY}],
        },
        zIndex && {zIndex: zIndex},
      ]}>
      {children}
    </Animated.View>
  );
};

export const AnimatedColorView = ({
  NotFlexed,
  isCenter,
  height,
  width,
  children,
  onPressStart,
  onPressClosed,
  onStartDuration,
  onReturnDuration,
}) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const colorAnim = useRef(new Animated.Value(0)).current;

  const handleStartAnimation = () => {
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: width ? -width : 0,
        duration: onStartDuration ? onStartDuration : 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: height ? -height : 0,
        duration: onStartDuration ? onStartDuration : 500,
        useNativeDriver: true,
      }),
      Animated.timing(colorAnim, {
        toValue: 1,
        duration: onStartDuration ? onStartDuration : 250,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleReturnAnimation = () => {
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: 0,
        duration: onReturnDuration ? onReturnDuration : 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: onReturnDuration ? onReturnDuration : 500,
        useNativeDriver: true,
      }),
      Animated.timing(colorAnim, {
        toValue: 0,
        duration: onReturnDuration ? onReturnDuration / 2 : 250,
        useNativeDriver: true,
      }),
    ]).start();
  };

  if (onPressStart) handleStartAnimation();
  if (onPressClosed) handleReturnAnimation();

  const backgroundColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(17, 17, 17, 0.8)', 'rgba(0, 189, 189, 0.25)'], // Start and end colors
  });

  return (
    <Animated.View
      style={[
        !NotFlexed && {
          flex: 1,
        },
        isCenter && {
          justifyContent: 'center',
          alignItems: 'center',
        },

        {
          transform: [{translateX}, {translateY}],
          backgroundColor,
          height: responsiveHeight(100),
          width: responsiveWidth(200),
        },
      ]}>
      {children}
    </Animated.View>
  );
};

export const AnimatedBackgroundView = ({
  NotFlexed,
  Height,
  Width,
  ImageblurRadius,
  backgroundImageHeight,
  backgroundImageWidth,
  backgroundImage,
  onPressStart,
  onPressClosed,
  onStartDuration,
  onReturnDuration,
  children,
}) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const handleStartAnimation = () => {
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: Width ? -Width : 0,
        duration: onStartDuration ? onStartDuration : 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: Height ? -Height : 0,
        duration: onStartDuration ? onStartDuration : 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleReturnAnimation = () => {
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: 0,
        duration: onReturnDuration ? onReturnDuration : 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: onReturnDuration ? onReturnDuration : 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  if (onPressStart) handleStartAnimation();
  if (onPressClosed) handleReturnAnimation();

  return (
    <Animated.View
      style={[
        !NotFlexed && {
          flex: 1,
        },
        {
          transform: [{translateX}, {translateY}],
        },
      ]}>
      <ImageBackground
        source={backgroundImage}
        style={[
          !NotFlexed && {flex: 1},
          //styles.imageBackground,
          backgroundImageHeight && {
            height: backgroundImageHeight,
          },
          backgroundImageWidth && {
            width: backgroundImageWidth,
          },
        ]}
        resizeMode="cover"
        blurRadius={ImageblurRadius && ImageblurRadius}>
        {children}
      </ImageBackground>
    </Animated.View>
  );
};

export const ZoomableBackgroundView = ({
  NotFlexed,
  Height,
  Width,
  ImageblurRadius,
  ImageStyling,
  backgroundImageHeight,
  backgroundImageWidth,
  backgroundImage,
  onPressStart,
  onPressClosed,
  onStartDuration,
  onReturnDuration,
  ZoomInDuration,
  ZoomOutDuration,
  StartZoomIn,
  StartZoomOut,
  ZoomIn,
  children,
}) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current; // For zooming

  const handleStartAnimation = () => {
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: Width ? -Width : 0,
        duration: onStartDuration ? onStartDuration : 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: Height ? -Height : 0,
        duration: onStartDuration ? onStartDuration : 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleReturnAnimation = () => {
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: 0,
        duration: onReturnDuration ? onReturnDuration : 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: onReturnDuration ? onReturnDuration : 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleZoomInAnimation = () => {
    Animated.timing(scaleAnim, {
      toValue: ZoomIn, // Zoom in to 1.5 times the original size
      duration: ZoomInDuration ? ZoomInDuration : 500,
      useNativeDriver: true,
    }).start();
  };
  const handleZoomOutAnimation = () => {
    Animated.timing(scaleAnim, {
      toValue: 1, // Reset to original size
      duration: ZoomOutDuration ? ZoomOutDuration : 500,
      useNativeDriver: true,
    }).start();
  };

  if (onPressStart) handleStartAnimation();

  if (onPressClosed) handleReturnAnimation();

  if (StartZoomIn) handleZoomInAnimation();
  if (StartZoomOut) handleZoomOutAnimation();

  return (
    <Animated.View
      style={[
        !NotFlexed && {
          flex: 1,
        },
        {
          transform: [{translateX}, {translateY}, {scale: scaleAnim}], // Apply zoom
        },
      ]}>
      <ImageBackground
        source={backgroundImage}
        style={[
          !NotFlexed && {flex: 1},
          backgroundImageHeight && {
            height: backgroundImageHeight,
          },
          backgroundImageWidth && {
            width: backgroundImageWidth,
          },
          ImageStyling,
        ]}
        resizeMode="cover"
        blurRadius={ImageblurRadius && ImageblurRadius}>
        {children}
      </ImageBackground>
    </Animated.View>
  );
};
