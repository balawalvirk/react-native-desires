import React, {Component, useMemo, useState} from 'react';
import {Wrapper, Headers, Spacer, Icons, Buttons} from '../../../components';
import {useHooks} from './hooks';
import {scale} from 'react-native-size-matters';
import {
  appFonts,
  appIcons,
  colors,
  fontSizes,
  responsiveHeight,
  responsiveWidth,
  sizes,
} from '../../../services';
import {TouchableOpacity} from 'react-native';
import {goBack} from '../../../navigation/rootNavigation';

export default function Index() {
  const {} = useHooks();
  const [Value, setValue] = useState('Female');

  const Data = useMemo(
    () => [
      {IconName: 'male-outline', Title: 'Male'},
      {IconName: 'female-outline', Title: 'Female'},
      {IconName: 'transgender-outline', Title: 'Transexual'},
    ],
    [],
  );
  return (
    <Wrapper isMain>
      <Headers.Primary showBackArrow title={'My Search'} />
      <Spacer isBasic />
      {Data.map((item, index) => (
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
      </Wrapper>
    </Wrapper>
  );
}
