import {PermissionsAndroid, Platform} from 'react-native';
export const useHooks = () => {
  return {};
};

export const requestCameraPermission = async () => {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } else {
    // For iOS, permissions are handled in Info.plist
    return true;
  }
};

export const requestPhotoLibraryPermission = async () => {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } else {
    // For iOS, permissions are handled in Info.plist
    return true;
  }
};
