import React, {useState} from 'react';
import {
  Wrapper,
  Icons,
  Spacer,
  Lines,
  Modals,
  Labels,
  TextInputs,
  Text,
  StatusBars,
} from '../../../components';
import {useHooks} from './hooks';
import {
  appFonts,
  fontSizes,
  responsiveWidth,
  responsiveHeight,
  appIcons,
  colors,
} from '../../../services';
import {scale} from 'react-native-size-matters';
import {FlatList, TouchableOpacity} from 'react-native';

export default function Index() {
  const {
    HeaderComponent,
    menuItems,
    LocationModalVisible,
    handleToggleLocationModal,
    EditProfileModalVisible,
    handleToggleEditProfileModal,
  } = useHooks();

  // RenderItem component
  const RenderItem = React.memo(
    ({Icon, Title, tintColor, onPress}) => {
      return (
        <TouchableOpacity
          disabled={!onPress}
          onPress={onPress}
          //accessibilityLabel={Title} // Accessibility label for better usability
          //accessibilityRole="button" // Define the role for accessibility
        >
          <Wrapper
            marginHorizontalBase
            paddingVerticalBase
            flexDirectionRow
            alignItemsCenter>
            <Icons.WithText
              customIcon={Icon} // Uncomment this if you want to use the Icon prop
              text={Title}
              tintColor={tintColor ? tintColor : colors.appBGColor}
              textContainerStyle={{
                width: responsiveWidth(68.5),
                marginHorizontal: responsiveWidth(5),
              }}
              textStyle={{
                fontSize: fontSizes.regular,
                fontFamily: appFonts.appTextRegular,
              }}
              iconSize={scale(24)}
            />
            <Icons.Custom icon={appIcons.Forward} size={scale(24)} />
          </Wrapper>
        </TouchableOpacity>
      );
    },
    (prevProps, nextProps) => {
      // Custom comparison function to prevent unnecessary re-renders
      return (
        prevProps.Title === nextProps.Title &&
        prevProps.onPress === nextProps.onPress
      );
    },
  );

  // Main render
  return (
    <Wrapper isMain>
      <StatusBars.Light backgroundColor={colors.appBGColor} />
      <Spacer isStatusBarHeigt />
      <FlatList
        data={menuItems}
        ListHeaderComponent={<HeaderComponent />}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <RenderItem
            key={index}
            Icon={item?.customIcon}
            Title={item?.title}
            tintColor={item?.tintColor}
            onPress={item?.onPress}
          />
        )}
        ListFooterComponent={<Spacer height={responsiveHeight(10)} />}
        ItemSeparatorComponent={
          <Wrapper marginHorizontalSmall alignItemsFlexEnd>
            <Lines.Horizontal
              height={0.8}
              width={responsiveWidth(83)}
              color={colors.appBorderColor2}
            />
          </Wrapper>
        }
      />
      <Modals.PlacesAutocomplete
        visible={LocationModalVisible}
        toggle={handleToggleLocationModal}
      />
      <Modals.EditProfile
        visible={EditProfileModalVisible}
        toggle={handleToggleEditProfileModal}
      />
    </Wrapper>
  );
}
