import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Buttons, DropDowns, Spacer, Text, TextInputs, Wrapper } from '../../../../components'
import { fontSizes, responsiveWidth, sizes } from '../../../../services'
import { verticalScale } from 'react-native-size-matters'
import DeviceInfo from 'react-native-device-info'
import {height,width,totalSize} from  'react-native-dimension'
import { color } from '@rneui/base'



const isTablet = DeviceInfo.isTablet()


export const SupportComponent = () => {
  return (
    <>
     <Wrapper marginHorizontalBase>
        <Text isRegular isRegularFont
        style={{...(isTablet&&{fontSize:totalSize(1.6),color:'#9EA1AE'})}}
        >
          If you need help or have any questions, send us an email and we will
          respond to you promptly.
        </Text>
      </Wrapper>
      <Spacer isDoubleBase />
      {/* <Wrapper style={{width:width(90)}}> */}
      <DropDowns.Simple
        ContainerWidth={isTablet&&width(83)}
        selectedTextStyle={{...(isTablet&&{fontSize:totalSize(1.6)})}}
        style={{alignSelf:'center'}}
        // marginHorizontalBase={isTablet}
        DropdownLabel={'Reference'}
        DropdownPlaceHolder={'Select reference'}
      />
      {/* </Wrapper> */}
      <Spacer isBasic />
     
      <TextInputs.Bordered
        InputLabel={'Message'}
        multiline
        placeholder={'Start writing your message here...'}
        containerStyle={{
          borderRadius: responsiveWidth(5),
          alignItems: 'flex-start',
          paddingVertical: sizes.smallMargin,
        }}
        inputStyle={{
          height: verticalScale(150),
          ...(isTablet&&{fontSize:totalSize(1.6)})
        }}
      />
      <Wrapper flex={1} justifyContentFlexend paddingVerticalBase>
        <Buttons.Colored text={'Send'}  textStyle={{...(isTablet&&{fontSize:totalSize(1.6)})}} />
      </Wrapper>
    </>
  )
}


const styles = StyleSheet.create({})