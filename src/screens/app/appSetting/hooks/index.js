import React, {useMemo, useState} from 'react';
import {
  appIcons,
  appImages,
  appStyles,
  colors,
  headers,
  responsiveHeight,
  responsiveWidth,
} from '../../../../services';
import {scale} from 'react-native-size-matters';
import {StyleSheet, View} from 'react-native';
import {
  Icons,
  Images,
  Lines,
  Spacer,
  Text,
  Wrapper,
} from '../../../../components';

export function useHooks() {
  const [LanguageModal, setLanguageModal] = useState(false);
  const [AccessModal, setAccessModal] = useState(false);
  const [TermsConditionsModal, setTermsConditionsModal] = useState(false);
  const [PrivacyPolicyModal, setPrivacyPolicyModal] = useState(false);
  const [AppIconsVip, setAppIconVip] = useState(false);
  const [AppIconSealth, setAppIconSealth] = useState(false);

  const handleToggleLocationModal = () => {
    setLanguageModal(!LanguageModal);
  };
  const handleToggleIconVip = () => {
    setAppIconVip(!AppIconsVip);
  };
  const handleToggleIconSealth = () => {
    setAppIconSealth(!AppIconSealth);
  };
  const handleToggleAccessModal = () => {
    setAccessModal(!AccessModal);
  };
  const handleToggleTermsConditionsModal = () => {
    setTermsConditionsModal(!TermsConditionsModal);
  };
  const handleTogglePrivacyPolicyModal = () => {
    setPrivacyPolicyModal(!PrivacyPolicyModal);
  };

  const LanguageModalData = useMemo(() => [
    {customIcon: appIcons.germany, label: 'German'},
    {customIcon: appIcons.unitedstates, label: 'English'},
    {customIcon: appIcons.france, label: 'French'},
    {customIcon: appIcons.spain, label: 'Spanish'},
  ]);

  const unitsData = useMemo(() => [
    {label: 'Distance', unit: 'Km'},
    {label: 'Length', unit: 'Cm'},
    {label: 'Weight', unit: 'Kg'},
  ]);

  const IconVipData = useMemo(() => [
    {
      customleftIcon: appIcons.applogo,
      leftColor: colors.appPrimaryColor,
      title: 'Desires VIP',
      description: 'Red',
      rightText: 'Choose',
    },
    {
      customleftIcon: appIcons.applogo,
      leftIconColor: colors.appPrimaryColor,
      leftColor: '#221831',
      title: 'Desires VIP',
      description: 'Black',
      rightText: 'Choose',
    },
  ]);
  const IconSealthData = useMemo(() => [
    {
      leftColor: colors.appPrimaryColor,
      title: 'Champions League',
      rightText: 'Buy',
    },
    {
      leftColor: '#221831',
      title: 'Flight Radar',
      rightText: 'Buy',
    },
    {
      leftColor: '#0866FF',
      title: 'Gym Tips',
      rightText: 'Buy',
    },
    {
      leftColor: '#DB9501',
      title: 'Health Care',
      rightText: 'Buy',
    },
    {
      leftColor: '#CC01DB',
      title: 'MLS News',
      rightText: 'Buy',
    },
  ]);

  return {
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
  };
}

export const Options = React.memo(
  ({
    leftMainContainerSize,
    isRounded,
    customleftIcon,
    leftIconSize,
    leftIconColor,
    leftColor,
    title,
    description,
    rightText,
    onPressRight,
  }) => {
    const [ShowOption, setShowOption] = useState(false);

    const styles = StyleSheet.create({
      BadgeMainContainer: {
        height: scale(8),
        width: scale(8),
        top: scale(5),
        left: scale(39),
        backgroundColor: colors.appBgColor1,
        borderRadius: responsiveWidth(100),
      },
      BadgeInnerContainer: {
        flex: 1,
        margin: scale(1.1),
        backgroundColor: '#13C634',
        borderRadius: responsiveWidth(100),
      },
      OptionMainContainer: {
        height: responsiveHeight(18),
        width: responsiveWidth(36),
        top: responsiveHeight(5),
        right: responsiveWidth(7),
        backgroundColor: colors.appBgColor1,
        ...appStyles.shadowDark,
        borderRadius: responsiveWidth(3),
        padding: scale(18),
        zIndex: 2,
      },
    });

    return (
      <View>
        <Wrapper
          flexDirectionRow
          marginHorizontalBase
          marginVerticalSmall
          //backgroundColor={'pink'}
          alignItemsCenter>
          {/* Image */}
          <Wrapper
            isCenter
            style={{
              height: leftMainContainerSize ? leftMainContainerSize : scale(48),
              width: leftMainContainerSize ? leftMainContainerSize : scale(48),
              borderRadius: 150,
            }}
            backgroundColor={leftColor && leftColor}>
            {customleftIcon ? (
              <Icons.Custom
                containerStyle={
                  isRounded && {
                    borderRadius: 150,
                    overflow: 'hidden',
                  }
                }
                color={leftIconColor}
                icon={customleftIcon ? customleftIcon : appImages.image4}
                size={leftIconSize ? leftIconSize : scale(48)}
              />
            ) : null}
          </Wrapper>
          {/* Text Name And Id */}
          <Wrapper
            marginHorizontalSmall
            justifyContentCenter
            //backgroundColor={'blue'}
            style={{width: responsiveWidth(56)}}>
            <Text isRegular isBoldFont>
              {title}
            </Text>
            {description && (
              <Text isSmall isRegularFont isTextColor2>
                {description}
              </Text>
            )}
          </Wrapper>
          {/* Icons of Chat and the options */}
          <Wrapper
            flex={1}
            alignItemsFlexEnd
            style={{height: responsiveHeight(4)}}>
            <Text isPrimaryColor isSmall isMediumFont onPress={onPressRight}>
              {rightText}
            </Text>
          </Wrapper>
        </Wrapper>
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
  },
);
