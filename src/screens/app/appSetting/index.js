import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {
  Text,
  BarButtons,
  Buttons,
  Headers,
  Labels,
  Modals,
  ScrollViews,
  Spacer,
  Switches,
  TextInputs,
  Wrapper,
  Icons,
} from '../../../components';
import {
  appIcons,
  appImages,
  appStyles,
  colors,
  fontSizes,
  headers,
  responsiveHeight,
  responsiveWidth,
  sizes,
} from '../../../services';
import {scale, verticalScale} from 'react-native-size-matters';
import {Options, useHooks} from './hooks';

export default function Index() {
  const {
    unitsData,
    LanguageModal,
    LanguageModalData,
    handleToggleLocationModal,
    AccessModal,
    handleToggleAccessModal,
    PrivacyPolicyModal,
    handleTogglePrivacyPolicyModal,
    TermsConditionsModal,
    handleToggleTermsConditionsModal,
    AppIconsVip,
    AppIconSealth,
    handleToggleIconVip,
    handleToggleIconSealth,
    IconVipData,
    IconSealthData,
  } = useHooks();
  return (
    <Wrapper isMain>
      <Headers.Primary showBackArrow title={'App - Settings'} />
      <ScrollViews.KeyboardAvoiding>
        <Spacer isSmall />
        {/* Languages Input */}
        <TextInputs.Bordered
          InputLabel={'Language'}
          placeholder={'English'}
          iconSizeRight={scale(24)}
          placeholderTextColor={colors.appTextColor2}
          customIconRight={appIcons.Down}
          onPress={handleToggleLocationModal}
        />
        <Spacer isBasic />
        {/* Audio & Video Call Input */}
        <TextInputs.Bordered
          InputLabel={'Audio & Video Call'}
          placeholder={'Not Activate'}
          placeholderTextColor={colors.appTextColor2}
          customIconRight={appIcons.Down}
          onPress={() => {}}
          right={<Switches.Custom />}
        />
        <Spacer isBasic />
        {/* Discover  */}
        <TextInputs.Bordered
          InputLabel={'Discover'}
          placeholder={'Show me'}
          placeholderTextColor={colors.appTextColor2}
          customIconRight={appIcons.Down}
          onPress={() => {}}
          right={<Switches.Custom />}
        />
        <Spacer isBasic />
        {/* App Icon  */}
        <Wrapper gap={responsiveHeight(1)}>
          <TextInputs.Bordered
            InputLabel={'App Icons'}
            placeholder={'VIP'}
            placeholderTextColor={colors.appTextColor2}
            customIconRight={appIcons.Forward}
            onPress={() => {
              handleToggleIconVip();
            }}
          />
          <TextInputs.Bordered
            //InputLabel={'App Icons'}
            placeholder={'Stealth Mode'}
            placeholderTextColor={colors.appTextColor2}
            customIconRight={appIcons.Forward}
            onPress={() => {
              handleToggleIconSealth();
            }}
          />
        </Wrapper>
        <Spacer isBasic />

        {/* Notifications  */}
        <Wrapper gap={responsiveHeight(1)}>
          <TextInputs.Bordered
            InputLabel={'Notifications'}
            placeholder={'Chats'}
            placeholderTextColor={colors.appTextColor2}
            customIconRight={appIcons.Down}
            onPress={() => {}}
            right={<Switches.Custom />}
          />
          <TextInputs.Bordered
            placeholder={'Friend Requests'}
            placeholderTextColor={colors.appTextColor2}
            customIconRight={appIcons.Down}
            onPress={() => {}}
            right={<Switches.Custom />}
          />
          <TextInputs.Bordered
            placeholder={'Likes'}
            placeholderTextColor={colors.appTextColor2}
            customIconRight={appIcons.Down}
            onPress={() => {}}
            right={<Switches.Custom />}
          />
          <TextInputs.Bordered
            placeholder={'Audio & Video Call'}
            placeholderTextColor={colors.appTextColor2}
            customIconRight={appIcons.Down}
            onPress={() => {}}
            right={<Switches.Custom />}
          />
        </Wrapper>
        <Spacer isBasic />
        <Wrapper marginHorizontalBase>
          <Text isSmall isMediumFont children={'UNITS'} />
          <Spacer isTiny />
        </Wrapper>
        <Wrapper gap={responsiveHeight(1)}>
          {unitsData.map((item, index) => (
            <Wrapper
              key={index}
              flexDirectionRow
              alignItemsCenter
              justifyContentSpaceBetween
              paddingHorizontalBase
              style={{
                ...appStyles.inputFieldBorderd,
                borderWidth: 1.5,
                borderRadius: responsiveWidth(100),
                borderColor: colors.appBgColor3,
              }}>
              <Text
                isMedium
                isRegularFont
                isTextColor2
                children={item?.label}
              />
              <Icons.WithText
                direction={'row-reverse'}
                text={item?.unit}
                textStyle={{
                  color: colors.appTextColor2,
                  fontSize: fontSizes.medium,
                }}
                customIcon={appIcons.Down}
                iconSize={scale(24)}
              />
            </Wrapper>
          ))}
        </Wrapper>
        <Spacer isBasic />
        {/* Privacy  */}
        <Wrapper gap={responsiveHeight(1)}>
          <TextInputs.Bordered
            InputLabel={'Privacy'}
            placeholder={'Privacy Policy'}
            iconSizeRight={scale(24)}
            placeholderTextColor={colors.appTextColor2}
            customIconRight={appIcons.Down}
            onPress={handleTogglePrivacyPolicyModal}
          />
          <TextInputs.Bordered
            placeholder={'Terms & Conditions'}
            iconSizeRight={scale(24)}
            placeholderTextColor={colors.appTextColor2}
            customIconRight={appIcons.Down}
            onPress={handleToggleTermsConditionsModal}
          />
          <TextInputs.Bordered
            placeholder={'Access'}
            iconSizeRight={scale(24)}
            placeholderTextColor={colors.appTextColor2}
            customIconRight={appIcons.Down}
            onPress={handleToggleAccessModal}
          />
        </Wrapper>
        <Wrapper paddingVerticalBase>
          <Text alignTextCenter isTextColor2 children={'2023 DESIRES 0.0.1'} />
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
      {/* Languages Modal */}
      <Modals.PopupPrimary
        isBlur
        visible={LanguageModal}
        toggle={handleToggleLocationModal}
        mainContainerStyle={{height: responsiveHeight(75)}}
        containerStyle={{flex: 1}}>
        <View style={{height: responsiveHeight(74)}}>
          <ScrollViews.KeyboardAvoiding>
            <Wrapper>
              <Labels.ModalLabelWithCross
                Title={'Language'}
                onPress={handleToggleLocationModal}
              />
              <Spacer isBasic />
              <BarButtons.IconWithTextSelectOptions
                NoColorOfIcon
                Data={LanguageModalData}
              />
            </Wrapper>
          </ScrollViews.KeyboardAvoiding>
        </View>
        <Wrapper style={styles.buttonONtheBottom} paddingVerticalBase>
          <Buttons.Colored text={'Apply'} onPress={handleToggleLocationModal} />
        </Wrapper>
      </Modals.PopupPrimary>

      {/* Access Modal */}
      <Modals.PopupPrimary
        isBlur
        visible={AccessModal}
        toggle={handleToggleAccessModal}
        children={
          <Wrapper>
            <Labels.ModalLabelWithCross
              Title={'Access'}
              onPress={handleToggleAccessModal}
            />
            <Wrapper marginHorizontalBase>
              <Text
                isRegular
                isRegularFont
                children={'2 Factor Authentication'}
              />
            </Wrapper>
            <Spacer height={responsiveHeight(5)} />
            <Text
              alignTextCenter
              isRegular
              isRegularFont
              children={'Email: dean@dexxire.com'}
            />
            <Spacer isBasic />
            <Buttons.Colored text={'Update email'} />
            <Spacer isSmall />
            <Buttons.Colored text={'Change Password'} />
            <Spacer height={verticalScale(180)} />
            <Wrapper paddingVerticalBase>
              <Text
                alignTextCenter
                isPrimaryColor
                isMedium
                isMediumFont
                children={'Delete My Profile'}
                onPress={handleToggleAccessModal}
              />
            </Wrapper>
          </Wrapper>
        }
      />
      {/* Terms & Conditions Modal */}
      <Modals.PopupPrimary
        isBlur
        disableSwipe
        visible={TermsConditionsModal}
        toggle={handleToggleTermsConditionsModal}>
        <ScrollViews.KeyboardAvoiding>
          <Wrapper>
            <Labels.ModalLabelWithCross
              Title={'Terms & Conditions'}
              onPress={handleToggleTermsConditionsModal}
            />
            <Wrapper marginHorizontalBase>
              <Text isRegular isRegularFont isTextColor2>
                General Terms and Conditions of the DESIRES app Valid version
                November 22, 2024.{'\n'}
                <Spacer isMedium />
                <Text isPrimaryColor isMediumFont>
                  Introduction:{'\n'}
                </Text>
                By accessing the DESIRES app and the connected websites
                (hereinafter referred to as "websites"), you agree to these
                terms of use and the privacy policy
                (https://desires.app/privacy-policy). The general terms and
                conditions consist of 5 essential parts:{'\n'}
                <Spacer isBasic />
                I. Community Guidelines{'\n'}
                <Spacer isBasic />
                II. DESIRES User Agreement{'\n'}
                <Spacer isBasic />
                III. Legal terms of use {'\n'}
                <Spacer isBasic />
                IV. Terms and conditions for messages
                {'\n'}
                <Spacer isBasic />
                V. EULA - Licensed Application End User License Agreement (Apple
                AppStore)
                {'\n'}
                <Spacer isBasic />
                By registering with DESIRES you agree to all terms and
                conditions. A violation can lead to immediate exclusion from our
                community.
                {'\n'}
                <Spacer isBasic />
                1. COMMUNITY GUIDELINES
                {'\n'}Our community thrives on honesty, friendliness, and
                respect. We want to create a space in which users can express
                themselves freely as long as they do not insult or harass
                others. At DESIRES, everyone is valued equally. Please be
                considerate, think before you act, and abide by our Community
                Guidelines.
                {'\n'}
                <Spacer isBasic />
                <Text isPrimaryColor isMediumFont>
                  Prohibited behavior:
                </Text>
                {'\n'}
                <Spacer isBasic />
                1. Profile picture
                {'\n'}
                <Spacer isBasic />
                The profile picture must be a picture of yourself. You should be
                clearly recognizable, i.e., your face should be visible. If you
                are concerned about your privacy, book an invisible membership.
                These have been specially developed for this case and make you
                invisible. You see every member, but you are
              </Text>
            </Wrapper>
          </Wrapper>
          <Spacer isBasic />
        </ScrollViews.KeyboardAvoiding>
      </Modals.PopupPrimary>
      {/* Privacy Policy Modal */}
      <Modals.PopupPrimary
        isBlur
        disableSwipe
        visible={PrivacyPolicyModal}
        toggle={handleTogglePrivacyPolicyModal}>
        <ScrollViews.KeyboardAvoiding>
          <Wrapper>
            <Labels.ModalLabelWithCross
              Title={'Privacy Policy'}
              onPress={handleTogglePrivacyPolicyModal}
            />
            <Wrapper marginHorizontalBase>
              <Text>
                <Text isMediumFont isPrimaryColor>
                  Privacy Policy of DESIRES App Inc.
                </Text>
                {'\n'}
                <Spacer isBasic />
                Effective Version: 22.11.2024
                {'\n'}
                This Privacy Policy explains how DESIRES App Inc. (hereinafter
                "we", "us", or "DESIRES") collects, uses, stores, and shares
                personal and non-personal data of users (hereinafter "users" or
                "you") of the DESIRES App and associated websites (hereinafter
                "Website" and "App"). We respect your privacy and are committed
                to protecting your data. This Privacy Policy applies to all
                products and services offered by DESIRES, including the Website
                and the App.
                {'\n'}
                <Spacer isBasic />
                <Text isMediumFont isPrimaryColor>
                  1. Collection of Personal Data
                </Text>
                {'\n'}
                <Spacer isBasic />
                We collect personal data in various ways to provide and improve
                our services. This data may be collected through our iOS and
                Android apps as well as through the Website.
                {'\n'}
                The personal data we collect includes:
                {'\n'}- Name: Your full name provided during registration or
                through interactions with the App and Website.
                {'\n'}- Username: The name you choose to identify yourself
                within the App or on the Website.
                {'\n'}- Email Address: The email address you provide during
                registration or for communication with us.
                {'\n'}- Phone Number: Your phone number, which you provide
                during registration or to use certain features (e.g., SMS
                notifications).
                {'\n'}- Location Data: We may collect your location if you
                enable this feature in the settings of your App to offer
                geo-specific features or personalize certain services.
              </Text>
            </Wrapper>
          </Wrapper>
          <Spacer isBasic />
        </ScrollViews.KeyboardAvoiding>
      </Modals.PopupPrimary>
      {/* Vip Mode */}
      <Modals.PopupPrimary
        isBlur
        disableSwipe
        visible={AppIconsVip}
        toggle={handleToggleIconVip}
        mainContainerStyle={{height: responsiveHeight(75)}}
        containerStyle={{flex: 1}}>
        <ScrollViews.KeyboardAvoiding>
          <Wrapper>
            <Labels.ModalLabelWithCross
              Title={'App Icons - VIP'}
              onPress={handleToggleIconVip}
            />
          </Wrapper>
          <Spacer isSmall />
          <Wrapper marginHorizontalBase>
            <Text isRegular isRegularFont>
              As a VIP member, you not only stand out with a larger profile in
              the Desires app, but also on your smartphone. Only you as a VIP
              can choose from 2 different icons with a VIP logo.
            </Text>
          </Wrapper>
          <Spacer isSmall />
          <Wrapper style={{height: responsiveHeight(58.5)}}>
            {IconVipData.map((item, index) => (
              <Options
                key={index}
                //isRounded
                title={item?.title}
                customleftIcon={appIcons.applogo}
                leftIconColor={item?.leftIconColor}
                leftColor={item?.leftColor}
                leftIconSize={scale(20)}
                description={item?.description}
                rightText={item?.rightText}
              />
            ))}
          </Wrapper>
          <Wrapper style={styles.buttonONtheBottom}>
            <Buttons.Colored text={'Reset'} />
          </Wrapper>
        </ScrollViews.KeyboardAvoiding>
      </Modals.PopupPrimary>
      {/* Stealth Mode */}
      <Modals.PopupPrimary
        isBlur
        disableSwipe
        visible={AppIconSealth}
        toggle={handleToggleIconSealth}
        mainContainerStyle={{height: responsiveHeight(75)}}
        containerStyle={{flex: 1}}>
        <ScrollViews.KeyboardAvoiding>
          <Wrapper>
            <Labels.ModalLabelWithCross
              Title={'App Icons - Sealth Icons'}
              onPress={handleToggleIconSealth}
            />
          </Wrapper>
          <Spacer isSmall />
          <Wrapper marginHorizontalBase>
            <Text isRegular isRegularFont>
              As a Phantom or Celebrity member you have the opportunity to
              disguise the Desires app. You can choose from 10 different topics.
              The app icon changes, as well as the app name. This means you can
              install Desires completely discreetly on your smartphone.{'\n'}
              During your Phantom or celebrity membership, all ICONS are free
              for you.{'\n'}
              If you are not yet Phantom or Celebrity member, each ICON costs 10
              Coins.{'\n'}
            </Text>
          </Wrapper>
          <Spacer isSmall />
          <Wrapper style={{height: responsiveHeight(58.5)}}>
            {IconSealthData.map((item, index) => (
              <Options
                key={index}
                title={item?.title}
                leftColor={item?.leftColor}
                //leftIconSize={scale(55)}
                description={item?.description}
                rightText={item?.rightText}
              />
            ))}
          </Wrapper>
          <Wrapper style={styles.buttonONtheBottom}>
            <Buttons.Colored text={'Reset'} />
            <Spacer isSmall />
          </Wrapper>
        </ScrollViews.KeyboardAvoiding>
      </Modals.PopupPrimary>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  buttonONtheBottom: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: sizes.smallMargin,
    marginVertical: sizes.smallMargin,
  },
});
