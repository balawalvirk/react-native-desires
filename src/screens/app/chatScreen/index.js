import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {
  Headers,
  Icons,
  Images,
  ScrollViews,
  Spacer,
  StatusBars,
  Text,
  TextInputs,
  Wrapper,
} from '../../../components';
import {
  appIcons,
  appImages,
  appStyles,
  colors,
  fontSizes,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
  routes,
  sizes,
} from '../../../services';
import {scale} from 'react-native-size-matters';
import {goBack, navigate} from '../../../navigation/rootNavigation';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import {useHooks} from './hooks';
import DeviceInfo from 'react-native-device-info';
import {height,width,totalSize} from 'react-native-dimension'

const isTablet=DeviceInfo.isTablet();

const Index = () => {
  const {chatOptions, ChatSperater, chatData} = useHooks();
  return (
    <Wrapper isMain>
      <StatusBars.Dark />
      {/* Hearder */}
      <Wrapper style={styles.headerMainContainer}>
        {/* Back */}
        <Icons.Custom
          icon={appIcons.Back}
          containerStyle={[styles.BackButtonMainContainer]}
          size={scale(24)}
          onPress={() => {
            goBack();
          }}
        />
        {/* the Image And User Detail */}
        <Wrapper
          paddingHorizontalSmall
          flexDirectionRow
          // backgroundColor={'red'}
          alignItemsCenter
          style={{marginLeft: responsiveWidth(2)}}>
          {/* Image */}
          <Wrapper>
            <Pressable
              onPress={() => {
                navigate(routes.userProfile, {visiterProfile: true});
              }}>
              <Images.Round source={appImages.image4} size={scale(37)} />
            </Pressable>
            {/* Bage */}

            <Wrapper isAbsolute style={styles.BadgeMainContainer}>
              <Wrapper style={styles.BadgeInnerContainer} />
            </Wrapper>
          </Wrapper>
          {/* Text Wrapper */}
          <Wrapper
            style={{
              paddingLeft: responsiveWidth(3),
              width: responsiveWidth(37),
              //backgroundColor: 'red',
            }}>
            <Text isSmall isBoldFont>
              Jaydon Lubin, 48
            </Text>
            <Text style={{fontSize: responsiveFontSize(10)}}>Typing</Text>
          </Wrapper>
        </Wrapper>
        {/* Icons To Move on  */}
        <Wrapper
          flex={1}
          flexDirectionRow
          alignItemsCenter
          //backgroundColor={'blue'}
          justifyContentSpaceBetween>
          <Icons.Custom
            icon={appIcons.video}
            size={scale(20)}
            color={colors.appBGColor}
            onPress={() => {
              navigate(routes.videoCall);
            }}
          />
          <Icons.Button
            iconType={'ionicon'}
            iconName={'call-outline'}
            iconColor={colors.appBGColor}
            iconSize={scale(20)}
            buttonColor={colors.transparent}
            buttonStyle={{padding: 0}}
            onPress={() => {
              navigate(routes.audioCall);
            }}
          />
          <Menu>
            <MenuTrigger>
              <Icons.Custom
                icon={appIcons.Menu}
                color={colors.appBGColor}
                size={scale(20)}
              />
            </MenuTrigger>
            <MenuOptions
              optionsContainerStyle={[
                styles.OptionMainContainer,
                {marginTop: scale(22), marginLeft: -scale(7)}, // Adjust the margin or padding here
              ]}>
              {chatOptions.map((item, index) => (
                <MenuOption
                  key={index}
                  onSelect={() => {
                    //Alert.alert(`${item} selected`);
                  }}
                  customStyles={{
                    optionWrapper: {
                      paddingVertical: scale(8),
                      //paddingHorizontal: scale(12),
                    },
                  }}>
                  <Text
                    isSmall
                    isRegularFont
                    isPrimaryColor={item === 'Unfriend'}>
                    {item}
                  </Text>
                </MenuOption>
              ))}
            </MenuOptions>
          </Menu>
        </Wrapper>
      </Wrapper>
      {/* Chat Body */}
      <ScrollViews.WithKeyboardAvoidingView>
        <ChatSperater />
        {chatData.map((item, index) => {
          if (item?.sender === 'user') {
            return (
              <Wrapper marginHorizontalBase key={index}>
                <Wrapper
                  paddingHorizontalBase
                  paddingVerticalBase
                  backgroundColor={colors.appBGColor}
                  style={styles.MeMessageContainer}>
                  <Text isWhite isRegular isRegularFont
                
                // style={{...isTablet&&{fontSize:totalSize(1.8)}}}
                  >
                    {item?.message}
                  </Text>
                </Wrapper>
                <Icons.WithText
                  iconName={'checkmark-done'}
                  iconType={'ionicon'}
                  direction={'row-reverse'}
                  text={item?.timestamp}
                  tintColor={colors.appPrimaryColor}
                  iconSize={scale(16)}
                  textContainerStyle={{marginHorizontal: sizes.TinyMargin}}
                  textStyle={{
                    color: colors.appTextColor2,
                  }}

                />
                <Spacer isBasic />
              </Wrapper>
            );
          } else if (item?.sender === 'other') {
            return (
              <Wrapper marginHorizontalBase key={index}>
                <Wrapper
                  paddingHorizontalBase
                  paddingVerticalBase
                  backgroundColor={colors.appBGColor}
                  style={styles.OtherMessaageContainer}>
                  <Text isRegular isRegularFont>
                    {item?.message}
                  </Text>
                </Wrapper>
                <Text isSmall isTextColor2>
                  {item?.timestamp}
                </Text>

                <Spacer isBasic />
              </Wrapper>
            );
          }
        })}
        <Spacer height={responsiveHeight(10)} />
      </ScrollViews.WithKeyboardAvoidingView>
      {/* Chat Input caontainer */}
      <Wrapper style={styles.ChatInputMainContainer}>
        <Wrapper style={styles.ChatInputContainer}>
          <TextInput
            placeholder="Your message"
            placeholderTextColor={colors.appBorderColor2}
            style={styles.InputStyles}
          />
          <Icons.Button
            iconName={'emotsmile'}
            iconType={'simple-line-icon'}
            iconColor={colors.appBorderColor1}
            buttonStyle={{
              padding: 0,
            }}
            iconSize={isTablet?totalSize(2.4):scale(20)}
          />
          <Icons.Button
            iconName={'link'}
            iconType={'octicon'}
            iconColor={colors.appBorderColor1}
            buttonStyle={{
              padding: 0,
            }}
            iconSize={isTablet?totalSize(2.4):scale(20)}
          />

          <Icons.Button
            isRound
            customIcon={appIcons.sendIcon}
            iconColor={colors.appBgColor1}
            buttonColor={colors.appBGColor}
            buttonStyle={{
              height:isTablet?totalSize(4.6): responsiveHeight(4.5),
              width:isTablet?totalSize(4.6): scale(36),
              //borderColor: colors.appBorderColor2,
            }}
            iconSize={scale(20)}
          />
        </Wrapper>
        <Icons.Button
          isRound
          iconName={'microphone'}
          iconType={'material-community'}
          iconColor={colors.appPrimaryColor}
          isWithBorder
          buttonStyle={{
            height: isTablet?totalSize(5.6): responsiveHeight(6),
            width:isTablet?totalSize(5.6): scale(48),
            borderColor: colors.appBorderColor2,
          }}
          iconSize={scale(22)}
        />
      </Wrapper>
    </Wrapper>
  );
};

export default Index;

const styles = StyleSheet.create({
  headerMainContainer: {
    paddingVertical: sizes.smallMargin,
    marginTop: sizes.statusBarHeight + responsiveHeight(0.5),
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: sizes.baseMargin,
    backgroundColor: colors.appBgColor1,
  },
  BackButtonMainContainer: {
    //height: scale(48),
    //width: scale(48),
    borderWidth: 1,
    padding: responsiveWidth(2),
    borderRadius: responsiveWidth(100),
    borderColor: colors.appBorderColor2,
    ...appStyles.center,
  },
  BadgeMainContainer: {
    height: scale(8),
    width: scale(8),
    top: scale(4),
    left: scale(29),
    backgroundColor: colors.appBgColor1,
    borderRadius: responsiveWidth(100),
    //padding: scale(1.5),
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  BadgeInnerContainer: {
    flex: 1,
    margin: scale(1.1),
    // alignSelf: 'center',
    //left: scale(0.06),
    backgroundColor: '#13C634',
    borderRadius: responsiveWidth(100),
  },
  OptionMainContainer: {
    //height: responsiveHeight(18),
    width: responsiveWidth(36),
    backgroundColor: colors.appBgColor1,
    ...appStyles.shadowDark,
    borderRadius: responsiveWidth(3),
    padding: scale(18),
    //zIndex: 2,
  },
  ChatInputMainContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    //height: sizes.buttonHeight,
    width: responsiveWidth(100),
    paddingVertical: responsiveHeight(2),
    backgroundColor: colors.appBgColor1,
    paddingHorizontal: sizes.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ChatInputContainer: {
    height: responsiveHeight(6),
    width:isTablet?width(78): responsiveWidth(72),
    borderWidth: 1,
    borderRadius: 150,
    borderColor: colors.appBorderColor2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: sizes.TinyMargin,
  },
  InputStyles: {
    width: responsiveWidth(43),
    fontSize: fontSizes.regular,
    //backgroundColor: 'blue',
  },
  MeMessageContainer: {
    borderRadius: responsiveWidth(4),
    borderBottomRightRadius: 0,
    maxWidth: responsiveWidth(70),
    minWidth: responsiveWidth(10),
    left: responsiveWidth(20),
  },
  OtherMessaageContainer: {
    borderRadius: responsiveWidth(4),
    borderBottomLeftRadius: 0,
    maxWidth: responsiveWidth(70),
    minWidth: responsiveWidth(10),
    //left: responsiveWidth(20),
    backgroundColor: colors.appBorderColor2,
  },
});
