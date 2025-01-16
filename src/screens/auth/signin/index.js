import React, {Component} from 'react';
import {
  Text,
  TextInputs,
  Buttons,
  ScrollViews,
  Wrapper,
  Spacer,
  Headers,
  Logos,
  MyAnimated,
  Images,
  Icons,
  Lines,
  Modals,
} from '../../../components';
import {
  responsiveFontSize,
  responsiveHeight,
  routes,
  appSvgs,
  responsiveWidth,
  sizes,
  colors,
  appIcons,
  fontSizes,
  appFonts,
  appStyles,
  useKeyboardStatus,
} from '../../../services';
import {useHooks} from './hooks';
import {Image, Keyboard, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from '@rneui/base';
import {scale, verticalScale} from 'react-native-size-matters';
import {navigate} from '../../../navigation/rootNavigation';
export default function Index({handleCurrentPage}) {
  const {
    handleLogin,
    SecurePassword,
    InputFocused,
    RememberMe,
    LoginIconsData,
    ForgotPasswordModal,
    //function
    handleInputFocused,
    handleSecurePassword,
    handleRememberMe,
    handleForgotPasswordModal,
  } = useHooks();
  const isKeyboradOpen = useKeyboardStatus();
  return (
    <Wrapper>
      <Wrapper
        paddingVerticalMedium
        backgroundColor={colors.appBgColor1}
        style={styles.DownMainContainer}>
        <Wrapper marginHorizontalBase>
          <Text isSmallTitle children={'Sign In'} />
          <Spacer isSmall />
          <Text
            isRegular
            isTextColor2
            style={{}}
            children={'Enter your email address and password to login.'}
          />
        </Wrapper>
        <Spacer isMedium />
        <TextInputs.Bordered
          placeholder={'dean@dexxire.com'}
          onFocus={value => {
            value && handleInputFocused({FocusedOn: 'Email'});
          }}
          isFocusedContainerColor={InputFocused === 'Email' && colors.black}
          customIconRight={appIcons.Email}
          iconSizeRight={responsiveWidth(6.5)}
          iconColorRight={colors.appTextColor1}
        />
        <Spacer isSmall />
        <TextInputs.Bordered
          placeholder={'Enter Password'}
          secureTextEntry={SecurePassword}
          onFocus={value => {
            value && handleInputFocused({FocusedOn: 'Password'});
          }}
          isFocusedContainerColor={InputFocused === 'Password' && colors.black}
          iconNameRight={SecurePassword ? 'eye-off' : 'eye'}
          iconTypeRight={'feather'}
          iconColorRight={colors.appTextColor1}
          iconStyleRight={{transform: [{rotate: '180deg'}]}}
          onPressIconRight={() => {
            handleSecurePassword();
          }}
        />
        <Spacer isSmall />
        {/* Remember me Line */}
        <Wrapper
          flexDirectionRow
          alignItemsCenter
          justifyContentSpaceBetween
          marginHorizontalBase>
          <TouchableOpacity
            onPress={() => {
              handleRememberMe();
            }}>
            <Wrapper
              flexDirectionRow
              alignItemsCenter
              justifyContentSpaceBetween>
              <Wrapper
                backgroundColor={
                  RememberMe ? colors.appPrimaryColor : colors.appBgColor1
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
                {RememberMe ? (
                  <Icon
                    name="check"
                    type={'feather'}
                    size={responsiveWidth(3.5)}
                    color={colors.appTextColor6}
                  />
                ) : null}
              </Wrapper>
              <Spacer horizontal isSmall />
              <Text isRegular isTextColor2 children={'Remember me'} />
            </Wrapper>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForgotPasswordModal}>
            <Text isPrimaryColor isRegular children={'Forgot Password?'} />
          </TouchableOpacity>
        </Wrapper>
        <Spacer isDoubleBase />
        <Buttons.Colored
          text={'Login'}
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
      </Wrapper>
      <Modals.PopupPrimary
        visible={ForgotPasswordModal}
        toggle={handleForgotPasswordModal}
        disableSwipe={true}
        isBlur
        //onKeyborderOpenHeightDown={responsiveHeight(18)}
        children={
          <Wrapper
            style={{
              height: responsiveHeight(58),
            }}>
            <Wrapper
              //backgroundColor={'red'}
              alignItemsFlexStart
              marginHorizontalBase
              style={{width: responsiveWidth(90)}}>
              <Icons.Back
                color={colors.black}
                size={responsiveWidth(5)}
                onPress={handleForgotPasswordModal}
              />
              <Spacer isBasic />
              <Text isTinyTitle children={'Forgot Password?'} />
              <Spacer isSmall />
              <Text isRegular isTextColor2>
                Enter your email address to reset your password!
              </Text>
            </Wrapper>
            <Spacer isDoubleBase />
            <TextInputs.Bordered
              placeholder={'Enter email'}
              onFocus={value => {
                value && handleInputFocused({FocusedOn: 'Forget Email'});
              }}
              isFocusedContainerColor={
                InputFocused === 'Forget Email' && colors.black
              }
              customIconRight={appIcons.Email}
              iconSizeRight={responsiveWidth(6.5)}
              iconColorRight={colors.appTextColor1}
            />
            <Spacer isMedium />
            <Buttons.Colored
              text={'Reset Password'}
              onPress={handleForgotPasswordModal}
            />
            <Spacer isBase />
            <Wrapper flexDirectionRow alignItemsCenter justifyContentCenter>
              <Text isRegular isTextColor2 alignTextCenter>
                You remember?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  handleForgotPasswordModal();
                  handleCurrentPage({PageName: 'Sign Up'});
                }}>
                <Text isPrimaryColor isMediumFont>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </Wrapper>
          </Wrapper>
        }
      />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  ButtonBackContainer: {
    height: sizes.inputHeight,
    borderRadius: responsiveWidth(3),
    paddingHorizontal: sizes.TinyMargin,
    borderRadius: responsiveWidth(100),
    // marginBottom: responsiveHeight(4),
    overflow: 'hidden',
  },
  SeletedLayerContainer: {
    height: sizes.buttonHeight,
    borderRadius: responsiveWidth(100),
    width: responsiveWidth(40),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  DownMainContainer: {
    // minHeight: verticalScale(475),
    borderTopStartRadius: responsiveWidth(8),
    borderTopEndRadius: responsiveWidth(8),
    paddingBottom: verticalScale(75),
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
