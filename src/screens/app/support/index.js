import React from 'react';
import {
  Buttons,
  DropDowns,
  Headers,
  Spacer,
  Text,
  TextInputs,
  Wrapper,
} from '../../../components';
import {scale, verticalScale} from 'react-native-size-matters';
import {responsiveWidth, sizes} from '../../../services';

export default function Index() {
  return (
    <Wrapper isMain>
      <Headers.Primary showBackArrow title={'Support'} />
      <Spacer isBasic />
      <Wrapper marginHorizontalBase>
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
      </Wrapper>
    </Wrapper>
  );
}
