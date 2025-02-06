import React from 'react';
import {
  Buttons,
  DropDowns,
  Headers,
  Icons,
  Spacer,
  Text,
  TextInputs,
  Wrapper,
} from '../../../components';
import { scale, verticalScale } from 'react-native-size-matters';
import { colors, responsiveWidth, sizes } from '../../../services';
import { SupportComponent } from './components';
import DeviceInfo from 'react-native-device-info';
import { height, width, totalSize } from 'react-native-dimension'
import { StyleSheet } from 'react-native';


const isTablet = DeviceInfo.isTablet();

export default function Index({ navigation }) {
  return (
    <Wrapper isMain>

      {!isTablet&&
        <>
          <Headers.Primary showBackArrow title={'Support'} />
          <Spacer isBasic />
          <SupportComponent />
        </>}
      {/* <Wrapper marginHorizontalBase>
        <Text isRegular isRegularFont>
          If you need help or have any questions, send us an email and we will
          respond to you promptly.
        </Text>
      </Wrapper>
      <Spacer isDoubleBase />
      <DropDowns.Simple
        marginHorizontalBase
        DropdownLabel={'Reference'}
        DropdownPlaceHolder={'Select reference'}
      />
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
          //backgroundColor: 'red',
          height: verticalScale(150),
        }}
      />
      <Wrapper flex={1} justifyContentFlexend paddingVerticalBase>
        <Buttons.Colored text={'Send'} />
      </Wrapper> */}

      {/* absolute components act like modal open inCase of isTablet */}

      {isTablet && <Wrapper isAbsolute style={{
        ...(isTablet && {
          flex: 1,
          width: width(100),
          height: height(100),
          backgroundColor:'rgba(0, 0, 0, 0.5)',
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
              {'Support'}
            </Text>
            <Icons.Back
              color={colors.black}
              iconName={'cross'}
              iconType={'entypo'}
              size={totalSize(3.5)}
              onPress={() => navigation.goBack()}
              style={{ alignSelf: 'flex-end' }}
            />
          </Wrapper>

          <Spacer />
          <SupportComponent />
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
    paddingHorizontal: width(2),
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'space-between'
  }

})