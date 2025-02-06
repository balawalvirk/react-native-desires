import React, {Component, useState} from 'react';
import {
  Wrapper,
  Text,
  Headers,
  Icons,
  Spacer,
  Labels,
  Lines,
  MyAnimated,
  Images,
  StatusBars,
} from '../../../components';
import useHooks from './hooks';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  appIcons,
  appImages,
  appStyles,
  colors,
  fontSizes,
  responsiveHeight,
  responsiveWidth,
  routes,
  sizes,
} from '../../../services';
import {scale} from 'react-native-size-matters';
import {navigate} from '../../../navigation/rootNavigation';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import DeviceInfo from 'react-native-device-info';
import {height, width, totalSize} from'react-native-dimension'
const isTablet =DeviceInfo.isTablet()
// Header
const RenderFlatListHeader = React.memo(({CurrentPage, handleCurrentPage}) => {
  return (
    <View>
      <View>
        <Wrapper
          marginVerticalSmall
          marginHorizontalBase
          flexDirectionRow
          alignItemsCenter
          justifyContentSpaceBetween>
          <Text isSmallTitle isMediumFont>
            Chats
          </Text>
          <Icons.Button
            isRound
            customIcon={appIcons.Search}
            iconSize={scale(22)}
            customPadding={responsiveWidth(2.5)}
            isWithBorder
            buttonStyle={{backgroundColor: colors.appBgColor1}}
            // onPress={() => {
            //   setOptionShown(!OptionShown);
            // }}
          />
        </Wrapper>
      </View>
      <Spacer isSmall />
      <Wrapper
        justifyContentCenter
        alignItemsCenter
        style={styles.ButtonBackContainer}>
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
            width={-responsiveWidth(45)}
            onPressStart={CurrentPage === 'Anrufe'}
            onPressClosed={CurrentPage === 'Chat'}>
            <Wrapper
              style={styles.SeletedLayerContainer}
              backgroundColor={colors.appBGColor}
            />
          </MyAnimated.AnimatedView>
          {['Chat', 'Anrufe'].map((item, index) => {
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
                  isWhite={item == CurrentPage}>
                  {item}
                  <Text
                    isPrimaryColor={item !== CurrentPage}
                    isWhite={item == CurrentPage}>
                    {item == 'Chat' ? ' (3)' : ' (4)'}
                  </Text>
                </Text>
              </TouchableOpacity>
            );
          })}
        </Wrapper>
      </Wrapper>
      <Spacer isBasic />
      <Wrapper
        marginHorizontalBase
        flexDirectionRow
        alignItemsCenter
        justifyContentSpaceBetween>
        <Text
          isMedium
          isBoldFont
          children={CurrentPage == 'Chat' ? 'All Chats (6)' : 'Anrufe (4)'}
        />
        <Text isRegular isPrimaryColor isRegularFont>
          Requests (0)
        </Text>
      </Wrapper>
      <Spacer isBasic />
    </View>
  );
});

// The Component of friends For Chat
const FriendRenderDetailForChat = React.memo(({Detail}) => {
  const [menuIconColor, setMenuIconColor] = useState(colors.appBorderColor1);

  const styles = StyleSheet.create({
    BadgeMainContainer: {
      height: scale(8),
      width: scale(8),
      top: scale(5),
      left: scale(39),
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
  });

  return (
    <View style={{flex: 1}}>
      <Wrapper
        flexDirectionRow
        marginHorizontalBase
        //backgroundColor={'blue'}
        alignItemsCenter>
        {/* Image */}
        <Wrapper>
          <Images.Round source={appImages.image4} size={isTablet?totalSize(6):scale(48)} />
          {/* Bage */}
          {Detail?.ShowOnline ? (
            <Wrapper isAbsolute style={styles.BadgeMainContainer}>
              <Wrapper style={styles.BadgeInnerContainer} />
            </Wrapper>
          ) : null}
        </Wrapper>
        {/* Text Name And Id */}
        <Wrapper
          marginHorizontalSmall
          //backgroundColor={'red'}
          style={{width: responsiveWidth(55)}}>
          <Text isRegular isBoldFont
           style={{...(isTablet&&{fontSize:totalSize(1.6)})}}
          >
            {Detail?.name}, {Detail?.age}
          </Text>
          <Text isSmall isRegularFont isTextColor2
          style={{...(isTablet&&{fontSize:totalSize(1.2)})}}
          >
            {Detail?.lastMessage} {Detail?.lastMessageTime}
          </Text>
        </Wrapper>
        {/* Icons of Chat and the options */}
        <Wrapper
          flex={1}
          flexDirectionRow
          alignItemsCenter
          //backgroundColor={'green'}
          justifyContentSpaceBetween>
          <View
            style={[
              {
                height: scale(8),
                width: scale(8),
                borderRadius: 150,
                //backgroundColor: colors.appBgColor1,
              },
              Detail?.ShowOnline && {backgroundColor: colors.appPrimaryColor},
            ]}
          />
          <Icons.Custom
            icon={appIcons.camera}
            color={colors.appBorderColor1}
            //containerStyle={{transform: [{rotateY: '180deg'}]}}
            size={isTablet?totalSize(2.4):scale(17)}
          />

          <Menu
            onOpen={() => {
              setMenuIconColor(colors.appBGColor);
            }}
            onClose={() => {
              setMenuIconColor(colors.appBorderColor1);
            }}>
            <MenuTrigger>
              <Icons.Custom
                icon={appIcons.Menu}
                color={menuIconColor}
                size={scale(17)}
              />
            </MenuTrigger>
            <MenuOptions
              optionsContainerStyle={[
                styles.OptionMainContainer,
                {marginTop: scale(22), marginLeft: -scale(6)}, // Adjust the margin or padding here
              ]}>
              {['Delete', 'Block', 'Mute', 'Unfriend'].map((item, index) => (
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
      <Spacer isSmall />
      {/* Bottom Line */}
      <Wrapper marginHorizontalBase alignItemsFlexEnd>
        <Lines.Horizontal
          height={1}
          width={responsiveWidth(73)}
          color={colors.appBorderColor2}
        />
      </Wrapper>
    </View>
  );
});
// The Component of friends For Chat
const FriendRenderDetailForAnrufe = React.memo(({Detail}) => {
  const [menuIconColor, setMenuIconColor] = useState(colors.appBorderColor1);

  const styles = StyleSheet.create({
    BadgeMainContainer: {
      height: scale(8),
      width: scale(8),
      top: scale(5),
      left: scale(39),
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
  });

  return (
    <View style={{flex: 1}}>
      <Wrapper
        flexDirectionRow
        marginHorizontalBase
        //backgroundColor={'blue'}
        alignItemsCenter>
        {/* Image */}
        <Wrapper>
          <Images.Round source={appImages.image4} size={isTablet?totalSize(6):scale(48)} />
          {/* Bage */}
          {Detail?.ShowOnline ? (
            <Wrapper isAbsolute style={styles.BadgeMainContainer}>
              <Wrapper style={styles.BadgeInnerContainer} />
            </Wrapper>
          ) : null}
        </Wrapper>
        {/* Text Name And Id */}
        <Wrapper
          marginHorizontalSmall
          //backgroundColor={'red'}
          style={{width: responsiveWidth(48)}}>
          <Text isRegular isBoldFont
           style={{...(isTablet&&{fontSize:totalSize(1.6)})}}
          >
            {Detail?.name}, {Detail?.age}
          </Text>
          <Text isSmall isRegularFont isTextColor2>
            {Detail?.missedCalls ? (
              <Text isPrimaryColor>{Detail?.missedCalls} missed call </Text>
            ) : null}
            {Detail?.lastSeen}
          </Text>
        </Wrapper>
        {/* Icons of Chat and the options */}
        <Wrapper
          flex={isTablet?0:1}
          flexDirectionRow
          alignItemsCenter
          style={{...(isTablet&&{gap:width(2)})}}
          // backgroundColor={'green'}
          justifyContentSpaceBetween>
          <Icons.Custom
            icon={appIcons.Message}
            color={colors.appBorderColor1}
            containerStyle={{transform: [{rotateY: '180deg'}]}}
            size={isTablet?totalSize(2.4):scale(20)}
            onPress={() => {
              navigate(routes.chatScreen);
            }}
          />
          <Icons.Custom
            icon={appIcons.video}
            color={colors.appBorderColor1}
            size={isTablet?totalSize(2.4):scale(20)}
            onPress={() => {
              navigate(routes.videoCall);
            }}
          />
          <Icons.Button
            iconType={'ionicon'}
            iconName={'call-outline'}
            iconColor={colors.appBorderColor1}
            iconSize={isTablet?totalSize(2.4):scale(20)}
            buttonColor={colors.transparent}
            buttonStyle={{padding: 0}}
            onPress={() => {
              navigate(routes.audioCall);
            }}
          />
        </Wrapper>
      </Wrapper>
      <Spacer isSmall />
      {/* Bottom Line */}
      <Wrapper marginHorizontalBase alignItemsFlexEnd>
        <Lines.Horizontal
          height={1}
          width={responsiveWidth(73)}
          color={colors.appBorderColor2}
        />
      </Wrapper>
    </View>
  );
});

export default function Index() {
  const {CurrentPage, handleCurrentPage, data, AnrufeData} = useHooks();

  return (
    <Wrapper isMain>
      <StatusBars.Dark />
      <Spacer isStatusBarHeigt />
      {CurrentPage == 'Chat' ? (
        <FlatList
          data={data}
          ListHeaderComponent={
            <RenderFlatListHeader
              CurrentPage={CurrentPage}
              handleCurrentPage={handleCurrentPage}
            />
          }
          renderItem={({item, index}) => (
            <FriendRenderDetailForChat key={index} Detail={item} />
          )}
        />
      ) : (
        <FlatList
          data={AnrufeData}
          ListHeaderComponent={
            <RenderFlatListHeader
              CurrentPage={CurrentPage}
              handleCurrentPage={handleCurrentPage}
            />
          }
          renderItem={({item, index}) => (
            <FriendRenderDetailForAnrufe key={index} Detail={item} />
          )}
        />
      )}
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  ButtonBackContainer: {
    marginHorizontal: sizes.baseMargin,
    height: sizes.buttonHeight,
    borderRadius: responsiveWidth(3),
    //paddingHorizontal: sizes.TinyMargin,
    borderRadius: responsiveWidth(100),
    // marginBottom: responsiveHeight(4),
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.appBorderColor2,
  },
  SeletedLayerContainer: {
    height: sizes.buttonHeight,
    borderRadius: responsiveWidth(100),
    width: responsiveWidth(45),
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'blue',
  },
});
