import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {useMemo} from 'react';
import {
  BarButtons,
  Buttons,
  Headers,
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
  responsiveHeight,
  responsiveWidth,
  sizes,
} from '../../../services';
import {useHooks} from './hooks';
import {verticalScale} from 'react-native-size-matters';
import {Button} from '../../../components/icons';
import {goBack} from '../../../navigation/rootNavigation';

export default function Index() {
  const {data, PayWithData, PayMethodModal, handleTogglePayMethodModal} =
    useHooks();
  return (
    <Wrapper isMain>
      <Headers.Primary showBackArrow title={'Buy Coins'} />

      <ScrollViews.KeyboardAvoiding>
        <Spacer isBasic />
        <Text alignTextCenter isTextColor2 isRegular isRegularFont>
          Buy Coin to boost your profile in your region
        </Text>
        <Spacer isBasic />
        <BarButtons.IconWithTextSelectOptions
          Data={data}
          labelRepresent={item => `${item.label} ${item.price}`}
        />
      </ScrollViews.KeyboardAvoiding>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.79)', '#FFFFFF']}
        style={styles.linearMainContainer}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}>
        <Swipeables.SwipableItem
          onSwipeLeft={handleTogglePayMethodModal}
          swipeDistance={responsiveWidth(80)}
          SwipeTitle={'9.0$'}
          LeftTitle={'Select the Payment Method'}
          BtnTitle={'Swipe To Pay'}
        />
      </LinearGradient>
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
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  linearMainContainer: {
    height: responsiveHeight(10),
    justifyContent: 'center',
    paddingVertical: sizes.baseMargin,
  },
});
