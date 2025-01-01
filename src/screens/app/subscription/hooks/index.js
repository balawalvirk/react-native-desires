import {useMemo, useState} from 'react';
import {Icons, Lines, Spacer, Text, Wrapper} from '../../../../components';
import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {
  appIcons,
  appStyles,
  colors,
  fontSizes,
  responsiveHeight,
  responsiveWidth,
  sizes,
} from '../../../../services';
import {color} from '@rneui/base';

export function useHooks() {
  const [CurrentPage, setCurrentPage] = useState('Visible Profiles');

  function handleCurrentPage({PageName}) {
    setCurrentPage(PageName);
  }

  const VisiblePackages = useMemo(() => [
    {
      IsGold: true,
      name: 'Gold Member Package',
      description: 'Unlock Gold Benefits and Access Additional Features',
      coins: {
        value: 50,
        originalValue: 100,
        discount: '50% OFF',
      },
      features: [
        'Overview of other members in the area',
        'See who likes your profile',
        'Profile marked Gold',
        'Better ranking on the homepage',
        'Start unlimited new conversations',
        'Change your location every time',
        'You get 500 free minutes for call/video',
      ],
    },
    {
      IsVip: true,
      name: 'VIP Member Package',
      description: 'Unlock VIP Benefits and Access Additional Features',
      coins: {
        value: 100,
        originalValue: 200,
        discount: '50% OFF',
      },
      features: [
        'Overview of other members in the area',
        'See who likes your profile',
        'Always displayed in top positions',
        'Profile marked VIP',
        'See all private pictures',
        'Start unlimited new conversations',
        'Change your location every time',
        'You get 500 free minutes for call/video',
      ],
    },
  ]);

  const InvisiblePackages = useMemo(() => [
    {
      IsGhostNomal: true,
      name: 'Ghost Member Package',
      description: 'Unlock Ghost Benefits and Access Additional Features',
      coins: {
        value: 20,
        originalValue: 40,
        discount: '50% OFF',
      },
      features: [
        'You profile is only visible to friends',
        'Stealth icons for free',
        'You get 200 free minutes for call/video',
      ],
    },
    {
      IsGhostVip: true,
      name: 'Ghost Member Package',
      description: 'Unlock Ghost Benefits and Access Additional Features',
      coins: {
        value: 100,
        originalValue: 200,
        discount: '50% OFF',
      },
      features: [
        'You profile is only visible to friends',
        'Stealth icons for free',
        'Overview of other members in the area',
        'See who likes your profile',
        'See all private pictures',
        'Start unlimited new conversations',
        'Change your location every time',
        'You get 1000 free minutes for call/video',
      ],
    },
    {
      IsVip: true,
      name: 'Celebrity Member Package',
      description: 'Unlock Celebrity Benefits and Access Additional Features',
      coins: {
        value: 500,
        originalValue: 1000,
        discount: '50% OFF',
      },
      features: [
        'You profile is only visible to friends',
        'Stealth icons for free',
        'Overview of other members in the area',
        'See who likes your profile',
        'See all private pictures',
        'Start unlimited new conversations',
        'Change your location every time',
        'Nobody can take screenshots',
      ],
    },
  ]);

  const RenderItem = ({IsVip, IsGold, IsGhostNomal, IsGhostVip, Item}) => {
    const DefaultBackGroundColor = IsVip
      ? colors.appPrimaryColor
      : IsGold
      ? colors.GoldLabelBackground
      : IsGhostNomal
      ? '#F6F6F6'
      : IsGhostVip
      ? colors.appBGColor
      : null;
    const styles = StyleSheet.create({
      cardMainContainer: {
        height: verticalScale(140),
        backgroundColor: DefaultBackGroundColor,
        borderRadius: scale(16),
        padding: sizes.baseMargin,
      },
    });
    return (
      <Wrapper
        style={{width: responsiveWidth(100), height: verticalScale(400)}}>
        <Wrapper marginHorizontalBase style={styles.cardMainContainer}>
          <Spacer isSmall />
          <Text
            isSmallTitle
            isBoldFont
            isWhite={!IsGhostNomal}
            children={Item?.name}
          />
          <Spacer isSmall />
          <Text
            isSmall
            isRegularFont
            isWhite={!IsGhostNomal}
            isTextColor2={IsGhostNomal}
            style={{width: scale(240)}}>
            {Item?.description}
          </Text>
          <Spacer isBasic />
          <Wrapper flexDirectionRow alignItemsFlexEnd>
            <Text
              isSmallTitle
              isBoldFont
              isWhite={!IsGhostNomal}
              style={{
                // backgroundColor: 'green',
                width: scale(100),
              }}>
              {Item?.coins?.value} Coins
            </Text>
            <Wrapper
              isAbsolute
              isCenter
              style={{left: scale(105), bottom: 4}}
              //backgroundColor={'blue'}
            >
              <Text isSmall isRegularFont isWhite={!IsGhostNomal} style={{}}>
                {Item?.coins?.originalValue}
              </Text>
              <Wrapper isAbsolute style={{bottom: scale(6)}}>
                <Lines.Horizontal
                  color={IsGhostNomal ? colors.appBGColor : 'white'}
                  height={1}
                  width={scale(20)}
                />
              </Wrapper>
            </Wrapper>
          </Wrapper>
          <Wrapper
            isAbsolute
            isCenter
            flexDirectionRow
            style={{
              height: scale(69),
              width: scale(69),
              borderRadius: responsiveWidth(100),
              backgroundColor: colors.appPrimaryColor,
              bottom: -scale(20),
              right: 5,
              ...appStyles.shadowDark,
            }}>
            <Text isMediumTitle isWhite>
              50
            </Text>
            <Wrapper //backgroundColor={'blue'}
              style={{height: scale(20)}}>
              <Text isRegular isBoldFont isWhite>
                %
              </Text>
              <Text isTiny isBoldFont isWhite>
                OFF
              </Text>
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Spacer isDoubleBase />
        <Wrapper gap={responsiveHeight(1.5)}>
          {Item?.features.map((label, index) => (
            <Wrapper
              key={index}
              flexDirectionRow
              marginHorizontalLarge
              alignItemsCenter
              justifyContentSpaceBetween>
              <Text isRegular isRegularFont>
                {label}
              </Text>
              <Icons.Custom icon={appIcons.TickCircle} size={scale(20)} />
            </Wrapper>
          ))}
        </Wrapper>
      </Wrapper>
    );
  };

  return {
    CurrentPage,
    handleCurrentPage,
    RenderItem,
    VisiblePackages,
    InvisiblePackages,
  };
}
