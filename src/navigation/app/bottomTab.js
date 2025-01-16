import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  appIcons,
  appImages,
  colors,
  responsiveFontSize,
  responsiveWidth,
  routes,
  tabs,
  useReduxStore,
} from '../../services';
import {Icons, Images, Spacer, StatusBars, Wrapper} from '../../components';
import {Icon} from '@rneui/base';
import * as App from '../../screens/app';
import {View} from 'react-native-animatable';
const BottomTabStack = createBottomTabNavigator();

export default function BottomTabNavigation() {
  const tabIconSize = responsiveFontSize(25);

  const TabIcon = ({color, iconName, iconType, size, focused, image}) => {
    return (
      <Wrapper
        alignItemsCenter
        // backgroundColor={'pink'}
        style={{
          flex: 1,
          // borderTopWidth: 3.5,
          //borderTopColor: !focused ? colors.appColor1 : colors.appBgColor1,
          width: responsiveWidth(15),
          justifyContent: 'center',
          marginTop: 0,
        }}>
        {!image ? (
          <Icon
            name={iconName}
            type={iconType}
            size={tabIconSize}
            color={color}
            focused={focused}
          />
        ) : (
          <Icons.Custom
            icon={image}
            size={tabIconSize}
            style={{opacity: focused ? 1 : 0.5}}
          />
        )}
      </Wrapper>
    );
  };
  return (
    <>
      <BottomTabStack.Navigator
        initialRouteName={routes.home}
        screenOptions={{
          headerShown: false,
          ...tabs.tabBarOptions,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          unmountOnBlur: true,

          // header: () => (
          //   <View>
          //     <StatusBars.Dark />
          //     <Spacer isStatusBarHeigt />
          //   </View>
          // ),
        }}>
        <BottomTabStack.Screen
          name={routes.home}
          component={App.Home}
          options={() => ({
            tabBarIcon: ({color, size, focused}) => {
              return (
                <TabIcon
                  image={focused ? appIcons.HomeActive : appIcons.Home}
                  size={tabIconSize}
                  //color={color}
                  focused={focused}
                />
              );
            },
          })}
        />

        <BottomTabStack.Screen
          name={routes.explore}
          component={App.Explore}
          options={() => ({
            tabBarIcon: ({color, size, focused}) => {
              return (
                <TabIcon
                  image={focused ? appIcons?.ExploreActive : appIcons?.Explore}
                  size={tabIconSize}
                  //color={color}
                  focused={focused}
                />
              );
            },
          })}
        />
        <BottomTabStack.Screen
          name={routes.hotOrNot}
          component={App.HotORNot}
          options={() => ({
            tabBarIcon: ({color, size, focused}) => {
              return (
                <TabIcon
                  image={focused ? appIcons?.FireActive : appIcons?.Fire}
                  size={tabIconSize}
                  // color={color}
                  focused={focused}
                />
              );
            },
          })}
        />

        <BottomTabStack.Screen
          name={routes.friends}
          component={App.Friends}
          options={() => ({
            tabBarIcon: ({color, size, focused}) => {
              return (
                <TabIcon
                  image={focused ? appIcons?.FriendsActive : appIcons?.Friends}
                  size={tabIconSize}
                  //color={color}
                  focused={focused}
                />
              );
            },
          })}
        />
        <BottomTabStack.Screen
          name={routes.chat}
          component={App.Chat}
          options={() => ({
            tabBarIcon: ({color, size, focused}) => {
              return (
                <TabIcon
                  image={focused ? appIcons?.MessageActive : appIcons?.Message}
                  size={tabIconSize}
                  //color={color}
                  focused={focused}
                />
              );
            },
          })}
        />
        <BottomTabStack.Screen
          name={routes.profileSetting}
          component={App.ProfileSetting}
          options={() => ({
            tabBarIcon: ({color, size, focused}) => {
              return (
                <TabIcon
                  image={
                    focused
                      ? appIcons?.ProfileSettingActive
                      : appIcons?.ProfileSetting
                  }
                  size={tabIconSize}
                  //color={color}
                  focused={focused}
                />
              );
            },
          })}
        />
      </BottomTabStack.Navigator>
    </>
  );
}
