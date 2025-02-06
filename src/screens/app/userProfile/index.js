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
import { useHooks } from './hooks';
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
import { color, Icon } from '@rneui/base';
import { scale } from 'react-native-size-matters';
import { goBack, navigate } from '../../../navigation/rootNavigation';
import DeviceInfo from 'react-native-device-info';
import { height, width, totalSize } from 'react-native-dimension'
import { Camera } from 'react-native-vision-camera';


const isTablet = DeviceInfo.isTablet();

const Index = ({ route }) => {
  const visiterProfile = route?.params?.visiterProfile
    ? route?.params?.visiterProfile
    : false;
  const {
    userAboutData,
    RequestAndRevokeData,
    EditProfileModal,
    handleEditProfileModal,
    verification, setVerification,
    photo, setPhoto,
    cameraRef,
    cameraPermission,
    setCameraPermission,
    device,
    StartCamera,
    takePhoto,
    onPressBack,
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
            <View style={{ width: responsiveWidth(70) }}>
              <Text isSmallTitle isBoldFont
                style={{ ...(isTablet && { fontSize: totalSize(3.2) }) }}
              >
                Ethan Blake, 25
              </Text>
              <Spacer isSmall />
              <Text isRegular isRegularFont isTextColor2
                style={{ ...(isTablet && { fontSize: totalSize(1.4) }) }}
              >
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
              iconSize={isTablet ? totalSize(2.2) : scale(24)}
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
            <View style={{ width: responsiveWidth(70) }}>
              <Text isLarge isBoldFont>
                Location
              </Text>
              <Spacer isSmall />
              <Text isRegular isRegularFont isTextColor2
                style={{ ...(isTablet && { fontSize: totalSize(1.4) }) }}
              >
                2177 Marigold Lane, United States
              </Text>
            </View>
            <Icons.WithText
              iconName={'location-pin'}
              iconType={'simple-line-icon'}
              iconSize={scale(14)}
              text={'12 km'}
              textStyle={{ color: colors.appTextColor2 }}
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
              // if tablet then open popup
              if (isTablet) {
                setVerification(true);

              }
              else {
                // else open in new tab
                navigate(routes.verifyProfile);
              }

            }}
          />
          <Spacer isDoubleBase />
          <PersonalInfoReperisentor Tittle={'About Me'} Data={userAboutData} />
          <Spacer isDoubleBase />
          <PersonalInfoReperisentor
            Tittle={'My Language Skills'}
            Data={[{ Label: 'English', Value: 'Native' }]}
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

      {/* profile verification model  */}


      <Modals.PopupPrimary
        visible={verification}
        toggle={() => setVerification(!verification)}
        disableSwipe={true}
        isBlur
        //onKeyborderOpenHeightDown={responsiveHeight(18)}
        children={
          <Wrapper
            style={{ height: responsiveHeight(58) }}>
            <Wrapper
              //backgroundColor={'red'}
              alignItemsFlexStart
              alignItemsFlexEnd
              marginHorizontalBase
              style={{ width: width(70) }}>
              <Wrapper style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
                <Text isTinyTitle children={'Verification'} />
                <Icons.Back
                  color={colors.black}
                  iconName={isTablet ? 'cross' : "arrow-back"}
                  iconType={isTablet ? 'entypo' : 'ionicon'}
                  size={isTablet ? totalSize(3.5) : responsiveWidth(5)}
                  onPress={onPressBack}
                  style={{ alignSelf: 'flex-end' }}
                />
              </Wrapper>
              <Spacer isSmall />
              <Text isRegular isTextColor2
                style={{
                  ...(isTablet && { fontSize: totalSize(1.5) }), // Applies only if isTablet is true
                }}
              >
                Are you ready for verification?
              </Text>
            </Wrapper>
            {isTablet ? <Spacer /> : <Spacer isDoubleBase />}


            <Wrapper marginHorizontalBase style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              {photo ? (
                <View>
                  <Image
                    source={{ uri: `${'file://'}${photo}` }}
                    style={{
                      height: height(21),
                      width: width(33.5),
                      borderRadius: responsiveWidth(5),
                      overflow: 'hidden',
                      resizeMode: 'cover',
                    }}
                  />
                  <Spacer isSmall />
                </View>
              ) : null}
              <Image source={appImages.image2} style={{
                height: height(21),
                width: width(33.5),
                borderRadius: responsiveWidth(5),
                overflow: 'hidden',
                resizeMode: 'cover',
              }} />
            </Wrapper>
            <Spacer />
            {!photo ?
              <>
                <Spacer height={height(8)} />
                <Buttons.Colored
                  textStyle={{
                    ...(isTablet && { fontSize: totalSize(2) }), // Applies only if isTablet is true
                  }}
                  text={'Start Camera'}
                  onPress={StartCamera}
                />
              </>
              :
              <>
                <Spacer height={height(8)} />
                <Buttons.Colored
                  textStyle={{
                    ...(isTablet && { fontSize: totalSize(2) }), // Applies only if isTablet is true
                  }}
                  text={'Send'}
                  onPress={() => setVerification(false)}
                />
                <Spacer isBase />
                <TouchableOpacity onPress={() => setVerification(false)}>
                  <Text isRegular isTextColor2
                    style={{
                      ...(isTablet && { fontSize: totalSize(1.7), textAlign: 'center', color: colors.appPrimaryColor }), // Applies only if isTablet is true
                    }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>
              </>
            }


          </Wrapper>
        }
      />

{/* added to show camera  on full screen */}
      {cameraPermission ? (
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}>
          <Camera
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            device={device}
            isActive={cameraPermission}
            ref={cameraRef}
            photo={true}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: responsiveHeight(2),
              left: responsiveWidth(41),
            }}
            onPress={takePhoto}>
            <Wrapper
              style={{
                height: scale(60),
                width: scale(60),
                borderRadius: 150,
                backgroundColor: colors.appBgColor1,
              }}
            />
          </TouchableOpacity>
        </View>
      ) : null}

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
  ({ Message, ButtonTittle, onPress }) => {
    return (
      <Wrapper
        paddingVerticalSmall
        //paddingHorizontalSmall
        marginHorizontalBase
        backgroundColor={'#FFDDDE'}
        style={{ borderRadius: responsiveWidth(5) }}>
        <Text
          alignTextCenter
          isPrimaryColor
          isRegularFont
          style={{ fontSize: responsiveFontSize(13) }}>
          {Message}
        </Text>
        <Spacer />
        <Buttons.Colored text={ButtonTittle} onPress={onPress} btnStyle={{ ...(isTablet && { width: width(70), alignSelf: 'center' }) }} textStyle={{ ...(isTablet && { fontSize: totalSize(1.6) }) }} />
      </Wrapper>
    );
  },
);

const PersonalInfoReperisentor = React.memo(({ Tittle, Data }) => {
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
            gap: isTablet ? width(1.5) : scale(8),
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
                  paddingHorizontal: isTablet ? width(1) : scale(12),
                  paddingVertical: isTablet ? height(1) : scale(10),
                }}>
                <Text isSmall isRegularFont isTextColor2
                  style={{ ...(isTablet && { fontSize: totalSize(1.4) }) }}
                >
                  {item?.Label}
                </Text>
                <Wrapper marginHorizontalSmall>
                  <Lines.Horizontal
                    width={1}
                    height={responsiveHeight(2)}
                    color={colors.appBorderColor2}
                  />
                </Wrapper>
                <Text isSmall isRegularFont isPrimaryColor
                  style={{ ...(isTablet && { fontSize: totalSize(1.4) }) }}
                >
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
