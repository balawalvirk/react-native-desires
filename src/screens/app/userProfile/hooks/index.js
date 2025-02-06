import {useEffect, useMemo, useRef, useState} from 'react';
import {navigate} from '../../../../navigation/rootNavigation';
import {routes} from '../../../../services';
import { requestCameraPermission } from '../../VerifyProfile/hooks';
import { useCameraDevice } from 'react-native-vision-camera';

export const useHooks = () => {
  const [EditProfileModal, setEditProfileModal] = useState(false);
  const [AddToFavorite, setAddToFavorite] = useState(false);
  const [AddToFriends, setAddToFriends] = useState(false);
  const [verification, setVerification] = useState(false);


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
    setVerification(false)
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
        setCameraPermission(false);
        setVerification(true)
         // Set camera permission to false after taking the photo
      } else {
        console.error('Camera ref is not set');
        alert('Camera is not available');
      }
    } catch (error) {
      console.error('Error taking photo:', error);
      alert('An error occurred while taking the photo. Please try again.');
    }
  };


  const onPressBack=()=>{
  
    setVerification(false)
      setTimeout(() => {
        setPhoto('')  
      }, 500)
    
  }

  handleToggleAddToFavorite = () => {
    setAddToFavorite(!AddToFavorite);
  };
  handleToggleAddToFriends = () => {
    setAddToFriends(!AddToFriends);
  };
  const handleEditProfileModal = () => {
    setEditProfileModal(!EditProfileModal);
  };
  const userAboutData = useMemo(
    () => [
      {Label: 'Gender', Value: 'Male'},
      {Label: 'Available for', Value: 'Girls'},
      {Label: 'Age', Value: '25'},
      {Label: 'Nationality', Value: 'USA'},
      {Label: 'Ethnicity', Value: 'Caucasian'},
      {Label: 'Chest', Value: '110 cm'},
      {Label: 'Waist', Value: '90 cm'},
      {Label: 'Hips', Value: '110 cm'},
      {Label: 'Height', Value: '189 cm'},
      {Label: 'Weight', Value: '89 cm'},
      {Label: 'Hair Length', Value: 'Shoulder length'},
      {Label: 'Hair', Value: 'Blond'},
      {Label: 'Eye', Value: 'Green'},
    ],
    [],
  );

  const RequestAndRevokeData = useMemo(
    () => [
      {
        Label: 'Request',
        Value: 2,
        onPress: () => {
          navigate(routes.InComingRequest);
        },
      },
      {
        Label: 'Revoke',
        Value: 3,
        onPress: () => {
          navigate(routes.revoke);
        },
      },
    ],
    [],
  );

  return {
    userAboutData,
    RequestAndRevokeData,
    EditProfileModal,
    handleEditProfileModal,
    verification, setVerification,
    photo,setPhoto,
    cameraRef,
    cameraPermission,
    setCameraPermission,
    device,
    StartCamera,
    takePhoto,

    onPressBack,
    //
    AddToFavorite,
    AddToFriends,
    handleToggleAddToFavorite,
    handleToggleAddToFriends,
  };
};
