import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ScrollViews, Spacer, Text, Wrapper } from '../../../../components';
import { colors, responsiveWidth } from '../../../../services';
import DeviceInfo from 'react-native-device-info';
import { height, width, totalSize } from'react-native-dimension'

const isTablet = DeviceInfo.isTablet()


export const MyCreditComponent = ({ data }) => {
    return (
        <>
            <ScrollViews.KeyboardAvoiding>
                {/* Headers */}
                <Wrapper
                     marginHorizontalBase
                    flexDirectionRow
                    alignItemsCenter
                    justifyContentSpaceBetween>
                    {['Date', 'Activity', 'Amount'].map((item, index) => {
                        return (
                            <Wrapper
                                key={index}
                                style={{
                                    //  width: index == 1 ? responsiveWidth(22) : 'auto',

                                    width:index == 0?width(30):index == 1?width(20):width(13),
                                    
                                    ...(isTablet&&{width:index == 0?width(30):index == 1?width(30):width(13),})
                                
                                }}>
                                <Text isRegular isRegularFont
                                
                                // alignTextRight={index == 1}
                            
                                >
                                    {item}
                                </Text>
                            </Wrapper>
                        );
                    })}
                </Wrapper>
                {/* rows */}
                {data?.map((eachRow, index) => (
                    <Wrapper
                        key={index}
                        //backgroundColor={'red'}
                        paddingVerticalSmall
                        marginHorizontalBase
                        flexDirectionRow
                        alignItemsCenter
                        justifyContentSpaceBetween
                        >
                        <Wrapper
                            //backgroundColor={'blue'}
                            style={{ width:isTablet?width(30): responsiveWidth(41),
                            }}>
                            <Text
                                isSmall
                                isRegularFont
                                style={{ color: eachRow.isRed ? colors.error : colors.success }}>
                                {eachRow.Date}
                            </Text>
                        </Wrapper>
                        <Wrapper
                            //backgroundColor={'red'}
                            style={{
                                //  width:isTablet?width(30): responsiveWidth(35)
                                 width:isTablet?width(30):responsiveWidth(35)
                                
                             }}
                            
                            
                            >
                            <Text
                                isSmall
                                isRegularFont
                                style={{ color: eachRow.isRed ? colors.error : colors.success}}>
                                {eachRow.Activity}
                            </Text>
                        </Wrapper>
                        <Wrapper
                            //backgroundColor={'green'}
                            style={{ width:isTablet?width(13): responsiveWidth(13) 
                            }}>
                            <Text
                                isSmall
                                isRegularFont
                                alignTextCenter
                                style={{ color: eachRow.isRed ? colors.error : colors.success }}>
                                {eachRow.Amount}
                            </Text>
                        </Wrapper>
                    </Wrapper>
                ))}
                {isTablet && <Spacer />}
            </ScrollViews.KeyboardAvoiding>
        </>
    )
}


const styles = StyleSheet.create({})