import { StyleSheet, View, } from 'react-native'
import React from 'react'
import { BarButtons, ScrollViews, Spacer, Swipeables } from '../../../../components'
import LinearGradient from 'react-native-linear-gradient'
import { responsiveWidth, responsiveHeight, sizes } from '../../../../services'
import Text from '../../../../components/text'
import DeviceInfo from 'react-native-device-info'
import { height, width, totalSize } from 'react-native-dimension'
const isTablet = DeviceInfo.isTablet()

export const BuyCoinsComponents = ({ handleTogglePayMethodModal, data, height, hide = false }) => {
    return (
        <>
            <ScrollViews.KeyboardAvoiding >
                <Spacer isBasic={!isTablet} isSmall={isTablet} />
                {!hide && <Text alignTextCenter isTextColor2 isRegular isRegularFont>
                    Buy Coin to boost your profile in your region
                </Text>}
                <Spacer isBasic />
                {/* Ensure BarButtons is correctly imported */}
                <BarButtons.IconWithTextSelectOptions
                    Data={data}
                    style={{}}
                    labelRepresent={(item) => `${item.label} ${item.price}`}

                />
            </ScrollViews.KeyboardAvoiding>

            <LinearGradient
                colors={['rgba(255, 255, 255, 0.79)', '#FFFFFF']}
                style={styles.linearMainContainer}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}>
                <Swipeables.SwipableItem
                    onSwipeLeft={handleTogglePayMethodModal}
                    swipeDistance={responsiveWidth(80)}
                    SwipeTitle={'9.0$'}
                    LeftTitle={'Select the Payment Method'}
                    BtnTitle={'Swipe To Pay'}
                />
            </LinearGradient>
        </>
    )
}




const styles = StyleSheet.create({

    linearMainContainer: {
        height: responsiveHeight(10),
        justifyContent: 'center',
        paddingVertical: sizes.baseMargin,
        zIndex: 10
    },
})