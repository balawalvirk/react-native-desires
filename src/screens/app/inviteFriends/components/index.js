import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Buttons, Lines, ScrollViews, Spacer, TextInputs, Wrapper } from '../../../../components'
import Text from '../../../../components/text'
import { appIcons, colors, fontSizes, responsiveHeight, responsiveWidth } from '../../../../services'
import {height,width,totalSize} from 'react-native-dimension'
import DeviceInfo from 'react-native-device-info'

const isTablet=DeviceInfo.isTablet()

export const InviteFriendComponent = ({}) => {
  return (
    <ScrollViews.KeyboardAvoiding>
    <Wrapper marginHorizontalBase>
      <Text isRegular isRegularFont
      
      style={{...(isTablet&&{fontSize:totalSize(1.4),color:colors.appTextColor8})}}>
        Here you can generate a QR code to refer a person. The person cal
        scan it or receive the invitation by e-mail.
      </Text>
    </Wrapper>
    <Spacer isBasic />
    <TextInputs.Bordered
      InputLabel={'Email'}
      placeholder={'Enter Email'}
      customIconRight={appIcons.Email}
      iconSizeRight={isTablet && totalSize(2.2)}
      inputStyle={{
        ...(isTablet && { fontSize: totalSize(1.5) }), // Applies only if isTablet is true
      }}
    />
    <Spacer isBasic />
    <Buttons.Colored text={'Send Invite'} 
 textStyle={{...(isTablet&&{fontSize:totalSize(1.6)})}}
    />
    <Spacer isDoubleBase />
    <Wrapper flexDirectionRow alignItemsCenter justifyContentCenter>
      <Lines.Horizontal width={responsiveWidth(20)} />
      <Spacer horizontal isBasic />
      <Text isTextColor2 children={'or'} />
      <Spacer horizontal isBasic />
      <Lines.Horizontal width={responsiveWidth(20)} />
    </Wrapper>
    <Spacer isDoubleBase />
    <Wrapper isCenter>
      <Wrapper style={styles.QRMAinContainer}>
        <Wrapper
          isImageBackground
          source={appIcons.inviteQrCode}
          style={styles.QrContainer}
        />
      </Wrapper>
    </Wrapper>
  </ScrollViews.KeyboardAvoiding>
  )
}


const styles = StyleSheet.create({
    QRMAinContainer: {
        //backgroundColor: 'red',
        height: isTablet?totalSize(17):responsiveHeight(26),
        width: isTablet?totalSize(17):responsiveWidth(60),
        borderRadius: responsiveWidth(5),
        borderWidth: 1.5,
        borderColor: colors.appBorderColor2,
        padding: 7,
      },
      QrContainer: {
        flex: 1,
        resizeMode: 'contain',
      },
})