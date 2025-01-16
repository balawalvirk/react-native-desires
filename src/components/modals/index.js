import React, {Fragment, useEffect, useMemo, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ViewPropTypes,
  FlatList,
  Platform,
  ScrollView,
} from 'react-native';
import {Icon} from '@rneui/base';
import {
  colors,
  sizes,
  appStyles,
  useKeyboardStatus,
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  appIcons,
  fontSizes,
  useImagePicker,
} from '../../services';
import Modal from 'react-native-modal';
import Wrapper from '../wrapper';
import Text from '../text';
import Spacer from '../spacer';
import * as Icons from '../icons';
import * as Buttons from '../buttons';
import * as ScrollViews from '../scrollViews';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Labels, Lines, MyAnimated, TextInputs} from '..';
import {scale, verticalScale} from 'react-native-size-matters';
import MapView, {Marker, Circle} from 'react-native-maps';
import {MapStyling} from '../../services/utilities/assets/mapStyling';

// export const Swipable = ({ children, title, isVisible, toggleModal, footerFlex, headerFlex }) => {
//     return (
//         <Modal
//             isVisible={isVisible}
//             swipeDirection="down"
//             onSwipeComplete={toggleModal}
//             style={{ margin: 0 }}
//             // backdropOpacity={0}
//             onBackdropPress={toggleModal}
//         >
//             <Wrapper flex={1}>
//                 <Wrapper flex={headerFlex ? headerFlex : 1.5} />
//                 <Wrapper flex={footerFlex ? footerFlex : 8.5} style={[styles.swipableModalFooter]}>
//                     {children}
//                     <Wrapper style={[styles.barContainer]}>
//                         <Wrapper style={[appStyles.center]}>
//                             <TouchableOpacity onPress={toggleModal}>
//                                 <Lines.Horizontal
//                                     height={4}
//                                     width={responsiveWidth(15)}
//                                     style={{ borderRadius: 5 }}
//                                     color={colors.appBgColor3}
//                                 />
//                             </TouchableOpacity>
//                             <Spacer isBasic />
//                             <Text isTinyTitle>{title}</Text>
//                         </Wrapper>
//                     </Wrapper>
//                     <Wrapper isAbsolute style={[{ top: sizes.baseMargin * 1.5, left: sizes.marginHorizontal }]}>
//                         <Icon
//                             name="close"
//                         />
//                     </Wrapper>
//                 </Wrapper>
//             </Wrapper>
//         </Modal>
//     );
// }

export function Swipable({
  visible,
  toggle,
  disableSwipe,
  disableBackdropPress,
  topMargin,
  headerTitle,
  headerRight,
  headerLeft,
  hideHeader,
  children,
  backdropOpacity,
  backdropColor,
  containerStyle,
  isBlur,
  onKeyborderOpenHeightDown,
}) {
  const [blurStart, setBlurStart] = useState(false);

  useEffect(() => {
    if (visible) {
      if (!blurStart) {
        setTimeout(() => setBlurStart(!blurStart), 400);
      }
    } else {
      setBlurStart(false);
    }
  }, [visible, toggle, keyboardVisible]);
  // manage keyboard
  const keyboardVisible = useKeyboardStatus();

  const defaultTopMargin = keyboardVisible
    ? responsiveHeight(12)
    : topMargin
    ? Platform.OS === 'ios'
      ? topMargin
      : topMargin + responsiveHeight(5)
    : responsiveHeight(12);
  return (
    <Modal
      isVisible={visible} // Comment on video User
      style={{margin: 0}}
      onSwipeComplete={toggle}
      swipeDirection={disableSwipe ? null : 'down'}
      propagateSwipe
      onBackdropPress={disableBackdropPress ? null : toggle}
      backdropOpacity={backdropOpacity ? backdropOpacity : 0}
      backdropColor={backdropColor && backdropColor}>
      <Wrapper flex={1}>
        {/* <TouchableOpacity onPress={disableBackdropPress ? null : toggle} activeOpacity={1} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, }}>
                    <LinearGradient style={{ flex: 1 }}
                        colors={['#00000000', '#000000BF']}
                    />
                </TouchableOpacity> */}
        <Wrapper flex={1} justifyContentFlexend>
          <TouchableOpacity
            onPress={disableBackdropPress ? null : toggle}
            activeOpacity={1}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}>
            {isBlur && blurStart ? (
              <Wrapper flex={1} animation={'fadeIn'}>
                <BlurView
                  style={{flex: 1}}
                  blurType="dark"
                  blurAmount={3}
                  reducedTransparencyFallbackColor="white"
                />
              </Wrapper>
            ) : (
              <LinearGradient
                style={{flex: 1}}
                colors={['#00000000', '#000000BF']}
              />
            )}
          </TouchableOpacity>
          <MyAnimated.AnimatedView
            NotFlexed
            onPressStart={keyboardVisible && onKeyborderOpenHeightDown}
            onPressClosed={!keyboardVisible && onKeyborderOpenHeightDown}
            height={-onKeyborderOpenHeightDown}>
            <Wrapper
              style={[
                {
                  //flex: 1,
                  //marginTop: defaultTopMargin,
                  backgroundColor: colors.appBgColor1,
                  borderTopRightRadius: 25,
                  borderTopLeftRadius: 25,
                  //...appStyles.shadowExtraDark
                },
                containerStyle,
              ]}>
              {hideHeader ? null : (
                <Wrapper style={appStyles.rowCompContainer}>
                  <Wrapper style={{alignItems: 'center', right: 0, left: 0}}>
                    <Text isTinyTitle style={[appStyles.headerTitleStyle]}>
                      {/* {data ? data.length + ' People' : 0 + ' People'} */}
                      {headerTitle ? headerTitle : 'Title'}
                    </Text>
                  </Wrapper>
                  <Wrapper>
                    {headerLeft ? (
                      headerLeft
                    ) : (
                      // <BackIcon
                      //     onPress={toggle}
                      //     color={colors.appTextColor6}
                      // />
                      <Icon
                        name="x"
                        type="feather"
                        size={responsiveFontSize(2.5)}
                        color={colors.appTextColor1}
                        onPress={toggle}
                      />
                    )}
                  </Wrapper>

                  <Wrapper style={{}}>{headerRight}</Wrapper>
                </Wrapper>
              )}
              {children}
            </Wrapper>
            <Wrapper
              isAbsoluteFill
              backgroundColor={colors.appBorderColor1}
              style={{
                top: -12,
                left: 10,
                right: 10,
                zIndex: -999,
                borderRadius: responsiveWidth(5),
              }}
            />
          </MyAnimated.AnimatedView>
        </Wrapper>
      </Wrapper>
    </Modal>
  );
}

export function PopupPrimary({
  visible,
  toggle,
  isBlur,
  title,
  info,
  iconName,
  iconType,
  customIcon,
  buttonText1,
  buttonText2,
  onPressButton1,
  onPressButton2,
  topMargin,
  children,
  scrollEnabled,
  backdropColor,
  backdropOpacity,
  onPressClose,
  button1Style,
  button2Style,
  keyboardShouldPersistTaps,
  headerTitle,
  topImage,
  headerRight,
  closeIconColor,
  disableSwipe,
  icon,
  disableBackdropPress,
  headerTitleStyle,
  preBottom,
  headerStyle,
  closeIconSize,
  rightContainerStyle,
  closeIconContainerSize,
  buttonWrapperShadow,
  headerBottom,
  titleStyle,
  buttonText1Style,
  buttonText2Style,
  headerSubtitleStyle,
  headerSubtitle,
  buttonsDirection,
  buttonsContainerStyle,
  mainContainerStyle,
  containerStyle,
  onKeyborderOpenHeightDown,

  //loaders
  loadingButton1,
  loadingButton2,
}) {
  // manage keyboard
  const keyboardVisible = useKeyboardStatus();

  const defaultTopMargin =
    Platform.OS === 'ios' ? responsiveHeight(50) : responsiveHeight(40);
  const customTopMargin = keyboardVisible
    ? responsiveHeight(10)
    : topMargin
    ? Platform.OS === 'ios'
      ? topMargin
      : topMargin - responsiveHeight(10)
    : defaultTopMargin;
  const isRowButtons =
    buttonsDirection === 'row' || buttonsDirection === 'row-reverse';
  return (
    <Swipable
      visible={visible}
      toggle={toggle}
      hideHeader
      topMargin={customTopMargin}
      backdropColor={backdropColor}
      backdropOpacity={backdropOpacity ? backdropOpacity : 0}
      disableSwipe={disableSwipe}
      disableBackdropPress={disableBackdropPress}
      containerStyle={mainContainerStyle}
      isBlur={isBlur}
      onKeyborderOpenHeightDown={onKeyborderOpenHeightDown}>
      <Wrapper style={containerStyle}>
        {headerTitle ? (
          <Wrapper style={{}}>
            <Wrapper
              style={[
                {
                  paddingHorizontal: sizes.marginHorizontal,
                  backgroundColor: 'transparent',
                  paddingBottom: sizes.marginVertical,
                  paddingTop: sizes.marginVertical * 1.5,
                  justifyContent: 'center',
                },
                headerStyle,
              ]}>
              <Text
                isSmallTitle
                style={[appStyles.textCenter, headerTitleStyle]}>
                {headerTitle}
              </Text>
              {headerSubtitle ? (
                <Text
                  isRegular
                  style={[
                    appStyles.textCenter,
                    {marginTop: sizes.smallMargin},
                    headerSubtitleStyle,
                  ]}>
                  {headerSubtitle}
                </Text>
              ) : null}
              <Wrapper
                isAbsolute
                style={[
                  {
                    right: sizes.marginHorizontal,
                    top: sizes.marginVertical * 1.3,
                  },
                  rightContainerStyle,
                ]}>
                {headerRight ? (
                  headerRight
                ) : onPressClose ? (
                  <Icons.Button
                    iconName="close"
                    iconColor={
                      closeIconColor ? closeIconColor : colors.appTextColor1
                    }
                    //buttonColor={colors.appBgColor3}
                    onPress={onPressClose}
                    iconSize={
                      closeIconSize ? closeIconSize : responsiveFontSize(3)
                    }
                    buttonSize={
                      closeIconContainerSize
                        ? closeIconContainerSize
                        : responsiveFontSize(4)
                    }
                    isRound
                    //buttonColor={'red'}
                  />
                ) : null}
              </Wrapper>
            </Wrapper>
            {headerBottom && headerBottom}
          </Wrapper>
        ) : (
          <Spacer height={sizes.baseMargin} />
        )}

        <ScrollViews.WithKeyboardAvoidingView
          containerStyle={{flex: 0}}
          scrollEnabled={scrollEnabled}>
          <Wrapper style={[appStyles.alignItemsCenter]}>
            {icon || iconName || customIcon ? (
              <>
                {icon ? (
                  icon
                ) : (
                  <Icons.Button
                    iconName={iconName}
                    iconType={iconType}
                    customIcon={customIcon}
                    iconColor={colors.appTextColor6}
                    buttonColor={colors.appColor1}
                    buttonSize={responsiveFontSize(10)}
                    iconSize={responsiveFontSize(4)}
                    buttonStyle={{borderRadius: 100}}
                  />
                )}
                <Spacer height={sizes.baseMargin * 1.5} />
              </>
            ) : null}
          </Wrapper>
          {title ? (
            <>
              <Wrapper
                marginHorizontalBase
                style={{backgroundColor: 'transparent'}}>
                <Text
                  isSmallTitle
                  isBoldFont
                  style={[appStyles.textCenter, titleStyle]}>
                  {title}
                </Text>
              </Wrapper>
              <Spacer height={sizes.baseMargin} />
            </>
          ) : null}
          {info ? (
            <>
              <Wrapper
                marginHorizontalLarge
                style={{backgroundColor: 'transparent'}}>
                <Text isRegular style={[appStyles.textCenter]}>
                  {info}
                </Text>
              </Wrapper>
              <Spacer isBasic />
            </>
          ) : null}
          {children}
        </ScrollViews.WithKeyboardAvoidingView>
        {preBottom}
        {/* </KeyboardAvoidingView> */}
        {/* <Spacers.Spacer height={sizes.baseMargin} /> */}

        {onPressButton1 || onPressButton2 ? (
          <Wrapper
            marginHorizontalBase
            style={[
              {
                backgroundColor: colors.appBgColor1,
                paddingBottom: sizes.baseMargin * 1.5,
                paddingTop: sizes.baseMargin,
                flexDirection: buttonsDirection || 'column-reverse',
              },
              buttonWrapperShadow && appStyles.shadowDark,
              buttonsContainerStyle,
            ]}>
            {onPressButton2 ? (
              <Wrapper style={[isRowButtons && {flex: 1}]}>
                <Buttons.Bordered
                  text={buttonText2}
                  onPress={onPressButton2}
                  tintColor={colors.appColor1}
                  //tintColor={colors.appTextColor1}
                  buttonStyle={[appStyles.marginHorizontalZero, button2Style]}
                  textStyle={[buttonText2Style]}
                  isLoading={loadingButton2}
                />
              </Wrapper>
            ) : null}
            {onPressButton2 && onPressButton1 ? (
              isRowButtons ? (
                <Spacer width={sizes.marginHorizontal} />
              ) : (
                <Spacer height={sizes.marginVertical} />
              )
            ) : null}

            {onPressButton1 ? (
              <Wrapper style={[isRowButtons && {flex: 1}]}>
                <Buttons.Colored
                  text={buttonText1}
                  onPress={onPressButton1}
                  shadow
                  buttonStyle={[{marginHorizontal: 0}, button1Style]}
                  textStyle={[buttonText1Style]}
                  isLoading={loadingButton1}
                />
              </Wrapper>
            ) : null}
          </Wrapper>
        ) : null}
        {/* <Spacers.Spacer height={sizes.baseMargin} /> */}
      </Wrapper>
    </Swipable>
  );
}

export function ImagePickerPopup({
  visible,
  toggle,
  onPressButton1,
  onPressButton2,
  title,
  button1Text,
  button2Text,
  cancelText,
}) {
  return (
    <PopupPrimary
      visible={visible}
      title={title || 'Choose Image'}
      // buttonText2="Cancel"
      // onPressButton2={toggle}
      toggle={toggle}
      topMargin={responsiveHeight(60)}>
      <Wrapper>
        <Wrapper marginHorizontalBase>
          {onPressButton1 ? (
            <>
              <Buttons.Colored
                text={button1Text || 'Take Photo'}
                //  iconName="camera"
                buttonStyle={{backgroundColor: colors.appBgColor2}}
                textStyle={[{color: colors.appTextColor3}]}
                onPress={() => {
                  toggle();
                  setTimeout(() => {
                    onPressButton1();
                  }, 500);
                }}
                disableShadow
              />
              <Spacer isBasic />
            </>
          ) : null}

          <Buttons.Colored
            text={button2Text || 'Select from Gallery'}
            //iconName="image"
            buttonStyle={{backgroundColor: colors.appBgColor2}}
            textStyle={[{color: colors.appTextColor3}]}
            onPress={() => {
              toggle();
              setTimeout(() => {
                onPressButton2();
              }, 500);
            }}
            disableShadow
          />
          <Spacer isBasic />
          <Buttons.Colored
            text={cancelText || 'Cancel'}
            //iconName="image"
            buttonStyle={{backgroundColor: colors.transparent}}
            textStyle={[{color: colors.appTextColor1}]}
            onPress={() => {
              toggle();
            }}
            disableShadow
          />
        </Wrapper>
      </Wrapper>
    </PopupPrimary>
  );
}

export function PlacesAutocomplete({visible, toggle, OnMapPage}) {
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const styles = StyleSheet.create({
    textInputContainer: {
      ...appStyles.inputFieldBorderd,
      alignItems: 'center',
      paddingHorizontal: responsiveWidth(4.5),
      borderRadius: responsiveWidth(100),
      borderColor: colors.appBorderColor2,
      //justifyContent: 'center',
    },
    textInput: {
      fontSize: fontSizes.medium,
      marginHorizontal: sizes.smallMargin,
    },
    listView: {
      //backgroundColor: 'red',
      marginHorizontal: sizes.mediumMargin,
    },
    MapMainContainer: {
      margin: sizes.baseMargin,
      height: responsiveHeight(24),
      //backgroundColor: 'red',
      borderRadius: responsiveWidth(3),
      overflow: 'hidden',
    },
  });
  const HistoryData = useMemo(
    () => [
      'Orlando',
      'Tampa',
      'Tallahassee',
      'Jacksonville',
      'Fort Lauderdale',
      'Sarasota',
      'Naples',
      'Fort Myers',
    ],
    [],
  );
  return (
    <PopupPrimary
      visible={visible}
      toggle={toggle}
      disableSwipe
      isBlur
      children={
        <ScrollViews.WithKeyboardAvoidingView>
          <Wrapper>
            <Labels.ModalLabelWithCross
              Title={OnMapPage ? 'Select City' : 'Place of Residence'}
              onPress={toggle}
            />
            <Spacer isTiny />
            <GooglePlacesAutocomplete
              placeholder="Find a city"
              textInputProps={{
                placeholderTextColor: colors.appBorderColor1,
              }}
              onPress={(data, details = null) => {
                // Handle the selected place
                console.log(data, details);
              }}
              query={{
                key: 'AIzaSyADMSrJ7cO5UoFG_1PwGU3OHwU4v6Ju7eA', // Replace with your API key
                language: 'en',
              }}
              styles={{
                textInputContainer: styles.textInputContainer,
                textInput: styles.textInput,
                predefinedPlacesDescription: {
                  color: '#1faadb',
                },
                listView: styles.listView,
              }}
              renderLeftButton={() => (
                <Icons.Custom
                  icon={appIcons.Search}
                  size={scale(23)}
                  color={colors.appBorderColor1}
                />
              )}
            />

            <Spacer isBasic />
            <Wrapper marginHorizontalBase>
              <Text isSmall isRegularFont children={'History'} />
            </Wrapper>
            <Spacer isBasic />
            <Wrapper marginHorizontalBase gap={responsiveHeight(1)}>
              {HistoryData.map((item, index) => (
                <Wrapper
                  flexDirectionRow
                  alignItemsCenter
                  justifyContentSpaceBetween
                  key={index}>
                  <Icons.WithText
                    text={item}
                    tintColor={colors.appBorderColor1}
                    iconSize={scale(16)}
                    customIcon={appIcons.LocationHistory}
                    //textContainerStyle={{marginHorizontal: responsiveWidth(5)}}
                  />
                  <Icon
                    name="trending-up"
                    type="feather"
                    size={scale(16)}
                    color={colors.appBorderColor1}
                  />
                </Wrapper>
              ))}
            </Wrapper>
            <Spacer isBasic />
            <Wrapper style={styles.MapMainContainer}>
              <MapView
                style={{width: scale(320), height: scale(250)}}
                customMapStyle={MapStyling}
                initialRegion={{
                  latitude: parseFloat(37.7749), // Set to a starting latitude
                  longitude: parseFloat(-122.4194), // Set to a starting longitude
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}>
                <Marker
                  coordinate={{
                    latitude: 37.7749,
                    longitude: -122.4194,
                  }}
                  pinColor={colors.appPrimaryColor}>
                  <Icons.Custom
                    icon={appIcons.LocationLogo1}
                    size={scale(34)}
                  />
                </Marker>
              </MapView>
              <Wrapper
                isAbsolute
                style={{right: 5, bottom: scale(40), ...appStyles.shadowDark}}>
                <Icons.Button
                  iconName={'plus'}
                  iconType={'antdesign'}
                  iconSize={scale(15)}
                  buttonStyle={{borderRadius: responsiveWidth(100)}}
                />
              </Wrapper>
              <Wrapper
                isAbsolute
                style={{right: 5, bottom: scale(12), ...appStyles.shadowDark}}>
                <Icons.Button
                  iconName={'minus'}
                  iconType={'antdesign'}
                  iconSize={scale(15)}
                  buttonStyle={{borderRadius: responsiveWidth(100)}}
                />
              </Wrapper>
            </Wrapper>
            <Spacer isBasic />
          </Wrapper>
        </ScrollViews.WithKeyboardAvoidingView>
      }
    />
  );
}

export function EditProfile({visible, toggle}) {
  const [CurrentStage, setCurrentStage] = useState(1);
  const [MoreInfos, setMoreInfos] = useState(false);
  const [LifeStyle, setLifeStyle] = useState(false);
  const [Interests, setInterests] = useState(false);
  const [ILove, setILove] = useState(false);

  const {image, openLibrary} = useImagePicker();
  const styles = StyleSheet.create({
    ImportedImageContainer: {
      height: responsiveHeight(16),
      width: responsiveWidth(22),
      borderRadius: responsiveWidth(3),
      resizeMode: 'cover',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFDDDE',
    },
  });

  const FirstStep = () => {
    return (
      <Wrapper>
        <Labels.Normal Label={'Public Pictures'} />
        <Spacer isSmall />
        <Wrapper
          marginHorizontalBase
          flexDirectionRow
          alignItemsCenter
          style={{flexWrap: 'wrap', gap: scale(14)}}>
          {image && (
            <Image source={image} style={styles.ImportedImageContainer} />
          )}
          <Wrapper>
            <TouchableOpacity
              onPress={() => {
                openLibrary();
              }}>
              <Wrapper style={styles.ImportedImageContainer}>
                <Icons.Custom
                  icon={appIcons.UploadImage}
                  color={colors.appPrimaryColor}
                  size={scale(24)}
                />
              </Wrapper>
            </TouchableOpacity>
          </Wrapper>
        </Wrapper>
        <Spacer isDoubleBase />
        <Labels.Normal Label={'Private Pictures'} />
        <Spacer isSmall />
        <Wrapper
          marginHorizontalBase
          flexDirectionRow
          alignItemsCenter
          style={{flexWrap: 'wrap', gap: scale(14)}}>
          {image && (
            <Image source={image} style={styles.ImportedImageContainer} />
          )}
          <Wrapper>
            <TouchableOpacity
              onPress={() => {
                openLibrary();
              }}>
              <Wrapper style={styles.ImportedImageContainer}>
                <Icons.Custom
                  icon={appIcons.UploadImage}
                  color={colors.appPrimaryColor}
                  size={scale(24)}
                />
              </Wrapper>
            </TouchableOpacity>
          </Wrapper>
        </Wrapper>
        <Spacer height={responsiveHeight(10)} />
      </Wrapper>
    );
  };
  const SecondStep = () => {
    const userData = useMemo(
      () => [
        {label: 'Height', placeholder: '', rightText: 'cm'},
        {label: 'Weight', placeholder: '', rightText: 'Kg'},
        {label: 'Chest', placeholder: '', rightText: 'cm'},
        {label: 'Waist', placeholder: '', rightText: 'cm'},
        {label: 'Hips', placeholder: '', rightText: 'cm'},
        {label: 'Eye Color', placeholder: '', rightText: ''},
        {label: 'Hair Color', placeholder: '', rightText: ''},
        {label: 'Hair Length', placeholder: '', rightText: ''},
      ],
      [],
    );
    return (
      <Wrapper>
        <Labels.Normal Label={'My Detail'} />
        <Spacer isSmall />
        <Text
          isRegular
          isRegularFont
          isTextColor2
          style={{marginHorizontal: sizes.baseMargin}}
          children={'Tell us more about yourself'}
        />
        <Spacer isBasic />
        {/* Height and Weight Bar */}
        <Wrapper
          marginHorizontalBase
          paddingHorizontalBase
          paddingVerticalSmall
          flexDirectionRow
          alignItemsCenter
          justifyContentSpaceBetween
          style={{
            borderWidth: 1,
            borderRadius: 150,
            borderColor: colors.appBorderColor2,
          }}>
          <Wrapper
            flexDirectionRow
            alignItemsCenter
            justifyContentSpaceBetween
            //backgroundColor={'red'}
            style={{width: responsiveWidth(80)}}>
            <Wrapper flexDirectionRow alignItemsCenter>
              <Text isSmall isRegularFont isTextColor2>
                lbs
              </Text>
              <Wrapper marginHorizontalBase>
                <Lines.Horizontal height={responsiveHeight(2)} width={1} />
              </Wrapper>
              <Text isSmall isBoldFont isPrimaryColor>
                kg
              </Text>
            </Wrapper>
            <Wrapper marginHorizontalBase>
              <Lines.Horizontal width={responsiveWidth(10)} height={1} />
            </Wrapper>
            <Wrapper flexDirectionRow alignItemsCenter>
              <Text isSmall isBoldFont isPrimaryColor>
                cm
              </Text>
              <Wrapper marginHorizontalBase>
                <Lines.Horizontal height={responsiveHeight(2)} width={1} />
              </Wrapper>
              <Text isSmall isRegularFont isTextColor2>
                inch
              </Text>
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Spacer isBasic />
        {/* Input User Name */}
        <TextInputs.Bordered
          InputLabel={'User Name'}
          placeholder={'Ethan Blake'}
        />
        <Spacer isBasic />
        {/* Language */}
        <TextInputs.Bordered
          InputLabel={'Language'}
          placeholder={'English'}
          customIconRight={appIcons.Down}
          iconSizeRight={scale(24)}
        />
        <Spacer isBasic />
        {/* Age */}
        <TextInputs.Bordered InputLabel={'Age'} placeholder={'25'} />
        <Spacer isBasic />
        {/* Nationality */}
        <TextInputs.Bordered
          InputLabel={'Nationality'}
          placeholder={'United States of America'}
        />
        <Spacer isBasic />
        {/* Ethnicity  */}
        <TextInputs.Bordered
          InputLabel={'Ethnicity '}
          placeholder={'Caucasian'}
          customIconRight={appIcons.Down}
          iconSizeRight={scale(24)}
        />
        <Spacer isBasic />
        <Wrapper flexDirectionRow style={{flexWrap: 'wrap'}}>
          {userData.map((item, index) => (
            <Wrapper
              //backgroundColor={'red'}
              key={index}
              style={{
                marginBottom: sizes.baseMargin,
                width: responsiveWidth(50),
              }}>
              {/* Height  */}
              <TextInputs.Bordered
                InputLabel={item?.label}
                placeholder={'189'}
                containerStyle={{width: responsiveWidth(40)}}
                right={
                  item?.rightText ? (
                    <Text isSmall isBoldFont isPrimaryColor>
                      {item?.rightText}
                    </Text>
                  ) : null
                }
              />
            </Wrapper>
          ))}
          {/* <Wrapper flex={1} style={{width: responsiveWidth(90)}}>
            <TextInputs.Bordered
              InputLabel={'hi'}
              placeholder={'189'}
              containerStyle={{width: responsiveWidth(40)}}
              right={
                <Text isSmall isBoldFont isPrimaryColor>
                  cm
                </Text>
              }
            />
          </Wrapper> */}
        </Wrapper>
        <Spacer isBasic />
      </Wrapper>
    );
  };
  const ThirdStep = () => {
    return (
      <Wrapper style={{}}>
        <Labels.Normal Label={'About Me'} />
        <Spacer isSmall />
        <Text
          isRegular
          isRegularFont
          isTextColor2
          style={{marginHorizontal: sizes.baseMargin}}
          children={'Tell us something more about you'}
        />
        <Spacer isBasic />
        {/* Who i am */}
        <TextInputs.Bordered
          InputLabel={'Who i am?'}
          placeholder={'Infos'}
          right={
            <Icons.WithText
              direction={'row-reverse'}
              customIcon={appIcons.Forward}
              iconSize={scale(24)}
              text={'4 selected'}
              textStyle={{
                fontSize: fontSizes.regular,
                color: colors.appTextColor2,
              }}
            />
          }
          onPress={() => {
            setMoreInfos(!MoreInfos);
          }}
        />
        <Spacer isBasic />
        {/* Life Style */}
        <TextInputs.Bordered
          placeholder={'Lifestyle'}
          right={
            <Icons.WithText
              direction={'row-reverse'}
              customIcon={appIcons.Forward}
              iconSize={scale(24)}
              text={'2 selected'}
              textStyle={{
                fontSize: fontSizes.regular,
                color: colors.appTextColor2,
              }}
            />
          }
          onPress={() => {
            setLifeStyle(!LifeStyle);
          }}
        />
        <Spacer isBasic />
        {/* What do I Love */}
        <TextInputs.Bordered
          InputLabel={'What do I love?'}
          placeholder={'Interests'}
          right={
            <Icons.WithText
              direction={'row-reverse'}
              customIcon={appIcons.Forward}
              iconSize={scale(24)}
              text={'0 selected'}
              textStyle={{
                fontSize: fontSizes.regular,
                color: colors.appTextColor2,
              }}
            />
          }
          onPress={() => {
            setInterests(!Interests);
          }}
        />
        <Spacer isBasic />
        {/* Life Style */}
        <TextInputs.Bordered
          placeholder={'I Love'}
          right={
            <Icons.WithText
              direction={'row-reverse'}
              customIcon={appIcons.Forward}
              iconSize={scale(24)}
              text={'5 selected'}
              textStyle={{
                fontSize: fontSizes.regular,
                color: colors.appTextColor2,
              }}
            />
          }
          onPress={() => {
            setILove(!ILove);
          }}
        />

        <Spacer isBasic />
      </Wrapper>
    );
  };
  const MoreInfosbuttonData = {
    sexType: [
      'Active',
      'Voyer',
      'Sensual',
      'Energetic',
      'Anytime',
      'Role Play',
      'Abstinent',
      'Toys',
      'BDSM',
      'Group',
      'Public',
      'Swinger',
    ],
    relationshipType: ['Polygamy', 'Open Relationship', 'Monogamy'],
    scorePoint: [
      'Show me your dirty side',
      'Make me dream',
      'You give compliments',
      'You kiss well',
      'Entertain me',
    ],
  };
  const LifeStylebuttonData = {
    socialMedia: ['Without me', 'Active', 'Influencer'],
    smoking: ['Smoker', 'Just quit', 'Non-smoker'],
    partyType: [
      'Best daily',
      'Better to watch',
      'Party animal',
      'No dancing',
      'Chilling',
      'Occasionally',
      'All in',
      'Party pooper',
      'Loud & intense',
    ],
  };
  const InterestsbuttonData = {
    travel: [
      'Asia',
      'Camping',
      'Scandinavia',
      'Mountains',
      'Sea',
      '5 stars',
      'Middle East',
      'City trips',
      'Africa',
      'Holiday home',
      'Air travel',
      'Hotel',
    ],
    sport: [
      'Baseball',
      'Ballet',
      'Hockey',
      'Karate',
      'Soccer',
      'Pilates',
      'Snowboarding',
      'Judo',
      'Sport shooting',
      'Sailing',
      'Volleyball',
    ],
  };
  const ILovebuttonData = {
    media: [
      'Apple',
      'Samsung',
      'Microsoft',
      'Black view',
      'CAT',
      'Google',
      'Motorola',
      'LG',
      'Nokia',
      'Acer',
      'HP',
      'Lenovo',
      'HTC',
      'Dell',
    ],
    fashion: [
      'Adidas',
      'Balmain',
      'Chanel',
      'Diesel',
      'Celine',
      'Dior',
      'Cavalli',
      'Barbour',
      'Fendi',
      'Dolce & Gabbana',
      'Burberry',
      'Hugo Boss',
    ],
  };
  return (
    <PopupPrimary
      visible={visible}
      isBlur
      disableSwipe
      toggle={toggle}
      containerStyle={{maxHeight: responsiveHeight(88)}}
      children={
        <View>
          <ScrollViews.WithKeyboardAvoidingView>
            <Labels.ModalLabelWithCross
              Title={'Edit Profile'}
              onPress={toggle}
            />
            <Spacer isBasic />
            <ProgressBar CurrentStandIndex={CurrentStage} />
            <Spacer height={responsiveHeight(5)} />
            {CurrentStage == 1 ? (
              <FirstStep />
            ) : CurrentStage == 2 ? (
              <SecondStep />
            ) : (
              <ThirdStep />
            )}
            <Wrapper
              flex={1}
              justifyContentFlexend
              //isAbsolute
              paddingVerticalBase
              //backgroundColor={'blue'}
              //style={{width: responsiveWidth(100), bottom: 0, left: 0}}
            >
              <Buttons.Colored
                text={'Save'}
                onPress={() => {
                  if (CurrentStage == 3) {
                    toggle();
                  } else {
                    setCurrentStage(perv => perv + 1);
                  }
                }}
              />
            </Wrapper>
            <Spacer isBasic />
            {MoreInfos ? (
              <Wrapper
                isAbsolute
                backgroundColor={colors.appBgColor1}
                style={{
                  top: 0,
                  left: 1,
                  bottom: 0,
                  right: 1,
                  borderTopLeftRadius: responsiveWidth(5),
                  borderTopRightRadius: responsiveWidth(5),
                  //height: responsiveHeight(82),
                  //width: responsiveWidth(100),
                }}>
                <ScrollViews.WithKeyboardAvoidingView>
                  <Wrapper flex={1}>
                    <Labels.ModalLabelWithCross
                      Title={'More Infos'}
                      onPress={() => {
                        setMoreInfos(!MoreInfos);
                      }}
                    />
                    <Spacer isBasic />
                    <ChoseToCompleteYourProfile
                      Label={'Sex Type'}
                      TotalSelectedValues={1}
                      ButtonsData={MoreInfosbuttonData.sexType}
                    />
                    <Spacer isBasic />
                    <ChoseToCompleteYourProfile
                      Label={'Relationship Type'}
                      TotalSelectedValues={1}
                      ButtonsData={MoreInfosbuttonData.relationshipType}
                    />
                    <Spacer isBasic />
                    <ChoseToCompleteYourProfile
                      Label={'Score Point'}
                      TotalSelectedValues={1}
                      ButtonsData={MoreInfosbuttonData.scorePoint}
                    />
                    <Spacer isDoubleBase />
                    <Wrapper paddingVerticalMedium>
                      <Buttons.Colored text={'Add'} />
                    </Wrapper>
                  </Wrapper>
                </ScrollViews.WithKeyboardAvoidingView>
              </Wrapper>
            ) : null}
            {LifeStyle ? (
              <Wrapper
                isAbsolute
                //flex={1}
                backgroundColor={colors.appBgColor1}
                style={{
                  top: 0,
                  left: 1,
                  bottom: 0,
                  right: 1,
                  borderTopLeftRadius: responsiveWidth(5),
                  borderTopRightRadius: responsiveWidth(5),
                }}>
                <ScrollViews.WithKeyboardAvoidingView>
                  <Labels.ModalLabelWithCross
                    Title={'Lifestyle'}
                    onPress={() => {
                      setLifeStyle(!LifeStyle);
                    }}
                  />
                  <Spacer isBasic />
                  <ChoseToCompleteYourProfile
                    Label={'Social Media'}
                    TotalSelectedValues={1}
                    ButtonsData={LifeStylebuttonData.socialMedia}
                  />
                  <Spacer isBasic />
                  <ChoseToCompleteYourProfile
                    Label={'Smoking'}
                    TotalSelectedValues={1}
                    ButtonsData={LifeStylebuttonData.smoking}
                  />
                  <Spacer isBasic />
                  <ChoseToCompleteYourProfile
                    Label={'Party Type'}
                    TotalSelectedValues={1}
                    ButtonsData={LifeStylebuttonData.partyType}
                  />
                  <Spacer height={responsiveHeight(9)} />
                  <Wrapper paddingVerticalMedium>
                    <Buttons.Colored text={'Add'} />
                  </Wrapper>
                </ScrollViews.WithKeyboardAvoidingView>
              </Wrapper>
            ) : null}
            {Interests ? (
              <Wrapper
                isAbsolute
                //flex={1}
                backgroundColor={colors.appBgColor1}
                style={{
                  top: 0,
                  left: 1,
                  bottom: 0,
                  right: 1,
                  borderTopLeftRadius: responsiveWidth(5),
                  borderTopRightRadius: responsiveWidth(5),
                }}>
                <ScrollViews.WithKeyboardAvoidingView>
                  <Labels.ModalLabelWithCross
                    Title={'Interests'}
                    onPress={() => {
                      setInterests(!Interests);
                    }}
                  />
                  <Spacer isBasic />
                  <ChoseToCompleteYourProfile
                    Label={'Travel'}
                    TotalSelectedValues={5}
                    ButtonsData={InterestsbuttonData.travel}
                  />
                  <Spacer isBasic />
                  <ChoseToCompleteYourProfile
                    Label={'Sport'}
                    TotalSelectedValues={5}
                    ButtonsData={InterestsbuttonData.sport}
                  />
                  <Spacer isDoubleBase />
                  <Wrapper paddingVerticalMedium>
                    <Buttons.Colored text={'Add'} />
                  </Wrapper>
                </ScrollViews.WithKeyboardAvoidingView>
              </Wrapper>
            ) : null}
            {ILove ? (
              <Wrapper
                isAbsolute
                //flex={1}
                backgroundColor={colors.appBgColor1}
                style={{
                  top: 0,
                  left: 1,
                  bottom: 0,
                  right: 1,
                  borderTopLeftRadius: responsiveWidth(5),
                  borderTopRightRadius: responsiveWidth(5),
                }}>
                <ScrollViews.WithKeyboardAvoidingView>
                  <Labels.ModalLabelWithCross
                    Title={'I Love'}
                    onPress={() => {
                      setILove(!ILove);
                    }}
                  />
                  <Spacer isBasic />
                  <ChoseToCompleteYourProfile
                    Label={'Media'}
                    TotalSelectedValues={5}
                    ButtonsData={ILovebuttonData.media}
                  />
                  <Spacer isBasic />
                  <ChoseToCompleteYourProfile
                    Label={'Fashion'}
                    TotalSelectedValues={5}
                    ButtonsData={ILovebuttonData.fashion}
                  />

                  <Spacer isDoubleBase />
                  <Wrapper paddingVerticalMedium>
                    <Buttons.Colored text={'Add'} />
                  </Wrapper>
                </ScrollViews.WithKeyboardAvoidingView>
              </Wrapper>
            ) : null}
          </ScrollViews.WithKeyboardAvoidingView>
        </View>
      }
    />
  );
}
const ProgressBar = React.memo(({CurrentStandIndex}) => {
  const CompletedStage = CurrentStandIndex - 1;
  return (
    <Wrapper marginHorizontalBase>
      <Wrapper flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
        {['My Pictures', 'MyDetails', 'About Me'].map((item, index) => (
          <Wrapper key={index} alignItemsCenter>
            <View
              style={{
                width: scale(28),
                height: scale(28),
                borderRadius: 150,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:
                  CompletedStage >= 0 && CompletedStage == index + 1
                    ? colors.appPrimaryColor
                    : CompletedStage == 2 && index == 0
                    ? colors.appPrimaryColor
                    : CurrentStandIndex == index + 1
                    ? colors.appPrimaryColor
                    : colors.appBorderColor2,
              }}>
              {(CompletedStage >= 0 && CompletedStage == index + 1) ||
              (CompletedStage == 2 && index == 0) ? (
                <Icons.Custom icon={appIcons.Tick} size={scale(14)} />
              ) : (
                <Text
                  isWhite={CurrentStandIndex - 1 == index}
                  isTextColor2
                  isSmall
                  isMediumFont
                  alignTextCenter>{`0${index + 1}`}</Text>
              )}
            </View>
            <Spacer isTiny />
            <Text
              isSmall
              isRegularFont
              isPrimaryColor={CurrentStandIndex == index + 1}>
              {item}
            </Text>
          </Wrapper>
        ))}
      </Wrapper>
      <Wrapper
        isAbsolute
        style={{
          top: scale(14),
          left: scale(18),
          zIndex: -1,
          width: responsiveWidth(80),
        }}>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: colors.appBorderColor2,
          }}>
          <View
            style={{
              height: 1,
              backgroundColor: colors.appPrimaryColor,
              width:
                CurrentStandIndex == 1
                  ? responsiveWidth(25)
                  : CurrentStandIndex == 2
                  ? responsiveWidth(60)
                  : CurrentStandIndex == 3
                  ? 'auto'
                  : 0,
            }}
          />
        </View>
      </Wrapper>
    </Wrapper>
  );
});

const ChoseToCompleteYourProfile = React.memo(
  ({TotalSelectedValues, Label, ButtonsData}) => {
    const [SelectedValues, setSelectedValues] = useState([]);
    return (
      <Wrapper marginHorizontalBase>
        {/* Title */}
        <Wrapper flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
          <Text isLarge isBoldFont>
            {Label}
          </Text>
          <Text isTextColor2 isRegular isRegularFont>
            {SelectedValues.length} / {TotalSelectedValues}
          </Text>
        </Wrapper>
        <Spacer isBasic />
        <Wrapper flexDirectionRow style={{flexWrap: 'wrap', gap: scale(8)}}>
          {ButtonsData.map((item, index) => {
            const isSelected = SelectedValues?.includes(item);
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  if (isSelected) {
                    setSelectedValues(perv => perv.splice(index, 1));
                  } else if (!isSelected) {
                    if (
                      TotalSelectedValues > SelectedValues.length &&
                      TotalSelectedValues !== SelectedValues.length
                    ) {
                      setSelectedValues(perv => [...perv, item]);
                    }
                  }
                }}>
                <Wrapper
                  style={[
                    {
                      paddingHorizontal: scale(20),
                      paddingVertical: scale(12),
                      borderWidth: isSelected ? 0 : 1,
                      borderRadius: 150,
                      borderColor: colors.appBorderColor2,
                    },
                    isSelected && {
                      backgroundColor: colors.appBGColor,
                      ...appStyles.shadowExtraDark,
                    },
                  ]}>
                  <Text isTextColor2 isSmall isRegular isWhite={isSelected}>
                    {item}
                  </Text>
                </Wrapper>
              </TouchableOpacity>
            );
          })}
        </Wrapper>
      </Wrapper>
    );
  },
);
