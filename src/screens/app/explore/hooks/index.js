import {useMemo, useState} from 'react';
import {appIcons, responsiveWidth} from '../../../../services';

export function useHooks() {
  const [SearchModal, setSearchModal] = useState(false);
  const HandleSearchModal = () => {
    //console.log('hi');
    setSearchModal(!SearchModal);
  };

  const TopRightButtonsData = useMemo(
    () => [
      {
        IconName: appIcons.Search,
        customPadding: responsiveWidth(2.5),
        isWithBorder: true,
        onPress: () => {
          HandleSearchModal();
        },
      },
      {
        IconName: appIcons.filterIcon,
        customPadding: responsiveWidth(2.5),
        notify: 8,
        isWithBorder: true,
      },
    ],
    [],
  );
  return {TopRightButtonsData, SearchModal, HandleSearchModal};
}
