import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Buttons, Headers, Spacer, Text, Wrapper} from '../../../components';
import {
  appImages,
  colors,
  responsiveHeight,
  responsiveWidth,
} from '../../../services';
import {
  Camera,
  useCameraDevice,
  useCameraDevices,
} from 'react-native-vision-camera';
import {requestCameraPermission, requestPhotoLibraryPermission} from './hooks';
import {scale} from 'react-native-size-matters';
import DeviceInfo from 'react-native-device-info';
import {hight,width,totalSize} from 'react-native-dimension'

const isTablet=DeviceInfo.isTablet()

export default function Index() {
  const [photo, setPhoto] = useState(null);
  const cameraRef = useRef(null);
  const [cameraPermission, setCameraPermission] = useState(false);
  const device = useCameraDevice('back');

  useEffect(() => {
    const checkPermissions = async () => {
      const cameraStatus = await requestCameraPermission();
    };
    checkPermissions();
  }, []);

  const StartCamera = async () => {
    // Request camera permission again when taking a photo
    const cameraStatus = await requestCameraPermission();
    setCameraPermission(cameraStatus);
  };

  const takePhoto = async () => {
    try {
      if (cameraRef.current) {
        const photo = await cameraRef.current.takePhoto({
          quality: 1,
          skipMetadata: true,
        });
        // console.log(photo, photo.path);
        setPhoto(photo.path);
        setCameraPermission(false); // Set camera permission to false after taking the photo
      } else {
        console.error('Camera ref is not set');
        alert('Camera is not available');
      }
    } catch (error) {
      console.error('Error taking photo:', error);
      alert('An error occurred while taking the photo. Please try again.');
    }
  };
  return (
    <Wrapper isMain>
      <Wrapper marginHorizontalTiny={false}>
        <Headers.Primary
          showBackArrow
          title={'Verification'}
          right={
            <Text isPrimaryColor isMedium isMediumFont>
              Cancel
            </Text>
          }
        />
      </Wrapper>
      <Spacer isBasic />
      <Wrapper marginHorizontalBase>
        <Text isRegular isRegularFont style={{width: responsiveWidth(75)}}>
          Please take a selfie with the gesture shown in the picture
        </Text>
      </Wrapper>
      <Spacer isBasic />
      <Wrapper marginHorizontalBase>
        {photo ? (
          <View>
            <Image
              source={{uri: `${'file://'}${photo}`}}
              style={styles.imageMainContainer}
            />
            <Spacer isSmall />
          </View>
        ) : null}
        <Image source={appImages.image2} style={styles.imageMainContainer} />
      </Wrapper>
      <Wrapper flex={1} paddingVerticalBase justifyContentFlexend>
        <Buttons.Colored text={'Start Camera'} onPress={StartCamera} />
      </Wrapper>
      {cameraPermission ? (
        <View style={styles.camera}>
          <Camera
            style={styles.camera}
            device={device}
            isActive={cameraPermission}
            ref={cameraRef}
            photo={true}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: responsiveHeight(2),
              left: responsiveWidth(41),
            }}
            onPress={takePhoto}>
            <Wrapper
              style={{
                height: scale(60),
                width: scale(60),
                borderRadius: 150,
                backgroundColor: colors.appBgColor1,
              }}
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </Wrapper>


  );
}

const styles = StyleSheet.create({
  imageMainContainer: {
    height: responsiveHeight(28),
    width: 'auto',
    borderRadius: responsiveWidth(5),
    overflow: 'hidden',
    resizeMode: 'cover',
  },
  camera: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  capturedImage: {
    height: responsiveHeight(28),
    width: 'auto',
    borderRadius: responsiveWidth(5),
    overflow: 'hidden',
    resizeMode: 'cover',
    marginTop: 20,
  },
});
