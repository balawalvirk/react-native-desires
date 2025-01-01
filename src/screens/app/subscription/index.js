import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {
  Buttons,
  Headers,
  MyAnimated,
  ScrollViews,
  Spacer,
  Swipeables,
  Text,
  Wrapper,
} from '../../../components';
import {appStyles, colors, responsiveWidth, sizes} from '../../../services';
import {useHooks} from './hooks';

const Index = () => {
  const {
    CurrentPage,
    handleCurrentPage,
    RenderItem,
    VisiblePackages,
    InvisiblePackages,
  } = useHooks();
  return (
    <Wrapper isMain>
      <Headers.Primary showBackArrow title={'Subscription'} />
      <Spacer isBasic />
      {/* The Toggle of the Buttons */}
      <Wrapper
        marginHorizontalBase
        alignItemsCenter
        justifyContentSpaceBetween
        flexDirectionRow
        style={styles.ButtonBackContainer}>
        <MyAnimated.AnimatedView
          NotFlexed
          isAbsolute
          width={-responsiveWidth(47.5)}
          onPressStart={CurrentPage === 'Invisible Profiles'}
          onPressClosed={CurrentPage === 'Visible Profiles'}>
          <Wrapper
            style={styles.SeletedLayerContainer}
            backgroundColor={colors.appBGColor}
          />
        </MyAnimated.AnimatedView>
        {['Visible Profiles', 'Invisible Profiles'].map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.SeletedLayerContainer}
              onPress={() => {
                handleCurrentPage({PageName: item});
              }}>
              <Text
                alignTextCenter
                isRegular
                isRegularFont
                isWhite={item == CurrentPage}
                children={item}
              />
            </TouchableOpacity>
          );
        })}
      </Wrapper>
      <Spacer isBasic />
      <ScrollViews.HorizontalScrollWithDots
        Data={
          CurrentPage == 'Visible Profiles'
            ? VisiblePackages
            : InvisiblePackages
        }
        RenderItem={({item}) => {
          return (
            <RenderItem
              IsGold={item?.IsGold}
              IsVip={item?.IsVip}
              IsGhostNomal={item?.IsGhostNomal}
              IsGhostVip={item?.IsGhostVip}
              Item={item}
            />
          );
        }}
      />
      <Wrapper flex={1} paddingVerticalSmall justifyContentFlexend>
        <Swipeables.SwipableItem
          onSwipeLeft={() => {}}
          swipeDistance={responsiveWidth(80)}
          SwipeTitle={'50 Coins'}
          //LeftTitle={'Select the Payment Method'}
          BtnTitle={'Swipe To Pay'}
        />
      </Wrapper>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ButtonBackContainer: {
    //height: sizes.inputHeight,
    borderRadius: responsiveWidth(3),
    // paddingHorizontal: sizes.TinyMargin,
    borderRadius: responsiveWidth(100),
    // marginBottom: responsiveHeight(4),
    //overflow: 'hidden',
    //backgroundColor: 'red',
    borderWidth: 1,
    borderColor: colors.appBorderColor2,
  },
  SeletedLayerContainer: {
    height: sizes.buttonHeight,
    borderRadius: responsiveWidth(100),
    width: responsiveWidth(42),
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'blue',
  },
});

export default Index;
