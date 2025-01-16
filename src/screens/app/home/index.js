import React, {Component, useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
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
} from '../../../components';
import {useHooks} from './hooks';
import {
  appIcons,
  appImages,
  colors,
  responsiveHeight,
  responsiveWidth,
  routes,
} from '../../../services';
import {Card, Icon} from '@rneui/base';
import {verticalScale} from 'react-native-size-matters';
import {navigate} from '../../../navigation/rootNavigation';

const {height} = Dimensions.get('window'); // Get the screen height

export default function Home() {
  const {
    renderEmptyList,
    HomeTopRightButtonsData,
    FilterModal,
    FilterModalToggle,
    CardsData,
  } = useHooks();
  const [cardShown, setCardShown] = useState(1);
  const [DataShown, setDataShown] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDataShown(CardsData); // Example data, replace with actual data fetching logic
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setCardShown(() => {
  //       if (cardShown >= 3) {
  //         return 1;
  //       } else {
  //         return cardShown + 1;
  //       }
  //     }); // Example data, replace with actual data fetching logic
  //   }, 1500);

  //   return () => clearTimeout(timer); // Cleanup the timer on unmount
  // }, [DataShown, cardShown]);

  return (
    <Wrapper isMain>
      <Headers.Common RightButtons={HomeTopRightButtonsData} />
      <FlatList
        data={DataShown}
        renderItem={({item, index}) => {
          return (
            <Wrapper
              key={index}
              isCenter
              //backgroundColor={index == 1 ? 'red' : 'blue'}
              //style={{height: verticalScale(505)}}
            >
              <Cards.Profile
                CardImage={item?.image}
                isVip={item?.isVip}
                isGold={item?.isGold}
                isStandard={item?.isStandard}
                onPress={() => {
                  navigate(routes.userProfile, {visiterProfile: true});
                }}
              />
            </Wrapper>
          );
        }}
        ItemSeparatorComponent={<Spacer isMedium />}
        ListFooterComponent={<Spacer height={responsiveHeight(10)} />}
        ListEmptyComponent={renderEmptyList}
        contentContainerStyle={styles.flatListContent}
        //snapToAlignment="center" // Ensures the list snaps to the center of each item
        // decelerationRate="fast" // Makes the scroll deceleration smooth
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        //snapToInterval={verticalScale(505)}
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

const styles = StyleSheet.create({
  flatListContent: {
    flexGrow: 1,
    //height: responsiveHeight(90),
    justifyContent: 'center', // Centers items vertically inside the FlatList
    alignItems: 'center', // Ensures items are centered horizontally
  },
  centeredItemWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, // Ensures item takes full height to be centered
  },
});
