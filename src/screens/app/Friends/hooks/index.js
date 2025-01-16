import {scale} from 'react-native-size-matters';
import {
  Icons,
  Images,
  Lines,
  Spacer,
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
import {
  Alert,
  Dimensions,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useMemo, useRef, useState} from 'react';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import {navigate} from '../../../../navigation/rootNavigation';

export function useHooks() {
  const FriendRenderDetail = ({Detail}) => {
    const [menuIconColor, setMenuIconColor] = useState(colors.appBorderColor1);

    const styles = StyleSheet.create({
      BadgeMainContainer: {
        height: scale(8),
        width: scale(8),
        top: scale(5),
        left: scale(39),
        backgroundColor: colors.appBgColor1,
        borderRadius: responsiveWidth(100),
        //padding: scale(1.5),
        //justifyContent: 'center',
        //alignItems: 'center',
      },
      BadgeInnerContainer: {
        flex: 1,
        margin: scale(1.1),
        // alignSelf: 'center',
        //left: scale(0.06),
        backgroundColor: '#13C634',
        borderRadius: responsiveWidth(100),
      },
      OptionMainContainer: {
        //height: responsiveHeight(18),
        width: responsiveWidth(36),
        backgroundColor: colors.appBgColor1,
        ...appStyles.shadowDark,
        borderRadius: responsiveWidth(3),
        padding: scale(18),
        //zIndex: 2,
      },
    });
    return (
      <View style={{flex: 1}}>
        <Wrapper
          flexDirectionRow
          marginHorizontalBase
          //backgroundColor={'blue'}
          alignItemsCenter>
          {/* Image */}
          <Wrapper>
            <Images.Round source={appImages.image4} size={scale(48)} />
            {/* Bage */}
            {Detail?.ShowOnline ? (
              <Wrapper isAbsolute style={styles.BadgeMainContainer}>
                <Wrapper style={styles.BadgeInnerContainer} />
              </Wrapper>
            ) : null}
          </Wrapper>
          {/* Text Name And Id */}
          <Wrapper
            marginHorizontalSmall
            //backgroundColor={'red'}
            style={{width: responsiveWidth(58)}}>
            <Text isRegular isBoldFont>
              {Detail?.name}, {Detail?.age}
            </Text>
            <Text isSmall isRegularFont isTextColor2>
              {Detail?.location} - {Detail?.distance}km
            </Text>
          </Wrapper>
          {/* Icons of Chat and the options */}
          <Wrapper
            flex={1}
            flexDirectionRow
            alignItemsCenter
            //backgroundColor={'green'}
            justifyContentSpaceBetween>
            <Icons.Custom
              icon={appIcons.Message}
              color={colors.appBorderColor1}
              containerStyle={{transform: [{rotateY: '180deg'}]}}
              size={scale(17)}
              onPress={() => {
                navigate(routes.chatScreen);
              }}
            />

            <Menu
              onOpen={() => {
                setMenuIconColor(colors.appBGColor);
              }}
              onClose={() => {
                setMenuIconColor(colors.appBorderColor1);
              }}>
              <MenuTrigger>
                <Icons.Custom
                  icon={appIcons.Menu}
                  color={menuIconColor}
                  size={scale(17)}
                />
              </MenuTrigger>
              <MenuOptions
                optionsContainerStyle={[
                  styles.OptionMainContainer,
                  {marginTop: scale(22), marginLeft: -scale(6)}, // Adjust the margin or padding here
                ]}>
                {['Send Link', 'Share Profile', 'Mute', 'Unfriend'].map(
                  (item, index) => (
                    <MenuOption
                      key={index}
                      onSelect={() => {
                        //Alert.alert(`${item} selected`);
                      }}
                      customStyles={{
                        optionWrapper: {
                          paddingVertical: scale(8),
                          //paddingHorizontal: scale(12),
                        },
                      }}>
                      <Text
                        isSmall
                        isRegularFont
                        isPrimaryColor={item === 'Unfriend'}>
                        {item}
                      </Text>
                    </MenuOption>
                  ),
                )}
              </MenuOptions>
            </Menu>
          </Wrapper>
        </Wrapper>
        <Spacer isSmall />
        {/* Bottom Line */}
        <Wrapper marginHorizontalBase alignItemsFlexEnd>
          <Lines.Horizontal
            height={1}
            width={responsiveWidth(73)}
            color={colors.appBorderColor2}
          />
        </Wrapper>
        {/* Show Option Container */}
        {/* {ShowOption ? (
          <Wrapper isAbsolute style={styles.OptionMainContainer}>
            {['Send Link', 'Share Profile', 'Mute', 'Unfriend'].map(
              (item, index) => (
                <View key={index}>
                  <TouchableOpacity
                    onPress={() => {
                      setShowOption(!ShowOption);
                    }}>
                    <Text
                      isSmall
                      isRegularFont
                      isPrimaryColor={item === 'Unfriend'}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                  <Spacer height={scale(12)} />
                </View>
              ),
            )}
          </Wrapper>
        ) : null}
        {ShowOption ? (
          <Wrapper
            isAbsoluteFill
            // backgroundColor={'red'}
            style={{
              height: Height,
              top: -responsiveHeight(40),
              left: 0,
              zIndex: 1,
            }}>
            <Pressable
              style={{flex: 1}}
              onPress={() => {
                setShowOption(!ShowOption);
              }}
            />
          </Wrapper>
        ) : null} */}
      </View>
    );
  };

  const data = useMemo(() => [
    {
      name: 'Jaydon Lubin',
      age: 48,
      location: 'Miami, FL',
      distance: 12,
      ShowOnline: true,
    },
    {
      name: 'Ann Stanton',
      age: 29,
      location: 'Miami Beach, FL',
      distance: 8,
      ShowOnline: true,
    },
    {name: 'Mira Lubin', age: 24, location: 'Chicago, USA', distance: 2},
    {name: 'Anika Kenter', age: 28, location: '5 Depot Drive, FL', distance: 7},
    {
      name: 'Kierra Rhiel Madsen',
      age: 49,
      location: '7278 Grandrose, FL',
      distance: 4,
      ShowOnline: true,
    },
    {
      name: 'Kianna Stanton',
      age: 27,
      location: '831 St Louis, FL',
      distance: 9,
    },
  ]);

  return {FriendRenderDetail, data};
}
