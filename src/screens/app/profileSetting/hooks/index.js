import React, {useMemo, useState} from 'react';
import {
  Images,
  Spacer,
  StatusBars,
  Text,
  Wrapper,
} from '../../../../components';
import {
  appIcons,
  appImages,
  appStyles,
  colors,
  responsiveHeight,
  responsiveWidth,
  routes,
} from '../../../../services';
import {scale} from 'react-native-size-matters';
import {navigate} from '../../../../navigation/rootNavigation';

export function useHooks() {
  const [LocationModalVisible, setLocationModalVisible] = useState(false);

  const handleToggleLocationModal = () => {
    setLocationModalVisible(!LocationModalVisible);
  };

  const HeaderComponent = React.memo(() => {
    return (
      <Wrapper>
        <Wrapper
          alignItemsCenter
          style={{
            height: responsiveHeight(30),
            backgroundColor: colors.appBGColor,
            borderBottomLeftRadius: responsiveWidth(6),
            borderBottomRightRadius: responsiveWidth(6),
            ...appStyles.shadowDark,
          }}>
          <Images.Round
            style={{position: 'absolute', bottom: -responsiveHeight(5)}}
            source={appImages.profile}
            size={scale(160)}
          />
        </Wrapper>
        <Spacer height={responsiveHeight(6)} />
        <Text isSmallTitle alignTextCenter>
          Ethan Blake, 25
        </Text>
        <Spacer isTiny />
        <Text isRegular alignTextCenter style={{color: colors.appBorderColor1}}>
          2177 Marigold Lane, United States
        </Text>
        <Spacer isBasic />
      </Wrapper>
    );
  }, []);

  const menuItems = useMemo(
    () => [
      {customIcon: appIcons.user, title: 'Edit Profile'},
      {
        customIcon: appIcons.Location,
        title: 'Place of Residence',
        onPress: handleToggleLocationModal,
      },
      {
        customIcon: appIcons.Search,
        title: 'My Search',
        onPress: () => {
          navigate(routes.mySearch);
        },
      },
      {
        customIcon: appIcons.DollarCircle,
        title: 'Buy Coins',
        onPress: () => {
          navigate(routes.buyCoins);
        },
      },
      {customIcon: appIcons.DollarCircle, title: 'Coin Wallet'},
      {
        customIcon: appIcons.wallet,
        title: 'Subscription',
        onPress: () => {
          navigate(routes.subscription);
        },
      },
      {customIcon: appIcons.Frame, title: 'Restore Purchase'},
      {
        customIcon: appIcons.ProfileSetting,
        title: 'App - Settings',
        onPress: () => {
          navigate(routes.appSetting);
        },
      },
      {
        customIcon: appIcons.Message,
        title: 'Support',
        onPress: () => {
          navigate(routes.support);
        },
      },
      {customIcon: appIcons.dataSets, title: 'Backend'},
      {
        customIcon: appIcons.SignOut,
        title: 'Sign Out',
        tintColor: colors.appPrimaryColor,
        onPress: () => {
          navigate(routes.auth);
        },
      },
    ],
    [],
  );
  return {
    HeaderComponent,
    menuItems,
    LocationModalVisible,
    handleToggleLocationModal,
  };
}
