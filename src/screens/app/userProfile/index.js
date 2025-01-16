import {
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  Buttons,
  Icons,
  Images,
  Labels,
  Lines,
  Modals,
  ScrollViews,
  Spacer,
  StatusBars,
  Text,
  Wrapper,
} from '../../../components';
import {useHooks} from './hooks';
import {
  appIcons,
  appImages,
  colors,
  fontSizes,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
  routes,
  sizes,
  useImagePicker,
} from '../../../services';
import {color, Icon} from '@rneui/base';
import {scale} from 'react-native-size-matters';
import {goBack, navigate} from '../../../navigation/rootNavigation';

const Index = ({route}) => {
  const visiterProfile = route?.params?.visiterProfile
    ? route?.params?.visiterProfile
    : false;
  const {
    userAboutData,
    RequestAndRevokeData,
    EditProfileModal,
    handleEditProfileModal,
    //
    AddToFavorite,
    AddToFriends,
    handleToggleAddToFavorite,
    handleToggleAddToFriends,
  } = useHooks();
  return (
    <Wrapper isMain>
      <StatusBars.Light />
      <ScrollViews.WithKeyboardAvoidingView>
        <Wrapper
          isImageBackground
          source={visiterProfile ? appImages.image2 : appImages.profile}
          style={styles.ProfileShownMainContainer}>
          <Spacer isTiny />
          {/* Header Buttons */}
          <Wrapper style={styles.HeaderConatiner}>
            <Icons.Button
              isRound
              isWithBorder
              customPadding={responsiveWidth(2)}
              customIcon={appIcons.Back}
              iconSize={scale(24)}
              onPress={goBack}
            />
            <Icons.Button
              isRound
              isWithBorder
              customPadding={responsiveWidth(2)}
              iconName={
                visiterProfile && AddToFavorite
                  ? 'heart'
                  : 'cards-heart-outline'
              }
              customIcon={!visiterProfile && appIcons.sendIcon}
              iconSize={scale(24)}
              iconColor={colors.appPrimaryColor}
              onPress={() => {
                if (visiterProfile) {
                  handleToggleAddToFavorite();
                } else {
                }
              }}
            />
          </Wrapper>
        </Wrapper>
        {/* Details Container */}
        <Wrapper style={styles.MainContainerOfShownDetail}>
          {/* Name and Profession */}
          <Wrapper
            marginHorizontalBase
            marginVerticalBase
            flexDirectionRow
            alignItemsCenter
            justifyContentSpaceBetween>
            <View style={{width: responsiveWidth(70)}}>
              <Text isSmallTitle isBoldFont>
                Ethan Blake, 25
              </Text>
              <Spacer isSmall />
              <Text isRegular isRegularFont isTextColor2>
                Professional Actor
              </Text>
            </View>
            <Icons.Button
              isRound
              isWithBorder
              customPadding={responsiveWidth(2)}
              iconName={AddToFriends ? '' : 'person-add-alt-1'}
              iconType={'materialIcon'}
              iconColor={colors.appPrimaryColor}
              customIcon={
                !visiterProfile
                  ? appIcons.EditPen
                  : visiterProfile && AddToFriends
                  ? appIcons.Message
                  : ''
              }
              iconSize={scale(24)}
              onPress={() => {
                if (visiterProfile) {
                  if (AddToFriends) {
                    navigate(routes.chatScreen);
                  } else {
                    handleToggleAddToFriends();
                  }
                } else {
                  handleEditProfileModal();
                }
              }}
            />
          </Wrapper>
          {/* Locaton  */}
          <Wrapper
            marginHorizontalBase
            marginVerticalBase
            flexDirectionRow
            alignItemsCenter
            justifyContentSpaceBetween>
            <View style={{width: responsiveWidth(70)}}>
              <Text isLarge isBoldFont>
                Location
              </Text>
              <Spacer isSmall />
              <Text isRegular isRegularFont isTextColor2>
                2177 Marigold Lane, United States
              </Text>
            </View>
            <Icons.WithText
              iconName={'location-pin'}
              iconType={'simple-line-icon'}
              iconSize={scale(14)}
              text={'12 km'}
              textStyle={{color: colors.appTextColor2}}
              containerStyle={{
                borderWidth: 1,
                paddingHorizontal: responsiveWidth(2),
                paddingVertical: responsiveWidth(3),
                borderRadius: 150,
                borderColor: colors.appBorderColor2,
              }}
            />
          </Wrapper>
          <Spacer />
          {/*  */}
          <MessageWithActionButton
            Message={'Verified users receive 4X as many messages'}
            ButtonTittle={'Verify Your Profile Now!'}
            onPress={() => {
              navigate(routes.verifyProfile);
            }}
          />
          <Spacer isDoubleBase />
          <PersonalInfoReperisentor Tittle={'About Me'} Data={userAboutData} />
          <Spacer isDoubleBase />
          <PersonalInfoReperisentor
            Tittle={'My Language Skills'}
            Data={[{Label: 'English', Value: 'Native'}]}
          />
          <Spacer isDoubleBase />
          <PersonalInfoReperisentor
            Tittle={'Private Pictures'}
            Data={RequestAndRevokeData}
          />
          <Spacer isDoubleBase />
          <MessageWithActionButton
            Message={'You haven’t uploaded any pictures'}
            ButtonTittle={'Upload Pictures'}
          />
        </Wrapper>
      </ScrollViews.WithKeyboardAvoidingView>
      <Modals.EditProfile
        visible={EditProfileModal}
        toggle={handleEditProfileModal}
      />
    </Wrapper>
  );
};

export default Index;

const styles = StyleSheet.create({
  ProfileShownMainContainer: {
    height: responsiveHeight(50),
    resizeMode: 'stretch',
  },
  HeaderConatiner: {
    marginHorizontal: sizes.baseMargin,
    marginTop: sizes.statusBarHeight,
    //paddingVertical: sizes.baseMargin,
    // backgroundColor: 'red',
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'space-between',
  },
  MainContainerOfShownDetail: {
    flex: 1,
    top: -responsiveHeight(7),
    backgroundColor: colors.appBgColor1,
    //backgroundColor: 'blue',
    borderRadius: responsiveWidth(8),
  },
});

const MessageWithActionButton = React.memo(
  ({Message, ButtonTittle, onPress}) => {
    return (
      <Wrapper
        paddingVerticalSmall
        //paddingHorizontalSmall
        marginHorizontalBase
        backgroundColor={'#FFDDDE'}
        style={{borderRadius: responsiveWidth(5)}}>
        <Text
          alignTextCenter
          isPrimaryColor
          isRegularFont
          style={{fontSize: responsiveFontSize(13)}}>
          {Message}
        </Text>
        <Spacer />
        <Buttons.Colored text={ButtonTittle} onPress={onPress} />
      </Wrapper>
    );
  },
);

const PersonalInfoReperisentor = React.memo(({Tittle, Data}) => {
  return (
    <Wrapper marginHorizontalBase>
      {/* Tittle */}
      <Text isBoldFont isLarge>
        {Tittle}
      </Text>
      <Spacer isBasic />
      {Data ? (
        <Wrapper
          flexDirectionRow
          style={{
            flexWrap: 'wrap',
            gap: scale(8),
          }}>
          {Data.map((item, index) => (
            <Pressable key={index} onPress={item?.onPress}>
              <Wrapper
                key={index}
                flexDirectionRow
                alignItemsCenter
                style={{
                  borderWidth: 1,
                  borderRadius: 150,
                  borderColor: colors.appBorderColor2,
                  paddingHorizontal: scale(12),
                  paddingVertical: scale(10),
                }}>
                <Text isSmall isRegularFont isTextColor2>
                  {item?.Label}
                </Text>
                <Wrapper marginHorizontalSmall>
                  <Lines.Horizontal
                    width={1}
                    height={responsiveHeight(2)}
                    color={colors.appBorderColor2}
                  />
                </Wrapper>
                <Text isSmall isRegularFont isPrimaryColor>
                  {item?.Value}
                </Text>
              </Wrapper>
            </Pressable>
          ))}
        </Wrapper>
      ) : null}
    </Wrapper>
  );
});
