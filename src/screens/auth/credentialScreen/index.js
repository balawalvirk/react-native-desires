import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import useHooks from './hooks';
import {
  MyAnimated,
  ScrollViews,
  Spacer,
  StatusBars,
  Text,
  Wrapper,
} from '../../../components';
import {
  appIcons,
  colors,
  responsiveHeight,
  responsiveWidth,
  sizes,
} from '../../../services';
import {CreateAccount, Signin} from '../index';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur';

export default function Index() {
  const {CurrentPage, handleCurrentPage} = useHooks();
  return (
    <Wrapper flex={1} backgroundColor={colors.SignInBGColor}>
      <StatusBars.Light />
      <Spacer isStatusBarHeigt />
      <ScrollViews.WithKeyboardAvoidingView>
        <Spacer isTiny />
        <Wrapper
          justifyContentCenter
          //backgroundColor={'red'}
          style={{height: responsiveHeight(30)}}>
          <Wrapper
            alignItemsCenter
            paddingVerticalBase
            marginHorizontalBase
            backgroundColor={colors.appBGColor}
            style={{borderRadius: responsiveWidth(6)}}>
            <Spacer isSmall />
            <Image
              source={appIcons.LogoWithWhiteText}
              style={{
                height: sizes.buttonHeight,
                width: responsiveWidth(50),
                resizeMode: 'contain',
              }}
            />
            <Spacer isDoubleBase />
            <Wrapper
              justifyContentCenter
              alignItemsCenter
              style={styles.ButtonBackContainer}
              backgroundColor={colors.SignInBGColor}>
              <Wrapper
                alignItemsCenter
                //justifyContentCenter
                flexDirectionRow
                flex={1}
                //backgroundColor={'red'}
              >
                <MyAnimated.AnimatedView
                  NotFlexed
                  isAbsolute
                  width={-responsiveWidth(38)}
                  onPressStart={CurrentPage === 'Sign Up'}
                  onPressClosed={CurrentPage === 'Sign In'}>
                  <Wrapper
                    style={styles.SeletedLayerContainer}
                    backgroundColor={colors.appBgColor1}
                  />
                </MyAnimated.AnimatedView>
                {['Sign In', 'Sign Up'].map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.SeletedLayerContainer}
                      onPress={() => {
                        handleCurrentPage({PageName: item});
                      }}>
                      <Text
                        alignTextCenter
                        isMedium
                        isBoldFont
                        isWhite={item !== CurrentPage}
                        children={item}
                      />
                    </TouchableOpacity>
                  );
                })}
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Wrapper>
          {CurrentPage === 'Sign In' ? (
            <Signin handleCurrentPage={handleCurrentPage} />
          ) : (
            <CreateAccount />
          )}
        </Wrapper>
      </ScrollViews.WithKeyboardAvoidingView>
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
    width: responsiveWidth(38),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
});
