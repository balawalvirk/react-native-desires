import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {
  appFonts,
  appIcons,
  appStyles,
  colors,
  fontSizes,
  responsiveHeight,
  responsiveWidth,
  sizes,
} from '../../services';
import {scale, verticalScale} from 'react-native-size-matters';
import {Wrapper, Text, Icons} from '..';

export const SwipableItem = ({
  item,
  onSwipeLeft,
  onSwipeRight,
  RightTitle,
  LeftTitle,
  SwipeTitle,
  BtnTitle,
  isAbsolute,
  swipeDistance = 100,
  swipableContainerStyles,
}) => {
  const handleSwipeLeft = () => {
    if (onSwipeLeft) {
      onSwipeLeft(item); // Pass the item or any relevant data
    }
  };

  const handleSwipeRight = () => {
    if (onSwipeRight) {
      onSwipeRight(item); // Pass the item or any relevant data
    }
  };

  const renderRightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-swipeDistance, -swipeDistance / 2, 0],
      outputRange: [2, 1, 0],
      extrapolate: 'clamp',
    });
    return (
      <TouchableOpacity onPress={handleSwipeRight} style={styles.rightAction}>
        <Animated.Text style={[styles.title, {transform: [{scale}]}]}>
          {RightTitle}
        </Animated.Text>
      </TouchableOpacity>
    );
  };

  const renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, swipeDistance / 2, swipeDistance],
      outputRange: [-20, 0, 0],
    });
    return (
      <TouchableOpacity onPress={handleSwipeLeft} style={styles.leftAction}>
        <Animated.Text
          style={[styles.title, {transform: [{translateX: trans}]}]}>
          {LeftTitle}
        </Animated.Text>
      </TouchableOpacity>
    );
  };

  return (
    <Wrapper style={styles.swipableItemMainView}>
      <Swipeable
        renderRightActions={onSwipeRight && renderRightActions}
        renderLeftActions={onSwipeLeft && renderLeftActions}
        onSwipeableOpen={onSwipeRight ? handleSwipeRight : handleSwipeLeft} // Call the appropriate function on swipe completion
        containerStyle={[{flex: 1}, swipableContainerStyles]}
        overshootRight={false}
        overshootLeft={false}>
        <View
          style={[
            {
              justifyContent: 'center',
              alignItems: 'center',
              //padding: 0,
              backgroundColor: colors.appPrimaryColor,
            },
          ]}>
          <Wrapper
            isAbsolute
            style={{top: 0, left: 0}}
            flexDirectionRow
            alignItemsCenter>
            <View style={styles.itemWrap}>
              <Text style={[styles.title, {color: colors.appPrimaryColor}]}>
                {SwipeTitle}
              </Text>
            </View>
            <Icons.Custom
              icon={appIcons.SwipeForward}
              containerStyle={{marginHorizontal: sizes.smallMargin}}
              size={scale(20)}
            />
          </Wrapper>
          <Wrapper
            isCenter
            style={[styles.swipableItemMainView, {backgroundColor: null}]}>
            <Text
              alignTextRight
              style={[
                styles.title,
                {
                  width: responsiveWidth(60),
                  paddingHorizontal: sizes.baseMargin,
                  // backgroundColor: 'green',
                },
              ]}>
              {BtnTitle}
            </Text>
          </Wrapper>
        </View>
      </Swipeable>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: fontSizes.medium,
    color: colors.appBgColor1,
    fontFamily: appFonts.appTextBold,
  },
  rightAction: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.appPrimaryColor,
    width: responsiveWidth(90),
    height: sizes.buttonHeight,
    borderRadius: responsiveWidth(100),
  },
  leftAction: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.appPrimaryColor,
    width: responsiveWidth(90),
    height: sizes.buttonHeight,
    borderRadius: responsiveWidth(100),
  },
  itemWrap: {
    backgroundColor: colors.appBgColor1,
    //width: scale(61),
    height: responsiveHeight(5),
    borderRadius: responsiveWidth(100),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(1),
    paddingHorizontal: scale(12),
  },
  swipableItemMainView: {
    height: responsiveHeight(5),
    marginHorizontal: sizes.baseMargin,
    //alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.appPrimaryColor,
    //width: responsiveWidth(90),
    height: sizes.buttonHeight,
    borderRadius: responsiveWidth(100),
    paddingHorizontal: scale(3),
    paddingVertical: verticalScale(3),
    overflow: 'hidden',
  },
});
