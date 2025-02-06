import { ImageBackground, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Icons, Spacer, StatusBars, Text, Wrapper } from '../../../components';
import { useHooks } from './hooks';
import {
  appIcons,
  appImages,
  appStyles,
  colors,
  responsiveHeight,
  responsiveWidth,
} from '../../../services';
import { scale } from 'react-native-size-matters';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import { Position } from '..';
import { BlurView } from '@react-native-community/blur';
import DeviceInfo from 'react-native-device-info';
import { totalSize, width, height } from 'react-native-dimension'

const isTablet = DeviceInfo.isTablet()

export default function Index() {
  const [blurStart, setBlurStart] = useState(false);

  useEffect(() => {
    setTimeout(() => setBlurStart(true), 150);
  }, []);
  return (
    <ImageBackground source={appImages.image4} style={{ flex: 1 }}>
      <StatusBars.Light />
      <Spacer isStatusBarHeigt />
      {/* Header */}
      <Wrapper
        flexDirectionRow
        alignItemsCenter
        marginHorizontalBase
        justifyContentSpaceBetween
      >
        <Icons.Button
          isRound
          customIcon={appIcons.FullScreenExit}
          iconSize={scale(22)}
          customPadding={responsiveWidth(2.5)}
          isWithBorder
          buttonStyle={{ backgroundColor: colors.appBgColor1 }}
        // onPress={() => {
        //   setOptionShown(!OptionShown);
        // }}
        />
        <Menu>
          <MenuTrigger>
            <Icons.Button
              isRound
              customIcon={appIcons.Menu}
              iconSize={scale(22)}
              customPadding={responsiveWidth(2.5)}
              isWithBorder
              buttonStyle={{ backgroundColor: colors.appBgColor1 }}
            // onPress={() => {
            //   setOptionShown(!OptionShown);
            // }}
            />
          </MenuTrigger>
          <MenuOptions
            optionsContainerStyle={[
              styles.OptionMainContainer,
              { marginTop: scale(50), marginLeft: -scale(20) }, // Adjust the margin or padding here
            ]}>
            {[
              'Effects',
              'Send Message',
              'Share Screen',
              'Convert to Audio',
            ].map((item, index) => (
              <MenuOption
                key={index}
                onSelect={() => {
                  //Alert.alert(`${item} selected`);
                }}
                customStyles={{
                  optionWrapper: {
                    paddingVertical:isTablet?height(1): scale(8),
                    //paddingHorizontal: scale(12),
                  },
                }}>
                <Text isSmall isRegularFont>
                  {item}
                </Text>
              </MenuOption>
            ))}
          </MenuOptions>
        </Menu>
      </Wrapper>
      <Spacer height={responsiveHeight(33)} />
      {/* the Image and call time  */}
      <Wrapper style={{
        ...(isTablet && {
          height: responsiveHeight(20),
          width: '100%',
          position: 'absolute',
          top: scale(90),
        })
      }}>
        <Wrapper
          isImageBackground
          source={appImages.image2}
          style={styles.theOtherPartyImage}>
          <Wrapper
            style={{ position: 'absolute', bottom: scale(10), right: scale(10) }}>
            <Icons.Custom icon={appIcons.flipCamera} size={scale(24)} />
          </Wrapper>
        </Wrapper>
      </Wrapper>
      {/* Name And time  */}
      <Wrapper
        //flex={1}
        style={{ height: responsiveHeight(25) }}
        justifyContentFlexend
        //backgroundColor={'red'}
        alignItemsCenter>
        <Text
          alignTextCenter
          isSmallTitle
          isBoldFont
          isWhite
          children={'Miracle Addi'}
        />
        <Spacer isTiny />
        <Text
          alignTextCenter
          isRegular
          isRegularFont
          isWhite
          children={'00:03:48'}
        />
      </Wrapper>
      {/* the Down Container or you can say the control panel */}
      {blurStart ? (
        <Wrapper
          flex={!isTablet ? 1 : 0}
          justifyContentFlexend
        //animation={'fadeIn'}
        //duration={5000}

        // style={{
        //   ...(isTablet && { width: width(64),borderRadius:totalSize(2) ,backgroundColor:'red',alignSelf:'center',height:height(16),marginBottom:height(2)})}}

        >
          {isTablet&&<Spacer/>}
          <Wrapper
            //flex={1}
            //style={{overflow: 'hidden'}}
            animation={'fadeIn'}
            style={{
              ...(isTablet && {
                width: width(70), borderRadius: totalSize(2),
                alignSelf: 'center', height: height(22),
                overflow: 'hidden'
              }

              )
            }}


          >
            <BlurView
              //style={{overflow: 'hidden'}}
              downsampleFactor={25}
              overlayColor={colors.transparent}
              blurType="xlight"
              blurAmount={10}
            //reducedTransparencyFallbackColor="white"
            >
              <Wrapper
                style={{
                  height: responsiveHeight(24.5),
                  backgroundColor: 'rgba(250,250,250,0.1)',


                }}>
                <Spacer isSmall />
                <View
                  style={{
                    backgroundColor: colors.appBorderColor2 + 50,
                    height: responsiveHeight(0.7),
                    width: responsiveWidth(15),
                    borderRadius: 150,
                    alignSelf: 'center',
                  }}
                />
                <Spacer height={responsiveHeight(5)} />
                <Wrapper
                  flexDirectionRow
                  marginHorizontalBase
                  justifyContentSpaceBetween>
                  {[
                    {
                      label: 'Mute',
                      iconName: 'mic-off-outline',
                      iconType: 'ionicon',
                    },
                    {
                      label: 'Trun Off',
                      customIcon: appIcons.VideoOff,
                    },
                    {
                      label: 'Speaker',
                      iconName: 'volume-2',
                      iconType: 'simple-line-icon',
                    },
                    {
                      label: 'End',
                      customIcon: appIcons.callEnd,
                      backgroundColor: colors.appPrimaryColor,
                    },
                  ].map((item, index) => (
                    <Wrapper key={index}>
                      <Icons.Button
                        iconName={item?.iconName}
                        iconType={item?.iconType}
                        customIcon={item?.customIcon}
                        iconColor={colors.appBgColor1}
                        iconSize={isTablet ? totalSize(2.8) : scale(28)}
                        buttonStyle={{
                          padding: 5,
                          backgroundColor: item?.backgroundColor
                            ? item?.backgroundColor
                            : colors.appBorderColor2 + 50,
                          height: isTablet ? totalSize(6.7) : scale(68),
                          width: isTablet ? totalSize(6.7) : scale(68),
                          borderRadius: 150,
                        }}
                      />
                      <Spacer isBasic />
                      <Text
                        isRegular
                        isRegularFont
                        isWhite
                        alignTextCenter
                        children={item?.label}
                      />
                    </Wrapper>
                  ))}
                </Wrapper>
              </Wrapper>
            </BlurView>
          </Wrapper>
        </Wrapper>
      ) : null}
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  OptionMainContainer: {
    //height: responsiveHeight(18),
    width: responsiveWidth(40),
    backgroundColor: colors.appBgColor1,
    ...appStyles.shadowDark,
    borderRadius: responsiveWidth(3),
    padding: scale(18),
    //zIndex: 2,
  },
  theOtherPartyImage: {
    height: responsiveHeight(20),
    width: isTablet ? width(30) : responsiveWidth(40),


    borderWidth: 1,
    borderColor: colors.appBgColor1,
    borderRadius: responsiveWidth(7),
    overflow: 'hidden',
    resizeMode: 'stretch',
    position: 'absolute',
    // right: !isTablet && scale(10),
    ...(!isTablet && { right: scale(10) }),
    ...(isTablet && { left: width(2) })
  },
});
