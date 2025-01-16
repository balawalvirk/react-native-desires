import React, {Component, useState} from 'react';
import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  Icons,
  Text,
  TextInputs,
  Buttons,
  Wrapper,
  Spacer,
  Lines,
  Modals,
  PhoneNumberInput,
  ScrollViews,
  Swipeables,
  Switches,
  Labels,
} from '../../../components';
import {
  appStyles,
  colors,
  responsiveHeight,
  responsiveWidth,
  appIcons,
  routes,
  fontSizes,
  appFonts,
  useImagePicker,
} from '../../../services';
import {useHooks} from './hooks';
import {scale, verticalScale} from 'react-native-size-matters';
import {Icon} from '@rneui/base';
import {navigate} from '../../../navigation/rootNavigation';
import OTPTextView from 'react-native-otp-textinput';
import {Image} from 'react-native-animatable';

export default function Index(props) {
  const {
    InputFocused,
    SecurePassword1,
    SecurePassword2,
    automatedMessage,
    accepted,
    LoginIconsData,
    GenderData,
    //modals
    personalInfoModal,
    smsAuthModal,
    smsAuthOTPModal,
    uploadImageModal,
    //functions
    handleInputFocused,
    handleAccepted,
    handleAutomatedMessage,
    handleSecurePassword,
    //modalfunctions
    handleTogglePersonInfoModal,
    handleToggleSmsAuthModal,
    handleToggleSmsAuthOTPModal,
    handleToggleUploadImageModal,
  } = useHooks();
  return (
    <Wrapper flex={1}>
      <Wrapper
        paddingVerticalMedium
        backgroundColor={colors.appBgColor1}
        style={styles.DownMainContainer}>
        <Wrapper marginHorizontalBase>
          <Text isSmallTitle children={'Sign Up'} />
          <Spacer isSmall />
          <Text
            isRegular
            isTextColor2
            style={{}}
            children={'Enter your detail below to sign up.'}
          />
        </Wrapper>
        <Spacer isMedium />
        <TextInputs.Bordered
          placeholder={'dean@dexxire.com'}
          onFocus={value => value && handleInputFocused({FocusedOn: 'Email'})}
          isFocusedContainerColor={InputFocused === 'Email' && colors.black}
          customIconRight={appIcons.Email}
          iconSizeRight={responsiveWidth(6.5)}
          iconColorRight={colors.appTextColor1}
        />
        <Spacer isSmall />
        <TextInputs.Bordered
          placeholder={'Enter Password'}
          secureTextEntry={SecurePassword1}
          onFocus={value =>
            value && handleInputFocused({FocusedOn: 'Password'})
          }
          isFocusedContainerColor={InputFocused === 'Password' && colors.black}
          iconNameRight={SecurePassword1 ? 'eye-off' : 'eye'}
          iconTypeRight={'feather'}
          iconColorRight={colors.appTextColor1}
          iconStyleRight={{transform: [{rotate: '180deg'}]}}
          onPressIconRight={() => {
            handleSecurePassword({num: 1});
          }}
        />
        <Spacer isSmall />
        <TextInputs.Bordered
          placeholder={'Renter password'}
          secureTextEntry={SecurePassword2}
          onFocus={value =>
            value && handleInputFocused({FocusedOn: 'Renter password'})
          }
          isFocusedContainerColor={
            InputFocused === 'Renter password' && colors.black
          }
          iconNameRight={SecurePassword2 ? 'eye-off' : 'eye'}
          iconTypeRight={'feather'}
          iconColorRight={colors.appTextColor1}
          iconStyleRight={{transform: [{rotate: '180deg'}]}}
          onPressIconRight={() => {
            handleSecurePassword({num: 2});
          }}
        />
        <Spacer isBase />
        <Buttons.Colored
          text={'Create account'}
          onPress={() => {
            handleToggleSmsAuthModal();
          }}
        />
        <Spacer isBasic />
        <Wrapper flexDirectionRow alignItemsCenter justifyContentCenter>
          <Lines.Horizontal width={responsiveWidth(20)} />
          <Spacer horizontal isSmall />
          <Text isTextColor2 children={'or continue with'} />
          <Spacer horizontal isSmall />
          <Lines.Horizontal width={responsiveWidth(20)} />
        </Wrapper>
        <Spacer isBasic />
        {/* Icons for Login */}
        <Wrapper flexDirectionRow alignItemsCenter justifyContentCenter>
          {LoginIconsData.map((item, index) => (
            <Icons.Button
              key={index}
              buttonStyle={styles.LoginIconStyling}
              iconSize={responsiveWidth(6)}
              iconName={item?.iconName}
              iconType={item?.iconType}
              customIcon={item?.customIcon}
              iconColor={item?.iconColor}
            />
          ))}
        </Wrapper>
        <Spacer isDoubleBase />
        {/* Automated Line */}

        <TouchableOpacity
          onPress={() => {
            handleAutomatedMessage();
          }}>
          <Wrapper
            flexDirectionRow
            alignItemsCenter
            //backgroundColor={'red'}
            marginHorizontalBase>
            <Wrapper
              backgroundColor={
                automatedMessage ? colors.appPrimaryColor : colors.appBgColor1
              }
              isCenter
              style={{
                height: scale(18),
                width: scale(18),
                borderRadius: responsiveWidth(1),
                borderWidth: 1.5,
                borderColor: colors.appBorderColor1,
                overflow: 'hidden',
              }}>
              {automatedMessage ? (
                <Icon
                  name="check"
                  type={'feather'}
                  size={responsiveWidth(3.5)}
                  color={colors.appTextColor6}
                />
              ) : null}
            </Wrapper>
            <Spacer horizontal isSmall />
            <Text isSmall isTextColor2 TextWidth={responsiveWidth(80)}>
              'You consent to receive up to 10 automated messages / month. Reply
              "STOP" to opt out, "HELP" for support. Standard rates apply.'
            </Text>
          </Wrapper>
        </TouchableOpacity>
        <Spacer isBasic />
        <Wrapper alignItemsCenter>
          <Lines.Horizontal width={responsiveWidth(40)} />
        </Wrapper>
        <Spacer isBasic />
        {/* Terms And Policy Line */}

        <TouchableOpacity
          onPress={() => {
            handleAccepted();
          }}>
          <Wrapper
            flexDirectionRow
            alignItemsCenter
            //backgroundColor={'red'}
            marginHorizontalBase>
            <Wrapper
              backgroundColor={
                accepted ? colors.appPrimaryColor : colors.appBgColor1
              }
              isCenter
              style={{
                height: scale(18),
                width: scale(18),
                borderRadius: responsiveWidth(1),
                borderWidth: 1.5,
                borderColor: colors.appBorderColor1,
                overflow: 'hidden',
              }}>
              {accepted ? (
                <Icon
                  name="check"
                  type={'feather'}
                  size={responsiveWidth(3.5)}
                  color={colors.appTextColor6}
                />
              ) : null}
            </Wrapper>
            <Spacer horizontal isSmall />
            <Text isSmall isTextColor2 TextWidth={responsiveWidth(80)}>
              By signing up, you agree to our{' '}
              <Text isPrimaryColor>Privacy Policy, Terms & Conditions</Text>,
              and marketing terms, which you can revoke anytime.
            </Text>
          </Wrapper>
        </TouchableOpacity>
      </Wrapper>

      {/* SMS Authentication */}
      <Modals.PopupPrimary
        visible={smsAuthModal}
        toggle={() => {
          handleToggleSmsAuthModal();
          if (smsAuthOTPModal) {
            handleToggleSmsAuthOTPModal();
          }
        }}
        disableSwipe={true}
        isBlur
        //onKeyborderOpenHeightDown={responsiveHeight(18)}
        children={
          <Wrapper
            style={{
              height: responsiveHeight(58),
            }}>
            <Wrapper
              //backgroundColor={'red'}
              alignItemsFlexStart
              marginHorizontalBase
              style={{width: responsiveWidth(90)}}>
              <Icons.Back
                color={colors.black}
                size={responsiveWidth(5)}
                onPress={() => {
                  handleToggleSmsAuthModal();
                  if (smsAuthOTPModal) {
                    handleToggleSmsAuthOTPModal();
                  }
                }}
              />
              <Spacer isBasic />
              <Text isTinyTitle children={'SMS Authentication'} />
              <Spacer isSmall />
              <Text isRegular isTextColor2>
                Verification{' '}
                {smsAuthOTPModal ? (
                  <Text isTextColor2> - Enter the SMS code</Text>
                ) : null}
              </Text>
            </Wrapper>
            <Spacer isDoubleBase />
            {smsAuthOTPModal ? (
              <Wrapper marginHorizontalMedium>
                <OTPTextView
                  inputCount={6}
                  textInputStyle={{
                    borderWidth: 1,
                    borderRadius: 150,
                    borderBottomWidth: 1,
                    height: scale(42),
                    width: scale(42),
                  }}
                  tintColor={colors.appBGColor}
                  offTintColor={colors.appBorderColor2}
                />
              </Wrapper>
            ) : (
              <PhoneNumberInput />
            )}

            <Spacer isMedium />
            <Buttons.Colored
              text={smsAuthOTPModal ? 'Verify Code' : 'Send Code'}
              onPress={() => {
                if (smsAuthOTPModal) {
                  handleToggleSmsAuthModal();
                  handleTogglePersonInfoModal();
                  handleToggleSmsAuthOTPModal();
                } else {
                  handleToggleSmsAuthOTPModal();
                }
              }}
            />
            <Spacer isBase />
            {smsAuthOTPModal ? (
              <Wrapper flexDirectionRow alignItemsCenter justifyContentCenter>
                <Text isRegular isTextColor2 alignTextCenter>
                  Didn’t received a code?{' '}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    //handleForgotPasswordModal();
                    //handleCurrentPage({PageName: 'Sign Up'});
                  }}>
                  <Text isPrimaryColor isMediumFont>
                    Resend Again
                  </Text>
                </TouchableOpacity>
              </Wrapper>
            ) : null}
          </Wrapper>
        }
      />
      {/* Personal Information */}
      <Modals.PopupPrimary
        visible={personalInfoModal}
        toggle={handleTogglePersonInfoModal}
        disableSwipe={true}
        isBlur
        // onKeyborderOpenHeightDown={responsiveHeight(18)}
        children={
          <Wrapper
            style={{
              height: responsiveHeight(80),
            }}>
            <ScrollViews.KeyboardAvoiding>
              <Wrapper
                //backgroundColor={'red'}
                alignItemsFlexStart
                marginHorizontalBase
                style={{width: responsiveWidth(90)}}>
                <Icons.Back
                  color={colors.black}
                  size={responsiveWidth(5)}
                  onPress={handleTogglePersonInfoModal}
                />
                <Spacer isBasic />
                <Text isTinyTitle children={'Personal Information'} />
                <Spacer isSmall />
                <Text isRegular isTextColor2>
                  Enter the following info to complete your profile
                </Text>
              </Wrapper>
              <Spacer isDoubleBase />
              <TextInputs.Bordered
                placeholder={'User name'}
                onFocus={value => {
                  value && handleInputFocused({FocusedOn: 'User Name'});
                }}
                isFocusedContainerColor={
                  InputFocused === 'User Name' && colors.black
                }
                customIconRight={appIcons.user}
                iconSizeRight={responsiveWidth(6.5)}
                iconColorRight={colors.appTextColor1}
              />
              <Spacer isSmall />
              <TextInputs.Bordered
                placeholder={'13 Jan 2025'}
                onFocus={value => {
                  value && handleInputFocused({FocusedOn: 'calender'});
                }}
                isFocusedContainerColor={
                  InputFocused === 'calender' && colors.black
                }
                customIconRight={appIcons.Calender}
                iconSizeRight={responsiveWidth(6.5)}
                iconColorRight={colors.appTextColor1}
              />
              <Spacer isBasic />
              <ChoseToCompleteYourProfile
                Label={'Gender'}
                ButtonsData={GenderData}
              />
              <Spacer isBasic />
              <ChoseToCompleteYourProfile
                Label={'Choose who to search for'}
                ButtonsData={GenderData}
              />
              <Spacer isBasic />
              <Wrapper
                marginHorizontalBase
                flexDirectionRow
                alignItemsCenter
                justifyContentSpaceBetween>
                <Text isRegular isRegularFont>
                  Place of residence
                </Text>
              </Wrapper>
              <Spacer isSmall />
              <TextInputs.Bordered
                //InputLabel={'Place of residence'}
                placeholder={'Enter residence'}
                onFocus={value => {
                  value && handleInputFocused({FocusedOn: 'residence'});
                }}
                isFocusedContainerColor={
                  InputFocused === 'residence' && colors.black
                }
                customIconRight={appIcons.Email}
                iconSizeRight={responsiveWidth(6.5)}
                iconColorRight={colors.appTextColor1}
              />
              <Spacer isMedium />
              <Wrapper
                flex={1}
                paddingVerticalSmall
                //backgroundColor={'red'}
                justifyContentFlexend>
                <Buttons.Colored
                  text={'Next'}
                  onPress={() => {
                    handleTogglePersonInfoModal();
                    handleToggleUploadImageModal();
                  }}
                />
              </Wrapper>
            </ScrollViews.KeyboardAvoiding>
          </Wrapper>
        }
      />
      {/* Uploade pictures from you */}
      <Modals.PopupPrimary
        visible={uploadImageModal}
        toggle={handleToggleUploadImageModal}
        disableSwipe={true}
        isBlur
        //onKeyborderOpenHeightDown={responsiveHeight(18)}
        children={
          <Wrapper
            style={{
              height: responsiveHeight(81),
            }}>
            <ScrollViews.KeyboardAvoiding>
              <Wrapper
                //backgroundColor={'red'}
                alignItemsFlexStart
                marginHorizontalBase
                style={{width: responsiveWidth(90)}}>
                <Icons.Back
                  color={colors.black}
                  size={responsiveWidth(5)}
                  onPress={handleToggleUploadImageModal}
                />
                <Spacer isBasic />
                <Text isTinyTitle children={'Uploade pictures from you'} />
                <Spacer isSmall />
                <Text isRegular isRegularFont isTextColor2>
                  No nude pictures may be uploaded here. Please upload pictures
                  of this kind only to private galleries. All pictures that
                  violate our guidelines will be deleted immediately.
                </Text>
              </Wrapper>
              <Spacer isDoubleBase />
              {/* upload image */}
              <UploadImage />
              <Spacer isMedium />
              <Wrapper
                marginVerticalBase
                marginHorizontalBase
                flexDirectionRow
                alignItemsCenter
                justifyContentSpaceBetween>
                <Text style={{width: responsiveWidth(73)}}>
                  Do you want to remain invisible to others?{'\n'}The Ghose mode
                  is perfect for you
                </Text>
                <Switches.Custom />
              </Wrapper>
              <Wrapper
                flex={1}
                paddingVerticalSmall
                justifyContentFlexend
                //backgroundDark
              >
                <Buttons.Colored
                  text={'Next'}
                  onPress={() => {
                    handleToggleUploadImageModal();
                    navigate(routes.app);
                  }}
                />
              </Wrapper>
            </ScrollViews.KeyboardAvoiding>
          </Wrapper>
        }
      />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  DownMainContainer: {
    //flex: 1,
    borderTopStartRadius: responsiveWidth(8),
    borderTopEndRadius: responsiveWidth(8),
    //paddingBottom: responsiveHeight(7),
  },
  LoginIconStyling: {
    height: scale(40),
    width: scale(40),
    padding: responsiveWidth(2),
    marginHorizontal: responsiveWidth(2),
    borderRadius: responsiveWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    ...appStyles.shadowExtraDark,
  },
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

const ChoseToCompleteYourProfile = React.memo(
  ({TotalSelectedValues = 1, Label, ButtonsData}) => {
    const [SelectedValues, setSelectedValues] = useState([]);
    return (
      <Wrapper marginHorizontalBase>
        {/* Title */}
        <Wrapper flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
          <Text isRegular isRegularFont>
            {Label}
          </Text>
        </Wrapper>
        <Spacer isSmall />
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
                  isCenter
                  style={[
                    {
                      paddingHorizontal: scale(15),
                      paddingVertical: scale(12),
                      borderWidth: isSelected ? 0 : 1,
                      borderRadius: 150,
                      borderColor: colors.appBorderColor2,
                    },
                    isSelected && {
                      backgroundColor: colors.appPrimaryColor,
                      ...appStyles.shadowExtraDark,
                    },
                  ]}>
                  <Icons.WithText
                    iconName={item?.iconName}
                    iconType={'ionicon'}
                    title={item?.Title}
                    titleStyle={[
                      {
                        fontSize: fontSizes.regular,
                        fontFamily: appFonts.appTextRegular,
                        color: colors.appTextColor2,
                      },
                      isSelected && {
                        color: colors.appBgColor1,
                      },
                    ]}
                    tintColor={isSelected && colors.appBgColor1}
                    iconSize={scale(20)}
                  />
                </Wrapper>
              </TouchableOpacity>
            );
          })}
        </Wrapper>
      </Wrapper>
    );
  },
);

const UploadImage = ({}) => {
  const {image, openLibrary} = useImagePicker();
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
      <Spacer isBasic />
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
    </Wrapper>
  );
};
