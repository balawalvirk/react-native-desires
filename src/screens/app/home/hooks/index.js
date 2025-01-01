import React, {useMemo, useState} from 'react';
import {Buttons, Icons, Spacer, Text, Wrapper} from '../../../../components';
import {
  appIcons,
  appImages,
  responsiveHeight,
  responsiveWidth,
  routes,
} from '../../../../services';
import {navigate} from '../../../../navigation/rootNavigation';

export function useHooks() {
  const [FilterModal, setFilterModal] = useState(false);

  const FilterModalToggle = () => {
    setFilterModal(!FilterModal);
  };

  const HomeTopRightButtonsData = useMemo(() => [
    {
      IconName: appIcons.sendIcon,
      customPadding: responsiveWidth(2.5),
      isWithBorder: true,
      badgeValue: 8,
      onPress: () => {
        navigate(routes.position);
      },
    },
    {
      IconName: appIcons.filterIcon,
      customPadding: responsiveWidth(2.5),
      notify: 8,
      isWithBorder: true,
      onPress: FilterModalToggle,
    },
    {
      profile: appImages.profile,
    },
  ]);

  const renderEmptyList = React.memo(() => {
    return (
      <Wrapper
        isCenter
        flex={1}
        //backgroundColor={'red'}
        style={{height: responsiveHeight(75)}}>
        <Icons.Custom
          icon={appIcons.EmptyListHome}
          size={responsiveWidth(50)}
        />
        <Text alignTextCenter isRegular isRegularFont isTextColor2>
          No people found within search radius!
        </Text>
        <Text isRegular isRegularFont>
          Apply Customize Search Filter
        </Text>
        <Spacer isMedium />
        <Wrapper style={{width: responsiveWidth(75)}}>
          <Buttons.Colored text={'Customize Search Filter'} />
        </Wrapper>
      </Wrapper>
    );
  });

  return {
    renderEmptyList,
    HomeTopRightButtonsData,
    FilterModal,
    FilterModalToggle,
  };
}
