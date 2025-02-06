import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Spacer, Text, Wrapper} from '..';
import {colors, fontSizes, responsiveWidth} from '../../services';
import {Icon} from '@rneui/base';
import {scale} from 'react-native-size-matters';
import DeviceInfo from 'react-native-device-info';

const isTablet=DeviceInfo.isTablet();

export function Normal({
  Label,
  RightText,
  NoMargin,
  alignTextCenter,
  FontSize,
  style
}) {
  return (
    <Wrapper
      //backgroundColor={'red'}
      isCenter={alignTextCenter}
      marginHorizontalBase={!NoMargin}
      flexDirectionRow={!alignTextCenter}
      alignItemsCenter={!alignTextCenter}
      justifyContentSpaceBetween={!alignTextCenter}>
      {Label ? (
        <Text
          isMedium
          isBoldFont
          alignTextCenter={alignTextCenter}
          style={[FontSize && {fontSize: FontSize},style]}>
          {Label}
        </Text>
      ) : null}
      {RightText ? (
        <Text isRegularFont isRegular isTextColor2>
          {RightText}
        </Text>
      ) : null}
    </Wrapper>
  );
}

export function ModalLabelWithCross({Title, Description, onPress,style,descriptionStyle}) {
  return (
    <Wrapper marginHorizontalBase>
      <Wrapper
        flexDirectionRow
        alignItemsCenter
        justifyContentSpaceBetween
        //backgroundColor={'blue'}
        
      >
        <Text
          isTinyTitle
          style={isTablet ? style : { width: responsiveWidth(70) }}

          children={Title}
        />
        <TouchableOpacity onPress={onPress}>
          <Icon
            name="close-outline"
            type="ionicon"
            size={scale(24)}
            color={colors.appBGColor}
          />
        </TouchableOpacity>
      </Wrapper>
      {Description ? (
        <>
          <Spacer isTiny />
          <Text isTextColor2 isRegular isRegularFont children={Description}  style={descriptionStyle}/>
        </>
      ) : (
        <Spacer isSmall />
      )}
    </Wrapper>
  );
}

const styles = StyleSheet.create({});
