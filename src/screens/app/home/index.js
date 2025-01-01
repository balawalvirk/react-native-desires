import React, {Component, useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {
  Wrapper,
  Text,
  Images,
  Spacer,
  Icons,
  Buttons,
  ScrollViews,
  HeaderHome,
  Headers,
  Cards,
  Modals,
  Labels,
  TextInputs,
  Sliders,
  StatusBars,
} from '../../../components';
import {useHooks} from './hooks';
import {
  appIcons,
  colors,
  responsiveHeight,
  responsiveWidth,
} from '../../../services';
import {withDecay} from 'react-native-reanimated';
import {Icon} from '@rneui/base';

export default function Home() {
  const {
    renderEmptyList,
    HomeTopRightButtonsData,
    FilterModal,
    FilterModalToggle,
  } = useHooks();
  const [cardShown, setCardShown] = useState(1);
  const [DataShown, setDataShown] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDataShown([1]); // Example data, replace with actual data fetching logic
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCardShown(() => {
        if (cardShown >= 3) {
          return 1;
        } else {
          return cardShown + 1;
        }
      }); // Example data, replace with actual data fetching logic
    }, 1500);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [DataShown, cardShown]);

  return (
    <Wrapper isMain>
      <Headers.Common RightButtons={HomeTopRightButtonsData} />
      <FlatList
        data={DataShown}
        renderItem={(item, index) => (
          <Wrapper key={index} isCenter paddingVerticalBase>
            <Cards.Profile
              isVip={cardShown == 1}
              isGold={cardShown == 2}
              isStandard={cardShown == 3}
            />
          </Wrapper>
        )}
        ListEmptyComponent={renderEmptyList}
      />
      {/* Modal of Filter */}
      <Modals.PopupPrimary
        visible={FilterModal}
        isBlur
        children={
          <Wrapper>
            <Wrapper marginHorizontalBase>
              <Wrapper
                flexDirectionRow
                alignItemsCenter
                justifyContentSpaceBetween
                //backgroundColor={'blue'}
              >
                <Text
                  isTinyTitle
                  style={{
                    //backgroundColor: 'red',
                    width: responsiveWidth(50),
                  }}
                  children={'Filter'}
                />
                <TouchableOpacity onPress={FilterModalToggle}>
                  <Icon
                    name="close-outline"
                    type="ionicon"
                    size={responsiveWidth(8)}
                    color={colors.appBGColor}
                  />
                </TouchableOpacity>
              </Wrapper>
              <Spacer isTiny />
              <Text
                isTextColor2
                isRegular
                isRegularFont
                children={'Choose a filter to match profiles'}
              />
            </Wrapper>
            <Spacer isBasic />
            <Sliders.PrimarySlider
              SliderLabel={'Distance'}
              SliderValue={[40]}
              ValueLabel={'km'}
            />
            <Spacer isBasic />
            <Sliders.PrimarySlider
              SliderLabel={'Age'}
              isMulti
              SliderValue={[20, 40]}
            />

            <Labels.Normal Label={'Location'} />
            <Spacer isBasic />
            <TextInputs.Bordered
              placeholder={'Chicago, USA'}
              iconNameRight={'chevron-right'}
              iconTypeRight={'octicon'}
              iconSizeRight={responsiveWidth(5)}
              iconColorRight={colors.appPrimaryColor}
              onPress={() => {}}
            />
            <Spacer height={responsiveHeight(18)} />
            <Buttons.Colored
              text={'Apply Filter'}
              onPress={FilterModalToggle}
            />
            <Spacer isBasic />
            <Text
              alignTextCenter
              isMedium
              isMediumFont
              children={'Clear'}
              onPress={FilterModalToggle}
            />
            <Spacer isBasic />
          </Wrapper>
        }
      />
    </Wrapper>
  );
}
