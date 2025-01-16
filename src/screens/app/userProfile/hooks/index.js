import {useMemo, useState} from 'react';
import {navigate} from '../../../../navigation/rootNavigation';
import {routes} from '../../../../services';

export const useHooks = () => {
  const [EditProfileModal, setEditProfileModal] = useState(false);
  const [AddToFavorite, setAddToFavorite] = useState(false);
  const [AddToFriends, setAddToFriends] = useState(false);

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
    //
    AddToFavorite,
    AddToFriends,
    handleToggleAddToFavorite,
    handleToggleAddToFriends,
  };
};
