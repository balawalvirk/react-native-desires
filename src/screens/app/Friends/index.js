import React, {Component, useState} from 'react';
import {
  Wrapper,
  Text,
  Headers,
  Icons,
  Spacer,
  Lines,
  Labels,
  Images,
  StatusBars,
} from '../../../components';
import {useHooks} from './hooks';
import {
  appIcons,
  appImages,
  appStyles,
  colors,
  responsiveHeight,
  responsiveWidth,
  routes,
  sizes,
} from '../../../services';
import {scale} from 'react-native-size-matters';
import {
  FlatList,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Badge} from '@rneui/base';
import {navigate} from '../../../navigation/rootNavigation';

export default function Index() {
  const {FriendRenderDetail, data} = useHooks();

  const [OptionShown, setOptionShown] = useState(false);

  const RenderFlatListHeader = () => {
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
              Friends
            </Text>
            <Icons.Button
              isRound
              customIcon={appIcons.Menu}
              iconSize={scale(22)}
              customPadding={responsiveWidth(2.5)}
              isWithBorder
              buttonStyle={{backgroundColor: colors.appBgColor1}}
              onPress={() => {
                setOptionShown(!OptionShown);
              }}
            />
          </Wrapper>
        </View>
        <Spacer isSmall />
        <Wrapper
          paddingVerticalTiny
          paddingHorizontalBase
          marginHorizontalBase
          flexDirectionRow
          alignItemsCenter
          justifyContentSpaceBetween
          style={{
            height: sizes.inputHeight,
            borderWidth: 1,
            borderRadius: responsiveWidth(100),
            borderColor: colors.appBorderColor2,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigate(routes.friendRequests);
            }}>
            <Text isRegular isRegularFont>
              Friend Requests
              <Text isPrimaryColor> (3)</Text>
            </Text>
          </TouchableOpacity>
          <Wrapper
            //flex={1}
            justifyContentFlexend
            marginVerticalTiny
            //backgroundColor={'red'}
            style={{height: sizes.inputHeight * 0.85}}>
            <Lines.Horizontal height={responsiveHeight(3)} width={1} />
          </Wrapper>
          <TouchableOpacity
            onPress={() => {
              navigate(routes.requestSent);
            }}>
            <Text isRegular isRegularFont>
              Request Sent
              <Text isPrimaryColor> (4)</Text>
            </Text>
          </TouchableOpacity>
        </Wrapper>
        <Spacer isBasic />
        <Labels.Normal Label={'My All Friends (6)'} />
        <Spacer isBasic />
      </View>
    );
  };
  return (
    <Wrapper flex={1} backgroundColor={colors.appBgColor1}>
      <Spacer isStatusBarHeigt />
      <StatusBars.Dark />
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<RenderFlatListHeader />}
        renderItem={({item, index}) => (
          <FriendRenderDetail Detail={item} key={index} />
        )}
        ListFooterComponent={<Spacer height={responsiveHeight(12)} />}
      />
      {/* Options ConTainer */}
      {OptionShown ? (
        <Wrapper
          paddingHorizontalBase
          paddingVerticalBase
          backgroundColor={colors.appBgColor1}
          isAbsolute
          style={{
            top: responsiveHeight(12),
            right: responsiveWidth(9.5),
            zIndex: 3,
            borderRadius: responsiveWidth(3),
            height: responsiveHeight(10),
            width: responsiveWidth(40),
            ...appStyles.shadowDark,
          }}>
          <View>
            <Text
              isSmall
              isRegularFont
              onPress={() => {
                setOptionShown(!OptionShown);
                navigate(routes.inviteFriends);
              }}>
              Invite Friends
            </Text>
            <Spacer isSmall />
            <Text
              isSmall
              isRegularFont
              onPress={() => {
                setOptionShown(!OptionShown);
                navigate(routes.blockedUser);
              }}>
              Blocked Users{' '}
              <Text isSmall isRegularFont isPrimaryColor>
                (12)
              </Text>
            </Text>
            <Spacer isSmall />
          </View>
        </Wrapper>
      ) : null}
      {/* to Close that option Container */}
      {OptionShown ? (
        <Wrapper
          isAbsoluteFill
          //backgroundColor={'red'}
          style={{
            height: responsiveHeight(110),
            top: 0,
            left: 0,
            zIndex: 1,
          }}>
          <Pressable
            style={{flex: 1}}
            onPress={() => {
              setOptionShown(!OptionShown);
            }}
          />
        </Wrapper>
      ) : null}
    </Wrapper>
  );
}

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
});
