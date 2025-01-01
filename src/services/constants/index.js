import {colors} from '../utilities/colors';
import {appStyles} from '../utilities/appStyles';

export const baseURL = 'https://localserver/v1/';
export const endPoints = {
  register: {
    url_1: 'register',
  },
  login: {
    url_1: 'login',
  },
};
export const routes = {
  //main stacks
  auth: 'auth',
  app: 'app',
  common: 'common',

  //auth
  splash: 'splash',
  signin: 'signin',
  createAccount: 'createAccount',
  credentialScreen: 'credentialScreen',

  //app
  bottomTab: 'bottomTab',
  home: 'home',
  explore: 'explore',
  hotOrNot: 'hotOrNot',
  friends: 'frineds',
  postDetail: 'postDetail',
  chat: 'chat',
  profileSetting: 'profileSetting',

  position: 'position',
  mySearch: 'mySearch',
  userProfile: 'userProfile',
  buyCoins: 'buyCoins',
  support: 'support',
  subscription: 'subscription',
  appSetting: 'appSetting',

  //common
  termsOfService: 'termsOfService',
  privacyPolicy: 'privacyPolicy',
};
export const headers = {
  screenOptions: {
    // headerShown: false,
    title: 'Title',
    headerTitleAlign: 'left',
    headerStyle: [appStyles.headerStyle],
    headerTitleStyle: appStyles.headerTitleStyle,
    headerTintColor: colors.appTextColor4,
    headerBackTitle: ' ',
  },
};
export const tabs = {
  tabBarOptions: {
    showLabel: true,
    tabBarActiveTintColor: colors.appPrimaryColor,
    tabBarInactiveTintColor: colors.appBorderColor1 + '60',
    allowFontScaling: true,
    tabBarStyle: [
      appStyles.tabBarStyle, //appStyles.shadowExtraDark
    ],
    activeBackgroundColor: '#FFFFFF40',
    //tabStyle: {borderRadius: 20, marginHorizontal: 7.5, marginVertical: 2},
  },
};

export const imagePickerOptions = {
  title: 'Select Photo',
  quality: 1,
  maxWidth: 500,
  maxHeight: 500,
  // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
