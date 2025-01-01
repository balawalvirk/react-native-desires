import {useMemo, useState} from 'react';
import {appIcons} from '../../../../services';

export function useHooks() {
  const [LanguageModal, setLanguageModal] = useState(false);
  const [AccessModal, setAccessModal] = useState(false);
  const [TermsConditionsModal, setTermsConditionsModal] = useState(false);
  const [PrivacyPolicyModal, setPrivacyPolicyModal] = useState(false);

  const handleToggleLocationModal = () => {
    setLanguageModal(!LanguageModal);
  };
  const handleToggleAccessModal = () => {
    setAccessModal(!AccessModal);
  };
  const handleToggleTermsConditionsModal = () => {
    setTermsConditionsModal(!TermsConditionsModal);
  };
  const handleTogglePrivacyPolicyModal = () => {
    setPrivacyPolicyModal(!PrivacyPolicyModal);
  };

  const LanguageModalData = useMemo(() => [
    {customIcon: appIcons.germany, label: 'German'},
    {customIcon: appIcons.unitedstates, label: 'English'},
    {customIcon: appIcons.france, label: 'French'},
    {customIcon: appIcons.spain, label: 'Spanish'},
  ]);

  const unitsData = useMemo(() => [
    {label: 'Distance', unit: 'Km'},
    {label: 'Length', unit: 'Cm'},
    {label: 'Weight', unit: 'Kg'},
  ]);
  return {
    unitsData,
    LanguageModal,
    LanguageModalData,
    handleToggleLocationModal,
    AccessModal,
    handleToggleAccessModal,
    PrivacyPolicyModal,
    handleTogglePrivacyPolicyModal,
    TermsConditionsModal,
    handleToggleTermsConditionsModal,
  };
}
