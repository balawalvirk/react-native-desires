import React, {Component, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  Icons,
  Text,
  TextInputs,
  Buttons,
  Wrapper,
  Spacer,
  Lines,
} from '../../../components';
import {
  appStyles,
  colors,
  responsiveHeight,
  responsiveWidth,
  appIcons,
  routes,
} from '../../../services';
import {useHooks} from './hooks';
import {scale} from 'react-native-size-matters';
import {Icon} from '@rneui/base';
import {navigate} from '../../../navigation/rootNavigation';

export default function Index(props) {
  const {
    InputFocused,
    SecurePassword1,
    SecurePassword2,
    automatedMessage,
    accepted,
    LoginIconsData,
    //functions
    handleInputFocused,
    handleAccepted,
    handleAutomatedMessage,
    handleSecurePassword,
  } = useHooks();
  return (
    <Wrapper flex={1}>
      <Wrapper
        paddingVerticalMedium
        backgroundColor={colors.appBgColor1}
        style={styles.DownMainContainer}>
        <Wrapper marginHorizontalBase>
          <Text isSmallTitle children={'Sign Up'} />
          <Spacer isSmall />
          <Text
            isRegular
            isTextColor2
            style={{}}
            children={'Enter your detail below to sign up.'}
          />
        </Wrapper>
        <Spacer isMedium />
        <TextInputs.Bordered
          placeholder={'Edean@dexxire.com'}
          onFocus={value => value && handleInputFocused({FocusedOn: 'Email'})}
          isFocusedContainerColor={InputFocused === 'Email' && colors.black}
          customIconRight={appIcons.Email}
          iconSizeRight={responsiveWidth(6.5)}
          iconColorRight={colors.appTextColor1}
        />
        <Spacer isSmall />
        <TextInputs.Bordered
          placeholder={'Enter Password'}
          secureTextEntry={SecurePassword1}
          onFocus={value =>
            value && handleInputFocused({FocusedOn: 'Password'})
          }
          isFocusedContainerColor={InputFocused === 'Password' && colors.black}
          iconNameRight={SecurePassword1 ? 'eye-off' : 'eye'}
          iconTypeRight={'feather'}
          iconColorRight={colors.appTextColor1}
          iconStyleRight={{transform: [{rotate: '180deg'}]}}
          onPressIconRight={() => {
            handleSecurePassword({num: 1});
          }}
        />
        <Spacer isSmall />
        <TextInputs.Bordered
          placeholder={'Renter password'}
          secureTextEntry={SecurePassword2}
          onFocus={value =>
            value && handleInputFocused({FocusedOn: 'Renter password'})
          }
          isFocusedContainerColor={
            InputFocused === 'Renter password' && colors.black
          }
          iconNameRight={SecurePassword2 ? 'eye-off' : 'eye'}
          iconTypeRight={'feather'}
          iconColorRight={colors.appTextColor1}
          iconStyleRight={{transform: [{rotate: '180deg'}]}}
          onPressIconRight={() => {
            handleSecurePassword({num: 2});
          }}
        />
        <Spacer isBase />
        <Buttons.Colored
          text={'Create account'}
          onPress={() => {
            navigate(routes.app);
          }}
        />
        <Spacer isBasic />
        <Wrapper flexDirectionRow alignItemsCenter justifyContentCenter>
          <Lines.Horizontal width={responsiveWidth(20)} />
          <Spacer horizontal isSmall />
          <Text isTextColor2 children={'or continue with'} />
          <Spacer horizontal isSmall />
          <Lines.Horizontal width={responsiveWidth(20)} />
        </Wrapper>
        <Spacer isBasic />
        {/* Icons for Login */}
        <Wrapper flexDirectionRow alignItemsCenter justifyContentCenter>
          {LoginIconsData.map((item, index) => (
            <Icons.Button
              key={index}
              buttonStyle={styles.LoginIconStyling}
              iconSize={responsiveWidth(6)}
              iconName={item?.iconName}
              iconType={item?.iconType}
              customIcon={item?.customIcon}
              iconColor={item?.iconColor}
            />
          ))}
        </Wrapper>
        <Spacer isDoubleBase />
        {/* Automated Line */}

        <TouchableOpacity
          onPress={() => {
            handleAutomatedMessage();
          }}>
          <Wrapper
            flexDirectionRow
            alignItemsCenter
            //backgroundColor={'red'}
            marginHorizontalBase>
            <Wrapper
              backgroundColor={
                automatedMessage ? colors.appPrimaryColor : colors.appBgColor1
              }
              isCenter
              style={{
                height: scale(18),
                width: scale(18),
                borderRadius: responsiveWidth(1),
                borderWidth: 1.5,
                borderColor: colors.appBorderColor1,
                overflow: 'hidden',
              }}>
              {automatedMessage ? (
                <Icon
                  name="check"
                  type={'feather'}
                  size={responsiveWidth(3.5)}
                  color={colors.appTextColor6}
                />
              ) : null}
            </Wrapper>
            <Spacer horizontal isSmall />
            <Text isSmall isTextColor2 TextWidth={responsiveWidth(80)}>
              'You consent to receive up to 10 automated messages / month. Reply
              "STOP" to opt out, "HELP" for support. Standard rates apply.'
            </Text>
          </Wrapper>
        </TouchableOpacity>
        <Spacer isBasic />
        <Wrapper alignItemsCenter>
          <Lines.Horizontal width={responsiveWidth(40)} />
        </Wrapper>
        <Spacer isBasic />
        {/* Terms And Policy Line */}

        <TouchableOpacity
          onPress={() => {
            handleAccepted();
          }}>
          <Wrapper
            flexDirectionRow
            alignItemsCenter
            //backgroundColor={'red'}
            marginHorizontalBase>
            <Wrapper
              backgroundColor={
                accepted ? colors.appPrimaryColor : colors.appBgColor1
              }
              isCenter
              style={{
                height: scale(18),
                width: scale(18),
                borderRadius: responsiveWidth(1),
                borderWidth: 1.5,
                borderColor: colors.appBorderColor1,
                overflow: 'hidden',
              }}>
              {accepted ? (
                <Icon
                  name="check"
                  type={'feather'}
                  size={responsiveWidth(3.5)}
                  color={colors.appTextColor6}
                />
              ) : null}
            </Wrapper>
            <Spacer horizontal isSmall />
            <Text isSmall isTextColor2 TextWidth={responsiveWidth(80)}>
              By signing up, you agree to our{' '}
              <Text isPrimaryColor>Privacy Policy, Terms & Conditions</Text>,
              and marketing terms, which you can revoke anytime.
            </Text>
          </Wrapper>
        </TouchableOpacity>
      </Wrapper>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  DownMainContainer: {
    //flex: 1,
    borderTopStartRadius: responsiveWidth(8),
    borderTopEndRadius: responsiveWidth(8),
    //paddingBottom: responsiveHeight(7),
  },
  LoginIconStyling: {
    height: scale(40),
    width: scale(40),
    padding: responsiveWidth(2),
    marginHorizontal: responsiveWidth(2),
    borderRadius: responsiveWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    ...appStyles.shadowExtraDark,
  },
});
