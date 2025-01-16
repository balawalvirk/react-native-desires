import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Buttons, Icons, Spacer, Text, Wrapper} from '../../../../components';
import {
  appIcons,
  appImages,
  responsiveHeight,
  responsiveWidth,
  routes,
} from '../../../../services';
import {verticalScale} from 'react-native-size-matters';

export function useHooks() {
  const [SwipeTrun, setSwipeTrun] = useState(0);
  const [SwipeDeckData, setSwipeDeckData] = useState();
  const [currentCardIndex, setCurrentCardIndex] = useState(null);

  const Data = useMemo(
    () => [
      {
        id: '1',
        image: appImages.image4, // Replace with your actual image source
        name: 'Card 1',
        description: 'Description for Card 1',
      },
      {
        id: '2',
        image: appImages.image2, // Replace with your actual image source
        name: 'Card 2',
        description: 'Description for Card 2',
      },
      {
        id: '3',
        image: appImages.image3, // Replace with your actual image source
        name: 'Card 3',
        description: 'Description for Card 3',
      },
      {
        id: '4',
        image: appImages.image4, // Replace with your actual image source
        name: 'Card 4',
        description: 'Description for Card 4',
      },
    ],
    [],
  );

  const TopRightButtonsData = useMemo(() => [
    {
      IconName: appIcons.Search,
      customPadding: responsiveWidth(2.5),
      isWithBorder: true,
    },
    {
      IconName: appIcons.filterIcon,
      customPadding: responsiveWidth(2.5),

      isWithBorder: true,
    },
    {
      IconName: appIcons.Heart,
      customPadding: responsiveWidth(2.5),
      isWithBorder: true,
    },
  ]);

  const RenderEmptyList = React.memo(() => {
    return (
      <Wrapper
        isCenter
        flex={1}
        //backgroundColor={'red'}
        style={{height: responsiveHeight(75)}}>
        <Icons.Custom
          icon={appIcons.EmptyListHotorNot}
          size={responsiveWidth(50)}
        />
        <Text
          alignTextCenter
          isRegular
          isRegularFont
          isTextColor2
          style={{width: responsiveWidth(60)}}>
          No users found, Press refresh button below to see more profiles
        </Text>

        <Spacer isMedium />
        <Wrapper style={{width: responsiveWidth(60)}}>
          <Buttons.Colored
            text={'Refresh'}
            onPress={() => {
              setSwipeDeckData(Data);
            }}
          />
        </Wrapper>
      </Wrapper>
    );
  });
  return {
    TopRightButtonsData,
    RenderEmptyList,
    SwipeDeckData,
    setSwipeDeckData,
    SwipeTrun,
    setSwipeTrun,
    currentCardIndex,
    setCurrentCardIndex,
  };
}
