import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  Buttons,
  Headers,
  Lines,
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
import {useHooks} from './hooks';

export default function Index() {
  const {data} = useHooks();
  return (
    <Wrapper isMain>
      <Headers.Primary title={'Invite Friends'} showBackArrow />
      <Spacer isBasic />
      <ScrollViews.KeyboardAvoiding>
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
      </ScrollViews.KeyboardAvoiding>
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
