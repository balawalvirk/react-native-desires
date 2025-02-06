import { StyleSheet, View } from 'react-native';
import React from 'react';
import {
  Buttons,
  Headers,
  Labels,
  Lines,
  Modals,
  ScrollViews,
  Spacer,
  StatusBars,
  Text,
  TextInputs,
  Wrapper,
} from '../../../components';
import {
  appIcons,
  appStyles,
  colors,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../services';
import { useHooks } from './hooks';
import { InviteFriendComponent } from './components';
import DeviceInfo from 'react-native-device-info';
import { height, width, totalSize } from 'react-native-dimension'
const isTablet = DeviceInfo.isTablet();

export default function Index({navigation}) {
  const { data, visible, setVisible } = useHooks();
  return (
    <Wrapper isMain>
      {!isTablet &&
        <>
          <Headers.Primary title={'Invite Friends'} showBackArrow />
          <Spacer isBasic />
          <InviteFriendComponent />
        </>}
      {/* <ScrollViews.KeyboardAvoiding>
        <Wrapper marginHorizontalBase>
          <Text isRegular isRegularFont>
            Here you can generate a QR code to refer a person. The person cal
            scan it or receive the invitation by e-mail.
          </Text>
        </Wrapper>
        <Spacer isBasic />
        <TextInputs.Bordered
          InputLabel={'Email'}
          placeholder={'Enter Email'}
          customIconRight={appIcons.Email}
        />
        <Spacer isBasic />
        <Buttons.Colored text={'Send Invite'} />
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
      </ScrollViews.KeyboardAvoiding> */}



      <Modals.PopupPrimary
        visible={visible}
        isBlur
        children={
          <Wrapper style={{ borderRadius: totalSize(2) }}>
            <Labels.ModalLabelWithCross
              Title={'Invite Friends'}
              onPress={() => {
                navigation.goBack()
                setVisible(false)
              }}
              style={{ ...(isTablet && { fontSize: totalSize(3) }) }}
            />
            <Wrapper style={{ height: height(70) }}>
            <InviteFriendComponent />
            </Wrapper>
          </Wrapper>
        }
      />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  QRMAinContainer: {
    //backgroundColor: 'red',
    height: responsiveHeight(26),
    width: responsiveWidth(60),
    borderRadius: responsiveWidth(5),
    borderWidth: 1.5,
    borderColor: colors.appBorderColor2,
    padding: 7,
  },
  QrContainer: {
    flex: 1,
    resizeMode: 'contain',
  },
});
