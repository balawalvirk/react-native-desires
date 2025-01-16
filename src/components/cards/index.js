import React from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Touchable,
  View,
} from 'react-native';
import {
  appFonts,
  appIcons,
  appImages,
  colors,
  fontSizes,
  responsiveHeight,
  responsiveWidth,
  sizes,
} from '../../services';
import * as Icons from '../icons';
import Text from '../text';
import {BackgroundImage, Icon} from '@rneui/base';
import {withDecay} from 'react-native-reanimated';
import {LinearGradient} from 'react-native-linear-gradient';
import {Wrapper, Spacer} from '..';
import {scale, verticalScale} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native-gesture-handler';

export function IconTitleArrow({
  iconImage,
  iconName,
  iconType,
  iconSvg,
  title,
  onPress,
  left,
  right,
  invertColors,
  titleStyle,
  containerStyle,
  disableIconColor,
  arrowColor,
  iconContainerColor,
  ...props
}) {
  const defaulTintColor = !invertColors
    ? colors.appTextColor2
    : colors.appTextColor6;
  const defaulArrowColor =
    arrowColor || (!invertColors ? colors.appTextColor4 : colors.appTextColor6);
  const defaulBackgroundColor =
    iconContainerColor ||
    (!invertColors ? colors.appBgColor1 : colors.appBgColor6);
  return (
    <Pressable activeOpacity={1} onPress={onPress}>
      <Wrapper
        flexDirectionRow
        justifyContentSpaceBetween
        marginHorizontalBase
        alignItemsCenter
        style={containerStyle}
        {...props}>
        <Wrapper flexDirectionRow alignItemsCenter>
          {left ? (
            left
          ) : iconImage || iconName || iconSvg ? (
            <Icons.Button
              customIcon={iconImage}
              iconName={iconName}
              iconType={iconType}
              svgIcon={iconSvg}
              iconColor={!disableIconColor && defaulTintColor}
              iconSize={responsiveWidth(5)}
              buttonColor={defaulBackgroundColor}
              buttonSize={responsiveWidth(10)}
              isRound
              //buttonStyle={{ marginRight: sizes.marginHorizontal }}
            />
          ) : null}
          <Text isMedium style={[{color: defaulTintColor}, titleStyle]}>
            {title}
          </Text>
        </Wrapper>
        {right ? (
          right
        ) : (
          <Icon
            name="chevron-right"
            type="feather"
            color={defaulArrowColor}
            size={sizes.icons.medium}
          />
        )}
      </Wrapper>
    </Pressable>
  );
}

export function Profile({
  isVip,
  isGold,
  isStandard,
  CardImage,
  DeckSwiper,
  onPressHot,
  onPressNot,
  onPress,
}) {
  const styles = StyleSheet.create({
    backgroundLayer: {
      overflow: 'hidden',
    },
    BackgroundImageStyle: {
      height: responsiveHeight(60),
      width: responsiveWidth(90),
      overflow: 'hidden',
      borderRadius: responsiveWidth(4.5),
      resizeMode: 'cover',
    },
    mainContainer: {
      borderRadius: responsiveWidth(5),
      //backgroundColor: 'red',
      //overflow: 'hidden',
      // borderWidth: 2,
    },
    ProfileLabel: {
      height: sizes.doubleBaseMargin,
      width: responsiveWidth(40),
      position: 'absolute',
      top: responsiveHeight(2),
      left: -responsiveWidth(12),
      backgroundColor: colors.appBgColor1,
      //backgroundColor: 'red',
      transform: [{rotateZ: '310deg'}],
      //zIndex: 99,
    },
    LocationMainContainer: {
      position: 'absolute',
      top: responsiveHeight(2),
      right: 5,
      borderRadius: responsiveWidth(2),
      backgroundColor: colors.cloud,
    },
    IndexingMainContainer: {
      //height: responsiveHeight(10),
      paddingVertical: responsiveHeight(1.5),
      paddingHorizontal: responsiveWidth(2),
      //width: responsiveWidth(5),
      position: 'absolute',
      top: responsiveHeight(5),
      right: 0,
      backgroundColor: colors.cloud,
      borderTopLeftRadius: responsiveWidth(2),
      borderBottomLeftRadius: responsiveWidth(2),
    },
  });
  return (
    <Wrapper style={styles.backgroundLayer}>
      <Pressable
        onPress={() => {
          onPress && onPress();
        }}>
        <Wrapper
          style={[
            styles.mainContainer,
            isGold && {borderColor: colors.GoldLabelBackground, borderWidth: 2},
            isVip && {borderColor: colors.appPrimaryColor, borderWidth: 2},
            isStandard && {borderWidth: 0},
          ]}>
          <ImageBackground
            source={CardImage ? CardImage : appImages.image2}
            style={[
              styles.BackgroundImageStyle,
              DeckSwiper && {height: verticalScale(420)},
            ]}>
            <LinearGradient
              colors={['rgba(34, 24, 49, 0)', 'rgba(27, 36, 49, 0.85)']} // Adjust the colors as needed
              start={{x: 0, y: 0}} // Start from the top
              end={{x: 0, y: 1}} // End at the bottom
              style={{flex: 1, justifyContent: 'flex-end'}}>
              <Wrapper
                marginHorizontalBase
                justifyContentCenter
                //paddingVerticalTiny
                //backgroundColor={'red'}
                style={{height: responsiveHeight(13)}}>
                {/* Profile Details */}
                <Wrapper>
                  <Text isTinyTitle isWhite children={'Kaiya Baptista, 27'} />
                  <Spacer isTiny />
                  <Text isRegular isWhite children={'Las Vegas, NV'} />
                  <Spacer height={responsiveHeight(1.5)} />
                  <Wrapper flexDirectionRow gap={responsiveWidth(2)}>
                    {['Soccer Group', 'Traveling'].map((item, index) => (
                      <Wrapper
                        key={index}
                        paddingVerticalTiny
                        paddingHorizontalSmall
                        backgroundColor={colors.appBgColor1}
                        style={{borderRadius: responsiveWidth(2)}}>
                        <Text isTiny children={item} />
                      </Wrapper>
                    ))}
                  </Wrapper>
                  <Spacer height={verticalScale(10)} />
                </Wrapper>
                {/* Location Btn */}
                <Wrapper
                  paddingHorizontalTiny
                  paddingVerticalTiny
                  style={styles.LocationMainContainer}>
                  <Icons.WithText
                    iconName={'location-outline'}
                    iconType={'ionicon'}
                    iconSize={responsiveWidth(3.5)}
                    text={'2 km'}
                    tintColor={colors.appTextColor6}
                    textStyle={{
                      fontSize: fontSizes.small,
                      fontFamily: appFonts.appTextMedium,
                      color: colors.appTextColor6,
                    }}
                  />
                </Wrapper>
              </Wrapper>
              {/* the Dreck Swip card Buttons  */}
              {DeckSwiper ? (
                <Wrapper
                  paddingVerticalBase
                  marginHorizontalBase
                  //backgroundColor={'green'}
                  flexDirectionRow
                  justifyContentSpaceBetween
                  alignItemsCenter>
                  <Icons.Button
                    customIcon={appIcons.Hot}
                    iconSize={scale(30)}
                    buttonStyle={{
                      borderRadius: responsiveWidth(100),
                      height: scale(59),
                      width: scale(59),
                      backgroundColor: colors.appPrimaryColor,
                    }}
                    onPress={() => {
                      onPressHot();
                    }}
                  />
                  <Icons.Button
                    iconName={'exclamationcircleo'}
                    iconType={'antdesign'}
                    iconSize={scale(24)}
                    buttonColor={colors.transparent}
                    iconColor={colors.appBgColor1}
                  />
                  <Icons.Button
                    iconName={'close-outline'}
                    iconType={'ionicon'}
                    iconColor={colors.appBGColor}
                    iconSize={scale(30)}
                    buttonStyle={{
                      borderRadius: responsiveWidth(100),
                      height: scale(59),
                      width: scale(59),
                      backgroundColor: colors.appBgColor1,
                    }}
                    onPress={() => {
                      onPressNot();
                    }}
                  />
                </Wrapper>
              ) : null}
            </LinearGradient>
          </ImageBackground>
          {/* Label */}
          {isVip || isGold || isStandard ? (
            <Wrapper
              isCenter
              style={[
                styles.ProfileLabel,
                isGold && {backgroundColor: colors.GoldLabelBackground},
                isStandard && {backgroundColor: colors.appBGColor},
              ]}>
              <Text
                alignTextCenter
                isRegular
                isBoldFont
                isPrimaryColor={isVip}
                isWhite={!isVip}
                children={isVip ? 'VIP' : isGold ? 'Gold' : 'Standrad'}
              />
            </Wrapper>
          ) : null}
          {/* Indexing  points*/}
          <Wrapper
            isCenter
            gap={responsiveWidth(1.5)}
            style={styles.IndexingMainContainer}>
            {[1, 2, 3, 4, 5].map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    backgroundColor:
                      item == 1 ? colors.appBgColor1 : colors.cloud,
                    height: scale(3),
                    width: scale(3.5),
                    borderRadius: responsiveWidth(100),
                  }}
                />
              );
            })}
          </Wrapper>
        </Wrapper>
      </Pressable>
    </Wrapper>
  );
}
