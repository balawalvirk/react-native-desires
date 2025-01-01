import {useMemo, useState} from 'react';
import {navigate} from '../../../../navigation/rootNavigation';
import {appIcons, colors, routes} from '../../../../services';

export function useHooks() {
  const [SecurePassword, setSecurePassword] = useState(true);
  const [InputFocused, setInputFocused] = useState('');
  const [RememberMe, setRememberMe] = useState(false);
  const [ForgotPasswordModal, setForgotPasswordModal] = useState(false);

  const handleLogin = (email, password) => {
    navigate(routes.app);
  };

  function handleForgotPasswordModal() {
    setForgotPasswordModal(!ForgotPasswordModal);
  }

  function handleInputFocused({FocusedOn}) {
    setInputFocused(FocusedOn);
  }
  function handleSecurePassword() {
    setSecurePassword(!SecurePassword);
  }
  function handleRememberMe() {
    setRememberMe(!RememberMe);
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

  return {
    handleLogin,
    SecurePassword,
    InputFocused,
    RememberMe,
    LoginIconsData,
    ForgotPasswordModal,
    //function
    handleInputFocused,
    handleSecurePassword,
    handleRememberMe,
    handleForgotPasswordModal,
  };
}
