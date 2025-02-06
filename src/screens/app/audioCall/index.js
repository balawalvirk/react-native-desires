import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import {Icons, Spacer, StatusBars, Text, Wrapper} from '../../../components';
import {useHooks} from './hooks';
import {
  appIcons,
  appImages,
  appStyles,
  colors,
  responsiveHeight,
  responsiveWidth,
} from '../../../services';
import {scale} from 'react-native-size-matters';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import DeviceInfo from 'react-native-device-info';
import {height,width,totalSize} from 'react-native-dimension'

const isTablet = DeviceInfo.isTablet();

export default function Index() {
  return (
    <ImageBackground
      source={appImages.image4}
      style={{flex: 1}}
      blurRadius={35}>
      <StatusBars.Light />
      <Spacer isStatusBarHeigt />
      {/* Header */}
      <Wrapper
        flexDirectionRow
        alignItemsCenter
        marginHorizontalBase
        justifyContentSpaceBetween>
        <Icons.Button
          isRound
          customIcon={appIcons.FullScreenExit}
          iconSize={scale(22)}
          customPadding={responsiveWidth(2.5)}
          isWithBorder
          buttonStyle={{backgroundColor: colors.appBgColor1}}
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
              buttonStyle={{backgroundColor: colors.appBgColor1}}
              // onPress={() => {
              //   setOptionShown(!OptionShown);
              // }}
            />
          </MenuTrigger>
          <MenuOptions
            optionsContainerStyle={[
              styles.OptionMainContainer,
              {marginTop: scale(50), marginLeft: -scale(20)}, // Adjust the margin or padding here
            ]}>
            {['Send Message', 'Convert to Video'].map((item, index) => (
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
      <Spacer isDoubleBase />
      {/* the Image and call time  */}
      <Wrapper
        //backgroundColor={'red'}
        alignItemsCenter>
        <Wrapper
          style={{
            borderRadius: 150,
            borderWidth: 2,
            borderColor: colors.appBgColor1,
            padding: 4,
          }}>
          <Icons.Custom
            icon={appImages.image4}
            size={scale(145)}
            containerStyle={{
              borderRadius: 150,
              overflow: 'hidden',
            }}
          />
        </Wrapper>
        <Spacer isBasic />
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
      <Wrapper
       flex={!isTablet ? 1 : 0}
        //backgroundColor={'blue'}
        justifyContentFlexend>
          {isTablet&&<Spacer height={height(16)} />}
        <Wrapper
          style={{
            height: responsiveHeight(25),
            backgroundColor: 'rgba(250,250,250,0.1)',
         
              ...(isTablet && {
                width: width(70), borderRadius: totalSize(2),
                alignSelf: 'center', height: height(22),
                overflow: 'hidden'
              })
          
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
                label: 'Video',
                customIcon: appIcons.video,
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
                  iconSize={isTablet ? totalSize(2.7):scale(28)}
                  buttonStyle={{
                    padding: 5,
                    backgroundColor: item?.backgroundColor
                      ? item?.backgroundColor
                      : colors.appBorderColor2 + 50,
                    height: isTablet ? totalSize(6.7):scale(68),
                    width:isTablet ? totalSize(6.7): scale(68),
                    borderRadius: 150,
                  }}
                />
                <Spacer isBasic={!isTablet} isSmall={isTablet} />
                <Text
                  isRegular
                  isRegularFont
                  isWhite
                  alignTextCenter
                  style={{
                   ...(isTablet && { fontSize: totalSize(1.4) }), // Applies only if isTablet is true
                  }}
                  children={item?.label}
                />
              </Wrapper>
            ))}
          </Wrapper>
        </Wrapper>
      </Wrapper>
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
});
