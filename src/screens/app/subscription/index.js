import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import {
  Buttons,
  Headers,
  Icons,
  MyAnimated,
  ScrollViews,
  Spacer,
  Swipeables,
  Text,
  Wrapper,
} from '../../../components';
import { appStyles, colors, fontSizes, responsiveWidth, sizes } from '../../../services';
import { useHooks } from './hooks';
import DeviceInfo from 'react-native-device-info';
import { height, width, totalSize } from 'react-native-dimension'
import { SubscriptionPackagesComponent } from './components';
const isTablet = DeviceInfo.isTablet();

const Index = ({ navigation }) => {
  const {
    CurrentPage,
    handleCurrentPage,
    RenderItem,
    VisiblePackages,
    InvisiblePackages,
  } = useHooks();
  return (
    <Wrapper isMain style={{}}>
      {!isTablet &&
        <>
          <Headers.Primary showBackArrow title={'Subscription'} />
          <Spacer isBasic />
          {/* The Toggle of the Buttons */}
          <SubscriptionPackagesComponent RenderItem={RenderItem} handleCurrentPage={handleCurrentPage} CurrentPage={CurrentPage} VisiblePackages={VisiblePackages} InvisiblePackages={InvisiblePackages} />
        </>
      }

      {/* <Wrapper
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
      </Wrapper> */}
      {isTablet && <Wrapper isAbsolute style={{
        ...(isTablet && {
          flex: 1,
          width: width(100),
          height: height(100),
          // bottom: 0,
          // left: 0,
          // right: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          justifyContent: 'center'
        })
      }}>
        <Wrapper style={{ ...styles.outerWarp }}>
          <Spacer height={height(1)} />
          <Wrapper style={{ ...styles.innerWarp }}>
            <Text
              style={{ ...(isTablet && { fontSize: totalSize(3) }) }}
            >
              Subscription
            </Text>

            <Icons.Back
              color={colors.black}
              iconName={'cross'}
              iconType={'entypo'}
              size={totalSize(3.5)}
              onPress={() => navigation.goBack()}
              style={{ alignSelf: 'flex-end' }}
            />
          </Wrapper>

          <Spacer />
          <SubscriptionPackagesComponent RenderItem={RenderItem} handleCurrentPage={handleCurrentPage} CurrentPage={CurrentPage} VisiblePackages={VisiblePackages} InvisiblePackages={InvisiblePackages} />
        </Wrapper>

      </Wrapper>}
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

  outerWarp: {
    width: width(93),
    height: height(90),
    borderRadius: totalSize(2),
    backgroundColor: colors.appBgColor1,
    alignSelf: 'center'
  }
  ,
  innerWarp: {
    paddingHorizontal: width(4),
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export default Index;
