import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appFonts, appIcons, colors, fontSizes, responsiveWidth, sizes } from '../../../../services';
import { Buttons, Icons, Spacer, Wrapper } from '../../../../components';
import { scale } from 'react-native-size-matters';
import DeviceInfo from 'react-native-device-info';
import { height, width, totalSize } from 'react-native-dimension'
const isTablet=DeviceInfo.isTablet()

export const SearchComponent = ({Data,setValue,Value,goBack}) => {
  return (
    <>
    {Data?.map((item, index) => (
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
        <Buttons.Colored text={'Save'} onPress={goBack}
        textStyle={{...(isTablet&&{fontSize:totalSize(1.6)})}}
        
        />

        {isTablet&&<Spacer/>}
      </Wrapper>
      </>
  )
}

const styles = StyleSheet.create({})