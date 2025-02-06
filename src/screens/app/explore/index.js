import React from 'react';
import {
  Wrapper,
  Text,
  Headers,
  Spacer,
  Icons,
  Modals,
} from '../../../components';
import {useHooks} from './hooks';
import {ImageBackground, StyleSheet} from 'react-native';
import {
  appIcons,
  appStyles,
  colors,
  responsiveFontSize,
  responsiveWidth,
  sizes,
} from '../../../services';
import {scale} from 'react-native-size-matters';
import MapView, {Marker} from 'react-native-maps';
import {MapStyling} from '../../../services/utilities/assets/mapStyling';
import DeviceInfo from 'react-native-device-info';
import {height, width, totalSize} from'react-native-dimension'


const isTablet=DeviceInfo.isTablet();

export default function Index() {
  const {TopRightButtonsData, SearchModal, HandleSearchModal} = useHooks();
  return (
    <Wrapper
      //flex={1}
      backgroundColor={colors.transparent}
      style={StyleSheet.absoluteFillObject}>
      <MapView
        style={{flex: 1, overflow: 'visible'}}
        //style={StyleSheet.absoluteFillObject}
        customMapStyle={MapStyling}
        initialRegion={{
          latitude: 37.7749, // San Francisco latitude
          longitude: -122.4194, // San Francisco longitude
          latitudeDelta: 0.0922, // Zoom level for latitude
          longitudeDelta: 0.0421, // Zoom level for longitude
        }}>
        {/* Customized destination marker */}

        <Marker
          coordinate={{
            latitude: 37.7749,
            longitude: -122.4194,
          }}
          style={[
            {
              flex: 1,
              //backgroundColor: 'pink',
            },
          ]}>
          <Icons.Custom icon={appIcons.LocationLogo} size={scale(150)} />
        </Marker>
      </MapView>
      <Wrapper isAbsolute flex={1}>
        <Headers.Common
          MainBackgroundColor={colors.transparent}
          Title={'Around Me'}
          RightButtons={TopRightButtonsData}
        />
        <Spacer isBasic />
        {/* Text or u can say message for the user */}

        <ImageBackground
          style={{
            marginHorizontal: sizes.baseMargin,
            //height: responsiveHeight(10),
            width: responsiveWidth(90),
            borderRadius: responsiveWidth(5),
            padding: scale(16),
            overflow: 'hidden',
            backgroundColor: 'rgba(55, 55, 55, 0.30)',
            justifyContent: 'center',
          }}
          source={appIcons.LocationMessageContainer}
          resizeMode="stretch">
          <Text
            isMediumFont
            alignTextCenter
            style={{
              fontSize: responsiveFontSize(13),
              color: colors.appBGColor,
            }}>
            Only users who are currently within a radius of 10km displayed here.
            Users outside this area are also displayed on the home page.
          </Text>
        </ImageBackground>
      </Wrapper>
      {['plus', 'minus'].map((item, index) => (
        <Wrapper
          key={index}
          isAbsolute
          style={{
            right: 10,
            bottom: index == 0 ? scale(150) : scale(100),
            ...appStyles.shadowExtraDark,
          }}>
          <Icons.Button
            iconName={item}
            iconType={'antdesign'}
            iconSize={scale(20)}
            buttonStyle={{
              borderRadius: responsiveWidth(100),
              padding: scale(8),
              //backgroundColor: 'red',
            }}
          />
        </Wrapper>
      ))}

      <Modals.PlacesAutocomplete
        visible={SearchModal}
        toggle={HandleSearchModal}
        OnMapPage
      />
    </Wrapper>
  );
}
const styles = StyleSheet.create({
  m: {
    overflow: 'visible',
  },
});
