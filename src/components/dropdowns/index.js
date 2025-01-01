import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {Icon} from '@rneui/base';
import {
  appFonts,
  appIcons,
  appStyles,
  colors,
  fontSizes,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
  sizes,
} from '../../services';
import {Icons, Text, Wrapper} from '..';
import Spacer from '../spacer';
import {scale} from 'react-native-size-matters';
//import { styles } from './styles'; // Ensure your styles are imported correctly

export const Simple = ({
  ContainerWidth,
  DropdownLabel,
  iconContainerStyle,
  iconNameLeft,
  iconTypeLeft,
  iconSizeLeft,
  customIconLeft,
  iconStyleLeft,
  iconColorLeft,
  onPressIconLeft,
  DefaultValue,
  DropdownPlaceHolder,
  DropdownData,
  DropDownLabelField,
  DropDownValueField,
  OptionContainerWidth,
  onValueChange,
  marginHorizontalBase,
  placeholderColor,
}) => {
  const [value, setValue] = useState(DefaultValue ? DefaultValue : null);
  const Defaultdata = [
    {label: 'Option 1', value: '1'},
    {label: 'Option 2', value: '2'},
    {label: 'Option 3', value: '3'},
  ];
  const DefaultContainerWidth = ContainerWidth
    ? ContainerWidth
    : responsiveWidth(90);

  return (
    <Wrapper marginHorizontalBase={marginHorizontalBase}>
      {DropdownLabel ? (
        <Wrapper>
          <Text isSmall isMediumFont style={styles.DropdownLabel}>
            {DropdownLabel}
          </Text>
          <Spacer isTiny />
        </Wrapper>
      ) : null}
      <View style={[styles.container, {width: DefaultContainerWidth}]}>
        <View style={styles.dropdownContainer}>
          <Dropdown
            renderLeftIcon={() =>
              customIconLeft ? (
                <Wrapper
                  marginHorizontalSmall
                  style={[{alignItems: 'center'}, iconContainerStyle]}>
                  <Icons.Custom
                    icon={customIconLeft}
                    size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium}
                    color={iconColorLeft ? iconColorLeft : colors.appTextColor1}
                    containerStyle={iconStyleLeft}
                  />
                </Wrapper>
              ) : iconNameLeft ? (
                <Wrapper
                  marginHorizontalSmall
                  style={[{alignItems: 'center'}, iconContainerStyle]}>
                  <Icon
                    name={iconNameLeft}
                    type={iconTypeLeft}
                    size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium}
                    color={iconColorLeft ? iconColorLeft : colors.appBgColor3}
                    iconStyle={iconStyleLeft}
                    onPress={onPressIconLeft}
                  />
                </Wrapper>
              ) : null
            }
            renderRightIcon={() => (
              <Icons.Custom
                icon={appIcons.Down}
                size={scale(25)}
                color={colors.appBGColor}
              />
            )}
            style={styles.dropdown}
            containerStyle={{
              backgroundColor: colors.appTextColor3,
              borderRadius: responsiveWidth(3),
              borderWidth: 0,
              overflow: 'hidden',
            }}
            data={DropdownData ? DropdownData : Defaultdata}
            labelField={DropDownLabelField ? DropDownLabelField : 'label'}
            valueField={DropDownValueField ? DropDownValueField : 'value'}
            placeholder={DropdownPlaceHolder ? DropdownPlaceHolder : 'Select'}
            placeholderStyle={{
              color: placeholderColor ? placeholderColor : colors.appTextColor2,
            }}
            value={value}
            selectedTextStyle={{color: value !== null && colors.appBGColor}}
            onChange={item => {
              setValue(item.value);
              onValueChange && onValueChange(item.value);
            }}
            // Custom styles for dropdown options
            renderItem={item => (
              <View
                style={[
                  styles.optionContainer,
                  OptionContainerWidth && {width: OptionContainerWidth},
                  item?.value === value && {
                    backgroundColor: colors.appPrimaryColor + 70,
                  },
                ]}>
                <Text
                  style={[
                    styles.optionText,
                    OptionContainerWidth && {width: OptionContainerWidth},
                  ]}>
                  {item.label}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </Wrapper>
  );
};

export const Small = ({
  ContainerWidth,
  DropdownLabel,
  iconContainerStyle,
  iconNameLeft,
  iconTypeLeft,
  iconSizeLeft,
  customIconLeft,
  iconStyleLeft,
  iconColorLeft,
  onPressIconLeft,
  DefaultValue,
  DropdownPlaceHolder,
  DropdownData,
  DropDownLabelField,
  DropDownValueField,
  OptionContainerWidth,
  onValueChange,
  marginHorizontalBase,
  placeholderColor,
}) => {
  const [value, setValue] = useState(DefaultValue ? DefaultValue : null);
  const Defaultdata = [
    {label: 'Option 1', value: '1'},
    {label: 'Option 2', value: '2'},
    {label: 'Option 3', value: '3'},
  ];
  const DefaultContainerWidth = ContainerWidth
    ? ContainerWidth
    : responsiveWidth(35);

  return (
    <Wrapper marginHorizontalBase={marginHorizontalBase}>
      {DropdownLabel ? (
        <Wrapper>
          <Text style={[styles.DropdownLabel]}>{DropdownLabel}</Text>
          <Spacer isSmall />
        </Wrapper>
      ) : null}
      <View style={[styles.container, {width: DefaultContainerWidth}]}>
        <View style={styles.SmalldropdownContainer}>
          <Dropdown
            renderRightIcon={() => (
              <Icons.Custom
                icon={appIcons.Back}
                size={scale(25)}
                color={colors.appBGColor}
              />
            )}
            style={[styles.smalldropdown]}
            containerStyle={{
              backgroundColor: colors.appTextColor3,
              borderRadius: responsiveWidth(3),
              borderWidth: 0,
              overflow: 'hidden',
            }}
            data={DropdownData ? DropdownData : Defaultdata}
            labelField={DropDownLabelField ? DropDownLabelField : 'label'}
            valueField={DropDownValueField ? DropDownValueField : 'value'}
            placeholder={DropdownPlaceHolder ? DropdownPlaceHolder : 'Select'}
            placeholderStyle={{
              color: placeholderColor ? placeholderColor : colors.appTextColor2,
              fontSize: fontSizes.tiny,
              fontFamily: appFonts.appTextMedium,
            }}
            value={value}
            selectedTextStyle={{
              color: value !== null && colors.appTextColor1,
              fontSize: fontSizes.small,
              fontFamily: appFonts.appTextMedium,
            }}
            onChange={item => {
              setValue(item.value);
              onValueChange && onValueChange(item.value);
            }}
            // Custom styles for dropdown options
            renderItem={item => (
              <View
                style={[
                  styles.optionContainer,
                  OptionContainerWidth && {width: OptionContainerWidth},
                  item?.value === value && {
                    backgroundColor: colors.appPrimaryColor,
                  },
                ]}>
                <Text
                  style={[
                    styles.optionText,
                    OptionContainerWidth && {width: OptionContainerWidth},
                  ]}>
                  {item.label}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  DropdownLabel: {
    fontFamily: appFonts.appTextMedium,
    fontSize: responsiveFontSize(12),
    color: colors.appBGColor,
  },
  container: {
    //flex: 1,
    justifyContent: 'center',
    //padding: 20,
    width: responsiveWidth(90),
    //borderColor: 'red',
    //backgroundColor: 'green'
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.appBorderColor2,
    borderRadius: responsiveWidth(10),
    paddingHorizontal: responsiveWidth(4.5),
    //backgroundColor: 'red',
  },
  icon: {
    marginRight: 10,
  },
  dropdown: {
    flex: 1,
    height: sizes.inputHeight,
  },

  optionContainer: {
    padding: responsiveWidth(2),
    borderWidth: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.appBorderColor2,
    backgroundColor: colors.appBgColor1,
    //width: responsiveWidth(100),
    //borderRadius: responsiveWidth(2)
  },
  optionText: {
    fontSize: responsiveFontSize(16),
    color: colors.appBGColor,
  },
  // Small Dropdown
  smalldropdown: {
    flex: 1,
    height: responsiveHeight(5),
  },
  SmalldropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.appPrimaryColor,
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(4.5),
    backgroundColor: colors.appBgLightTheme,
  },
});
