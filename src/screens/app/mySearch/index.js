import React, { Component, useMemo, useState } from 'react';
import { Wrapper, Headers, Spacer, Icons, Buttons } from '../../../components';
import { useHooks } from './hooks';
import { scale } from 'react-native-size-matters';
import {
  appFonts,
  appIcons,
  colors,
  fontSizes,
  responsiveHeight,
  responsiveWidth,
  sizes,
} from '../../../services';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { goBack } from '../../../navigation/rootNavigation';
import { SearchComponent } from './components';
import DeviceInfo from 'react-native-device-info';
import { height, width, totalSize } from 'react-native-dimension'
import Text from '../../../components/text';

const isTablet = DeviceInfo.isTablet();

export default function Index({navigation}) {
  const { } = useHooks();
  const [Value, setValue] = useState('Female');

  const Data = useMemo(
    () => [
      { IconName: 'male-outline', Title: 'Male' },
      { IconName: 'female-outline', Title: 'Female' },
      { IconName: 'transgender-outline', Title: 'Transexual' },
    ],
    [],
  );
  return (
    <Wrapper isMain>
      {!isTablet && <>
        <Headers.Primary showBackArrow title={'My Search'} />
        <Spacer isBasic />
        <SearchComponent Value={Value} setValue={setValue} Data={Data} />
      </>
      }
      {/* {Data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={{marginVertical: sizes.TinyMargin}}
          onPress={() => {
            setValue(item?.Title);
          }}>
          <Wrapper
            marginHorizontalSmall
            paddingHorizontalBase
            flexDirectionRow
            alignItemsCenter
            justifyContentSpaceBetween
            //marginVerticalTiny
            style={[
              {
                height: sizes.inputHeight,
                borderWidth: 1,
                borderRadius: responsiveWidth(100),
                borderColor: colors.appBorderColor2,
              },
              Value === item?.Title && {
                backgroundColor: colors.appPrimaryColor,
                borderWidth: 0,
              },
            ]}>
            <Icons.WithText
              iconName={item?.IconName}
              iconType={'ionicon'}
              title={item?.Title}
              titleStyle={[
                {
                  fontSize: fontSizes.regular,
                  fontFamily: appFonts.appTextRegular,
                  color: colors.appTextColor2,
                },
                Value === item?.Title && {
                  color: colors.appBgColor1,
                },
              ]}
              tintColor={Value === item?.Title && colors.appBgColor1}
              iconSize={scale(24)}
            />
            {Value === item?.Title && <Icons.Custom icon={appIcons.Tick} />}
          </Wrapper>
        </TouchableOpacity>
      ))}
      <Wrapper
        flex={1}
        justifyContentFlexend
        //backgroundColor={'red'}
        paddingVerticalSmall>
        <Buttons.Colored text={'Save'} onPress={goBack} />
      </Wrapper> */}

      {isTablet && <Wrapper isAbsolute style={{
        ...(isTablet && {
          flex: 1,
          width: width(100),
          height: height(100),
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          justifyContent: 'center'
        })
      }}>
        <Wrapper style={{ ...styles.outerWrap }}>
          <Spacer height={height(1)} />
          <Wrapper style={{ ...styles.innerWrap }}>
            <Text
              isBoldFont
              style={{ ...(isTablet && { fontSize: totalSize(3) }) }}
            >
              {'My Search'}
            </Text>
            <Icons.Back
              color={colors.black}
              iconName={'cross'}
              iconType={'entypo'}
              size={totalSize(3.5)}
              onPress={goBack}
              style={{ alignSelf: 'flex-end' }}
            />
          </Wrapper>

          <Spacer />
          <SearchComponent Value={Value} setValue={setValue} Data={Data} />
          {/* <SupportComponent /> */}
          
        </Wrapper>

      </Wrapper>}

    </Wrapper>
  );
}

const styles = StyleSheet.create({
  outerWrap: {
    width: width(90),
    height: height(75),
    borderRadius: totalSize(2),
    backgroundColor: colors.appBgColor1,
    alignSelf: 'center'
  },
  innerWrap: {
    paddingHorizontal: width(4),
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})