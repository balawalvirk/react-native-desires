import React, {useEffect, useMemo, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ViewPropTypes,
  FlatList,
  Platform,
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
import {Labels, TextInputs} from '..';
import {scale} from 'react-native-size-matters';
import MapView, {Marker, Circle} from 'react-native-maps';

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
}) {
  const [blurStart, setBlurStart] = useState(false);

  useEffect(() => {
    if (visible) {
      if (!blurStart) {
        setTimeout(() => setBlurStart(!blurStart), [400]);
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
        {/* <LinearGradient style={{ flex: 1 }}
                colors={['#00000000', '#000000']}
            > */}
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
                  reducedTransparencyFallbackColor="white"></BlurView>
              </Wrapper>
            ) : (
              <LinearGradient
                style={{flex: 1}}
                colors={['#00000000', '#000000BF']}
              />
            )}
          </TouchableOpacity>
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
        </Wrapper>
        {/* </LinearGradient> */}
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
      isBlur={isBlur}>
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

export function PlacesAutocomplete({visible, toggle}) {
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
              Title={'Place of Residence'}
              onPress={toggle}
            />
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
                region={mapRegion}
                //onPress={handleMapPress}
                //ref={mapRef}
              >
                {currentLocation && (
                  <Marker
                    coordinate={currentLocation}
                    pinColor={colors.appColor11}
                    title={'current location'}
                  />
                )}
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
