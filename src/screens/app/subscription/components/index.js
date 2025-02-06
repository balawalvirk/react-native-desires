import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Wrapper from '../../../../components/wrapper';
import { MyAnimated, ScrollViews, Spacer, Swipeables, Text } from '../../../../components';
import DeviceInfo from 'react-native-device-info';
import { height, width, totalSize } from'react-native-dimension'
import { colors, responsiveWidth, sizes } from '../../../../services';



const isTablet = DeviceInfo.isTablet();
export const SubscriptionPackagesComponent = ({handleCurrentPage,CurrentPage,RenderItem,VisiblePackages,InvisiblePackages}) => {
  console.log("🚀 ~ SubscriptionPackagesComponent ~ CurrentPage:", CurrentPage)
 
  return (
    <>
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
        width={isTablet?-width(44.5):-responsiveWidth(47.5)}
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
              style={{...(isTablet&&{fontSize:totalSize(1.4)})}}
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
  </>
  )
}


const styles = StyleSheet.create({
    ButtonBackContainer: {
        //height: sizes.inputHeight,
        borderRadius: responsiveWidth(3),
        // paddingHorizontal: sizes.TinyMargin,
        borderRadius: responsiveWidth(100),
        // marginBottom: responsiveHeight(4),
        borderWidth: 1,
        borderColor: colors.appBorderColor2,
      },
      SeletedLayerContainer: {
        height: sizes.buttonHeight,
        borderRadius: responsiveWidth(100),
        width:isTablet?width(40):responsiveWidth(42),
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'blue',
      },
})