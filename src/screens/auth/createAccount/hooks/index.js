import {useMemo, useState} from 'react';
import {appIcons, colors} from '../../../../services';

export function useHooks() {
  const [SecurePassword1, setSecurePassword1] = useState(true);
  const [SecurePassword2, setSecurePassword2] = useState(true);
  const [InputFocused, setInputFocused] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [automatedMessage, setAutomatedMessage] = useState(false);
  const [uploadImageModal, setUploadImageModal] = useState(false);
  const [personalInfoModal, setpersonInfoModal] = useState(false);
  const [smsAuthModal, setSmsAuthModal] = useState(false);
  const [smsAuthOTPModal, setSmsAuthOTPModal] = useState(false);

  function handleInputFocused({FocusedOn}) {
    setInputFocused(FocusedOn);
  }
  function handleAccepted() {
    setAccepted(!accepted);
  }
  function handleAutomatedMessage() {
    setAutomatedMessage(!automatedMessage);
  }
  function handleToggleUploadImageModal() {
    setUploadImageModal(!uploadImageModal);
  }
  function handleTogglePersonInfoModal() {
    setpersonInfoModal(!personalInfoModal);
  }
  function handleToggleSmsAuthModal() {
    setSmsAuthModal(!smsAuthModal);
  }
  function handleToggleSmsAuthOTPModal() {
    setSmsAuthOTPModal(!smsAuthOTPModal);
  }

  function handleSecurePassword({num}) {
    // Ensure num is a number and check if it is undefined or invalid
    if (num === undefined || num === '') {
      throw new Error('Need a Specific Number');
    }

    const number = Number(num); // Convert num to a number if it's a string

    if (number === 1) {
      setSecurePassword1(prevState => !prevState);
    } else if (number === 2) {
      setSecurePassword2(prevState => !prevState);
    } else {
      throw new Error('Invalid number, expected 1 or 2');
    }
  }

  const LoginIconsData = useMemo(
    () => [
      {
        iconName: 'apple',
        iconType: 'materialIcon',
        iconColor: colors.black,
      },
      {
        iconName: 'logo-facebook',
        iconType: 'ionicon',
        iconColor: colors.facebook,
      },
      {
        customIcon: appIcons.Google,
        //iconType: 'ionicon',
        //iconColor: colors.facebook,
      },
    ],
    [],
  );
  const GenderData = useMemo(
    () => [
      {
        iconName: 'male-outline',
        iconType: 'ionicon',
        iconColor: colors.black,
        Title: 'Male',
      },
      {
        iconName: 'female-outline',
        iconType: 'ionicon',
        iconColor: colors.facebook,
        Title: 'Female',
      },
      {
        iconName: 'transgender-outline',
        iconType: 'ionicon',
        iconColor: colors.facebook,
        Title: 'Trans',
      },
    ],
    [],
  );

  return {
    InputFocused,
    SecurePassword1,
    SecurePassword2,
    automatedMessage,
    accepted,
    LoginIconsData,
    GenderData,
    //modals
    personalInfoModal,
    smsAuthModal,
    smsAuthOTPModal,
    uploadImageModal,
    //functions
    handleInputFocused,
    handleAccepted,
    handleAutomatedMessage,
    handleSecurePassword,
    //modalfunctions
    handleTogglePersonInfoModal,
    handleToggleSmsAuthModal,
    handleToggleSmsAuthOTPModal,
    handleToggleUploadImageModal,
  };
}
