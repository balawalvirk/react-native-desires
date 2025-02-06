import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Icons, ScrollViews, Spacer, Switches, Text, TextInputs, Wrapper } from '../../../../components';
import { scale } from 'react-native-size-matters';
import { appIcons, appStyles, colors, fontSizes, responsiveHeight, responsiveWidth, sizes } from '../../../../services';
import DeviceInfo from 'react-native-device-info';
import { height, width, totalSize } from 'react-native-dimension'

const isTablet = DeviceInfo.isTablet()



const AppSettingInfo = ({
    handleToggleLocationModal,
    handleToggleIconVip,
    handleToggleIconSealth,
    unitsData,
    handleTogglePrivacyPolicyModal,
    handleToggleTermsConditionsModal,
    handleToggleAccessModal
}) => {
    return (
        <>
            <ScrollViews.KeyboardAvoiding>
                <Spacer isSmall />
                {/* Languages Input */}
                <TextInputs.Bordered
                    // labelStyle={{
                    //     ...(isTablet && { fontSize: totalSize(1.4) }), // Applies only if isTablet is true
                    // }}
                    InputLabel={'Language'}
                    placeholder={'English'}
                    iconSizeRight={isTablet?totalSize(2.8):scale(24)}
                    placeholderTextColor={colors.appTextColor2}
                    customIconRight={appIcons.Down}
                    inputStyle={{
                        ...(isTablet && { fontSize: totalSize(1.5) }), // Applies only if isTablet is true
                    }}
                    onPress={handleToggleLocationModal}
                />
                <Spacer isBasic />
                {/* Audio & Video Call Input */}
                <TextInputs.Bordered
                    InputLabel={'Audio & Video Call'}
                    placeholder={'Not Activate'}
                    placeholderTextColor={colors.appTextColor2}
                    inputStyle={{ ...(isTablet && { fontSize: totalSize(16) }) }}
                    customIconRight={appIcons.Down}
                    onPress={() => { }}
                    right={<Switches.Custom />}
                />
                <Spacer isBasic />
                {/* Discover  */}
                <TextInputs.Bordered
                    InputLabel={'Discover'}
                    placeholder={'Show me'}
                    placeholderTextColor={colors.appTextColor2}
                    customIconRight={appIcons.Down}
                    onPress={() => { }}
                    right={<Switches.Custom />}
                />
                <Spacer isBasic />
                {/* App Icon  */}
                <Wrapper gap={responsiveHeight(1)}>
                    <TextInputs.Bordered
                        InputLabel={'App Icons'}
                        placeholder={'VIP'}
                        placeholderTextColor={colors.appTextColor2}
                        customIconRight={appIcons.Forward}
                        iconSizeRight={isTablet?totalSize(2.8):scale(24)}
                        onPress={() => {
                            handleToggleIconVip();
                        }}
                    />
                    <TextInputs.Bordered
                        //InputLabel={'App Icons'}
                        placeholder={'Stealth Mode'}
                        placeholderTextColor={colors.appTextColor2}
                        customIconRight={appIcons.Forward}
                        iconSizeRight={isTablet?totalSize(2.8):scale(24)}
                        onPress={() => {
                            handleToggleIconSealth();
                        }}
                    />
                </Wrapper>
                <Spacer isBasic />

                {/* Notifications  */}
                <Wrapper gap={responsiveHeight(1)}>
                    <TextInputs.Bordered
                        InputLabel={'Notifications'}
                        placeholder={'Chats'}
                        placeholderTextColor={colors.appTextColor2}
                        customIconRight={appIcons.Down}
                        onPress={() => { }}
                        right={<Switches.Custom />}
                    />
                    <TextInputs.Bordered
                        placeholder={'Friend Requests'}
                        placeholderTextColor={colors.appTextColor2}
                        customIconRight={appIcons.Down}
                        onPress={() => { }}
                        right={<Switches.Custom />}
                    />
                    <TextInputs.Bordered
                        placeholder={'Likes'}
                        placeholderTextColor={colors.appTextColor2}
                        customIconRight={appIcons.Down}
                        onPress={() => { }}
                        right={<Switches.Custom />}
                    />
                    <TextInputs.Bordered
                        placeholder={'Audio & Video Call'}
                        placeholderTextColor={colors.appTextColor2}
                        customIconRight={appIcons.Down}
                        onPress={() => { }}
                        right={<Switches.Custom />}
                    />
                </Wrapper>
                <Spacer isBasic />
                <Wrapper marginHorizontalBase>
                    <Text isSmall isMediumFont children={'UNITS'} />
                    <Spacer isTiny />
                </Wrapper>
                <Wrapper gap={responsiveHeight(1)}>
                    {unitsData?.map((item, index) => (
                        <Wrapper
                            key={index}
                            flexDirectionRow
                            alignItemsCenter
                            justifyContentSpaceBetween
                            paddingHorizontalBase
                            style={{
                                ...appStyles.inputFieldBorderd,
                                borderWidth: 1.5,
                                borderRadius: responsiveWidth(100),
                                borderColor: colors.appBgColor3,
                            }}>
                            <Text
                                isMedium
                                isRegularFont
                                isTextColor2
                                children={item?.label}
                            />
                            <Icons.WithText
                                direction={'row-reverse'}
                                text={item?.unit}
                                textStyle={{
                                    color: colors.appTextColor2,
                                    fontSize: fontSizes.medium,
                                }}
                                customIcon={appIcons.Down}
                                iconSize={isTablet?totalSize(2.8):scale(24)}
                            />
                        </Wrapper>
                    ))}
                </Wrapper>
                <Spacer isBasic />
                {/* Privacy  */}
                <Wrapper gap={responsiveHeight(1)}>
                    <TextInputs.Bordered
                        InputLabel={'Privacy'}
                        placeholder={'Privacy Policy'}
                        iconSizeRight={isTablet?totalSize(2.8):scale(24)}
                        placeholderTextColor={colors.appTextColor2}
                        customIconRight={appIcons.Down}
                        onPress={handleTogglePrivacyPolicyModal}
                    />
                    <TextInputs.Bordered
                        placeholder={'Terms & Conditions'}
                        iconSizeRight={isTablet?totalSize(2.8):scale(24)}
                        placeholderTextColor={colors.appTextColor2}
                        customIconRight={appIcons.Down}
                        onPress={handleToggleTermsConditionsModal}
                    />
                    <TextInputs.Bordered
                        placeholder={'Access'}
                        iconSizeRight={isTablet?totalSize(2.8):scale(24)}
                        placeholderTextColor={colors.appTextColor2}
                        customIconRight={appIcons.Down}
                        onPress={handleToggleAccessModal}
                    />
                </Wrapper>
                <Wrapper paddingVerticalBase>
                    <Text alignTextCenter isTextColor2 children={'2023 DESIRES 0.0.1'} />
                </Wrapper>
            </ScrollViews.KeyboardAvoiding>
        </>
    )
}

export default AppSettingInfo

const styles = StyleSheet.create({
    buttonONtheBottom: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: sizes.smallMargin,
        marginVertical: sizes.smallMargin,
    },
})