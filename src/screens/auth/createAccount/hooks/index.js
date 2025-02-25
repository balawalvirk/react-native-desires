import { useMemo, useState } from 'react';
import { appIcons, colors, validateEmail, validatePassword } from '../../../../services';
import { uniqueID } from '../../../../backend/utility';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

export function useHooks() {
  const user_Redux = useSelector(state => state?.user_redux ?? {}, shallowEqual)
  const dispatch = useDispatch()
  const [SecurePassword1, setSecurePassword1] = useState(true);
  const [SecurePassword2, setSecurePassword2] = useState(true);
  const [InputFocused, setInputFocused] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [automatedMessage, setAutomatedMessage] = useState(false);
  const [uploadImageModal, setUploadImageModal] = useState(false);
  const [personalInfoModal, setpersonInfoModal] = useState(false);
  const [smsAuthModal, setSmsAuthModal] = useState(false);
  const [smsAuthOTPModal, setSmsAuthOTPModal] = useState(false);

  // 
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [loading, setLoading] = useState(false)

  function handleInputFocused({ FocusedOn }) {
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

  function handleSecurePassword({ num }) {
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


  // validation
  const validation = () => {
    let required = 'Field value is required!'
    !email ? setEmailError(required) : validateEmail(email) ? setEmailError('Please enter valid Email') : setEmailError('')
    !password ? setPasswordError(required) : password?.trim().length < 6 ? setPasswordError('Password must be atleast 6 characters long!') : setPasswordError('')
    !confirmPassword ? setConfirmPasswordError(required) : password.trim() !== confirmPassword.trim() ? setConfirmPasswordError('Password must match with confirm password') : setConfirmPasswordError('')

    if (validateEmail(email) && password?.trim().length > 6 && password?.trim() == confirmPassword?.trim()) {
      return true
    } else {
      return false
    }

  }

  const handleSignUp = () => {
    try {
      if (validation) {

        const payload = {
          _id: uniqueID(),
          email: email,
          password: password,
          confirmPassword: confirmPassword

        }
        handleToggleSmsAuthModal();
      }
    } catch (error) {
      console.log('error: ' + error)
    }
  }

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
    // 
    email,
    setEmail,
    emailError,
    setEmailError,
    password,
    setPassword,
    passwordError,
    setPasswordError,
    confirmPassword,
    setConfirmPassword,
    confirmPasswordError,
    setConfirmPasswordError,

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
    handleSignUp
  };
}
