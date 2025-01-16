import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  Headers,
  ScrollViews,
  Spacer,
  StatusBars,
  Text,
  Wrapper,
} from '../../../components';
import {appStyles, colors, responsiveFontSize, responsiveWidth} from '../../../services';
import {useHooks} from './hooks';
import {color} from '@rneui/base';

export default function Index() {
  const {data} = useHooks();
  return (
    <Wrapper isMain>
      <Headers.Primary
      title={'My Credit'}
      showBackArrow />
      <Spacer isBasic />
      <ScrollViews.KeyboardAvoiding>
        {/* Headers */}
        <Wrapper
          marginHorizontalBase
          flexDirectionRow
          alignItemsCenter
          justifyContentSpaceBetween>
          {['Date', 'Activity', 'Amount'].map((item, index) => {
            return (
              <Wrapper
                key={index}
                //backgroundColor={index ==1?'red':index==2?'blue':'green'}
                style={{width: index == 1 ? responsiveWidth(22) : 'auto'}}>
                <Text isRegular isRegularFont alignTextRight={index == 1}>
                  {item}
                </Text>
              </Wrapper>
            );
          })}
        </Wrapper>
        {/* rows */}
        {data.map((eachRow, index) => (
          <Wrapper
            key={index}
            //backgroundColor={'red'}
            paddingVerticalSmall
            marginHorizontalBase
            flexDirectionRow
            alignItemsCenter
            justifyContentSpaceBetween>
            <Wrapper
              //backgroundColor={'blue'}
              style={{width: responsiveWidth(41)}}>
              <Text
                isSmall
                isRegularFont
                style={{color: eachRow.isRed ? colors.error : colors.success}}>
                {eachRow.Date}
              </Text>
            </Wrapper>
            <Wrapper
              //backgroundColor={'red'}
              style={{width: responsiveWidth(35)}}>
              <Text
                isSmall
                isRegularFont
                style={{color: eachRow.isRed ? colors.error : colors.success}}>
                {eachRow.Activity}
              </Text>
            </Wrapper>
            <Wrapper
              //backgroundColor={'green'}
              style={{width: responsiveWidth(13)}}>
              <Text
                isSmall
                isRegularFont
                alignTextCenter
                style={{color: eachRow.isRed ? colors.error : colors.success}}>
                {eachRow.Amount}
              </Text>
            </Wrapper>
          </Wrapper>
        ))}
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}

const styles = StyleSheet.create({});
