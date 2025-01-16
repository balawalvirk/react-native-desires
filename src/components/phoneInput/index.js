import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {appIcons, colors, responsiveWidth, sizes} from '../../services';
import {Icons, Lines, Spacer, Text, Wrapper} from '..';
import CountryPicker from 'react-native-country-picker-modal';
import {scale} from 'react-native-size-matters';

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState(null);
  const [countryCode, setCountryCode] = useState(null);

  const onSelect = country => {
    setCountry(country);
    setCountryCode(country.callingCode[0]);
  };

  return (
    <View>
      <Wrapper
        marginHorizontalBase
        flexDirectionRow
        alignItemsCenter
        justifyContentSpaceBetween
        style={styles.container}>
        <Wrapper flexDirectionRow alignItemsCenter>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => {
              setShow(true); // Toggle the show state
            }}>
            {/* Only show CountryPicker when 'show' is true */}
            {
              <CountryPicker
                withCallingCode
                visible={show} // Ensure visibility is controlled by the 'show' state
                withFlag
                onClose={() => {
                  setShow(false);
                }}
                onSelect={onSelect}
                countryCode={country ? country.cca2 : 'US'}
              />
            }
            <Text isRegular isRegularFont isTextColor2>
              +{country?.callingCode ? country?.callingCode : 1}
            </Text>
            <Spacer horizontal isTiny />
            <Icons.Custom icon={appIcons.Down} color={colors.appTextColor2} />
          </TouchableOpacity>

          <Spacer horizontal isSmall />
          <Lines.Horizontal
            height={12}
            width={1}
            color={colors.appTextColor2}
          />
          <Spacer horizontal isTiny />

          <TextInput
            style={{
              width: responsiveWidth(40),
            }}
            placeholder="000 0000 000"
            placeholderTextColor={colors.appTextColor2}
            keyboardType="numeric"
            value={phoneNumber}
            cursorColor={colors.appPrimaryColor}
            onChangeText={setPhoneNumber} // Handle phone number change
          />
        </Wrapper>

        <Icons.Custom icon={appIcons.phoneInput} size={scale(22)} />
      </Wrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 150,
    borderColor: colors.appBorderColor2,
    height: sizes.inputHeight,
    paddingHorizontal: responsiveWidth(4),
  },
});

export default PhoneNumberInput;
