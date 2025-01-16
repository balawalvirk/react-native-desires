import {
  Dimensions,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  appFonts,
  appIcons,
  appImages,
  appStyles,
  colors,
  fontSizes,
  responsiveHeight,
  responsiveWidth,
} from '../../../../services';
import {scale} from 'react-native-size-matters';
import {
  Icons,
  Images,
  Lines,
  Spacer,
  Text,
  Wrapper,
} from '../../../../components';
import {useMemo, useState} from 'react';

export function useHooks() {
  const FriendRenderDetail = ({ShowOnline, Detail}) => {
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
      <View style={{flex: 1}}>
        <Wrapper
          flexDirectionRow
          marginHorizontalBase
          //backgroundColor={'blue'}
          alignItemsCenter>
          {/* Image */}
          <Wrapper>
            <Images.Round source={appImages.image4} size={scale(48)} />
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
            style={{width: responsiveWidth(40)}}>
            <Text isRegular isBoldFont>
              {Detail?.name}, {Detail?.age}
            </Text>
            <Text isSmall isRegularFont isTextColor2>
              {Detail?.location} - {Detail?.distance}km
            </Text>
          </Wrapper>
          {/* Icons of Chat and the options */}
          <Wrapper
            flex={1}
            //backgroundColor={'green'}
            style={{height: responsiveHeight(4)}}>
            <Icons.WithText
              direction={'row-reverse'}
              iconName={'close-outline'}
              iconType={'ionicon'}
              tintColor={colors.appBorderColor1}
              iconSize={scale(18)}
              title={'Revoke Request'}
              titleStyle={{
                color: colors.appPrimaryColor,
                fontSize: fontSizes.small,
                //the need to be changed into proxima Nova
                fontFamily: appFonts.appTextMedium,
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
  };

  const data = useMemo(() => [
    {
      name: 'Jaydon Lubin',
      age: 48,
      location: 'Miami, FL',
      distance: 12,
      ShowOnline: true,
    },
    {
      name: 'Ann Stanton',
      age: 29,
      location: 'Miami Beach, FL',
      distance: 8,
      ShowOnline: true,
    },
    {name: 'Mira Lubin', age: 24, location: 'Chicago, USA', distance: 2},
    {name: 'Anika Kenter', age: 28, location: '5 Depot Drive, FL', distance: 7},
    {
      name: 'Kierra Rhiel Madsen',
      age: 49,
      location: '7278 Grandrose, FL',
      distance: 4,
      ShowOnline: true,
    },
    {
      name: 'Kianna Stanton',
      age: 27,
      location: '831 St Louis, FL',
      distance: 9,
    },
  ]);
  return {FriendRenderDetail, data};
}
