import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import {
  BarButtons,
  Buttons,
  Headers,
  Icons,
  Labels,
  Modals,
  ScrollViews,
  Spacer,
  Swipeables,
  Text,
  Wrapper,
} from '../../../components';
import LinearGradient from 'react-native-linear-gradient';
import {
  appIcons,
  colors,
  fontSizes,
  responsiveHeight,
  responsiveWidth,
  sizes,
} from '../../../services';
import { useHooks } from './hooks';
import { verticalScale } from 'react-native-size-matters';
import { Button } from '../../../components/icons';
import { goBack } from '../../../navigation/rootNavigation';
import { BuyCoinsComponents } from './components';
import DeviceInfo from 'react-native-device-info';
import { height, width, totalSize } from 'react-native-dimension'
import { useIsFocused } from '@react-navigation/native';
const isTablet = DeviceInfo.isTablet();



export default function Index({ navigation }) {
  const {   
    // variable
    data, PayWithData,
    // states
    showBuyCoinModal, setShowBuyCoinModal,
    focused,
    handleTogglePayMethodModal, PayMethodModal} =
    useHooks();


  // useEffect(() => {
  //   console.log('focuse', focused)
  //   if (focused == false) return
  //   if (isTablet) {
  //     setShowBuyCoinModal(true)
  //   }

  // }, [focused])

  return (
    <Wrapper isMain>
      {!isTablet && <>
        <Headers.Primary showBackArrow title={'Buy Coins'} />
        {/* buy coin Component */}
        <BuyCoinsComponents data={data} handleTogglePayMethodModal={handleTogglePayMethodModal} />
      </>
      }

{/* <BuyCoinsComponents data={data} handleTogglePayMethodModal={handleTogglePayMethodModal} /> */}
{/* 
      <Modals.PopupPrimary
        visible={showBuyCoinModal}
        isBlur
        children={
          <Wrapper style={{borderRadius:totalSize(2)}}>
            <Labels.ModalLabelWithCross
              Title={'Buy Coins'}
              Description={'Buy Coin to boost your profile in your region'}
              onPress={() => {
                navigation.goBack()
                setShowBuyCoinModal(false)
              }}
              style={{ ...(isTablet && { fontSize: totalSize(3) }) }}
              descriptionStyle={{ ...(isTablet && { fontSize: totalSize(1.4) }) }}
            />
            <Spacer isBasic />
            <Wrapper style={{ height: height(60) }}>
              <BuyCoinsComponents hide={isTablet} data={data} handleTogglePayMethodModal={handleTogglePayMethodModal} />
            </Wrapper>
          </Wrapper>
        }
      />  */}


      <Modals.PopupPrimary
        visible={PayMethodModal}
        isBlur
        toggle={handleTogglePayMethodModal}
        children={
          <Wrapper>
            <Labels.ModalLabelWithCross
              Title={'Pay For Coins'}
              Description={'Select an option below to buy the coins'}
              onPress={handleTogglePayMethodModal}
            />
            <Spacer isBasic />
            <BarButtons.IconWithTextSelectOptions Data={PayWithData} />
            <Spacer height={verticalScale(20)} />
            <Wrapper paddingVerticalBase>
              <Buttons.Colored
                text={'Continue'}
                onPress={() => {
                  handleTogglePayMethodModal();
                  goBack();
                }}
              />
            </Wrapper>
          </Wrapper>
        }
      />





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
          <BuyCoinsComponents data={data} handleTogglePayMethodModal={handleTogglePayMethodModal} />
          {/* <SupportComponent /> */}
        </Wrapper>

      </Wrapper>}

    </Wrapper>
  );
}

const styles = StyleSheet.create({
  linearMainContainer: {
    height: responsiveHeight(10),
    justifyContent: 'center',
    paddingVertical: sizes.baseMargin,
  },
  outerWrap: {
    width: width(90),
    height: height(75),
    borderRadius: totalSize(2),
    backgroundColor: colors.appBgColor1,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  innerWrap: {
    paddingHorizontal: width(2),
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
