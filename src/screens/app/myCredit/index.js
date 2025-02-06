import { StyleSheet, View } from 'react-native';
import React from 'react';
import {
  Headers,
  Icons,
  ScrollViews,
  Spacer,
  StatusBars,
  Text,
  Wrapper,
} from '../../../components';
import { appStyles, colors, responsiveFontSize, responsiveWidth } from '../../../services';
import { useHooks } from './hooks';
import { color } from '@rneui/base';
import { MyCreditComponent } from './components';
import DeviceInfo from 'react-native-device-info';
import { height, width, totalSize } from 'react-native-dimension'


const isTablet = DeviceInfo.isTablet();

export default function Index({ navigation }) {
  const { data } = useHooks();
  return (
    <Wrapper isMain>
      {!isTablet && <>
        <Headers.Primary
          title={'My Credit'}
          showBackArrow />
        <Spacer isBasic />
        <MyCreditComponent data={data} />
      </>}
      {/* <ScrollViews.KeyboardAvoiding>
        {/* Headers */}
      {/* <Wrapper
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
        </Wrapper> */}
      {/* rows */}
      {/* {data.map((eachRow, index) => (
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
        ))} */}
      {/* </ScrollViews.KeyboardAvoiding> */}



      {isTablet && <Wrapper isAbsolute style={{
        ...(isTablet && {
          flex: 1,
          width: width(100),
          height: height(100),
          backgroundColor: 'rgba(157, 157, 157, 0.2)',
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
              {'My Credit'}
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
          <MyCreditComponent data={data} />

        </Wrapper>

      </Wrapper>}

    </Wrapper>
  );
}

const styles = StyleSheet.create({

  outerWrap: {
    width: width(90),
    height: height(90),
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

}
  
);
