import React, {useRef} from 'react';
import {Wrapper, Headers, Cards, Icons} from '../../../components';
import {useHooks} from './hooks';
import Swiper from 'react-native-deck-swiper';
import {appIcons, colors, responsiveWidth, sizes} from '../../../services';
import {scale, verticalScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

const SwiperComponent = React.memo(
  ({
    swiperRef,
    SwipeDeckData,
    currentCardIndex,
    setSwipeTrun,
    onSwipedAll,
    onSwiping,
    renderCard,
  }) => {
    return (
      <Swiper
        ref={swiperRef}
        cardHorizontalMargin={sizes.baseMargin}
        cards={SwipeDeckData}
        verticalSwipe={false}
        stackSize={3}
        overlayLabels={{
          left: {
            element: (
              <LinearGradient
                colors={['rgba(34, 24, 49, 0)', colors.appPrimaryColor + 90]}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                style={{
                  flex: 1,
                  width: responsiveWidth(90),
                  borderRadius: responsiveWidth(5),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icons.Custom icon={appIcons.HotLiked} size={scale(150)} />
              </LinearGradient>
            ),
            style: {
              wrapper: {
                flex: 1,
                height: verticalScale(420),
                alignItems: 'center',
                justifyContent: 'center',
              },
            },
          },
          right: {
            element: (
              <Icons.Custom icon={appIcons.NotLiked} size={scale(150)} />
            ),
            style: {
              wrapper: {
                flex: 1,
                height: verticalScale(420),
                alignItems: 'center',
                justifyContent: 'center',
              },
            },
          },
        }}
        onSwipedAll={onSwipedAll}
        //onSwiping={onSwiping}
        stackSeparation={-scale(30)}
        stackScale={5}
        backgroundColor={colors.transparent}
        renderCard={renderCard}
      />
    );
  },
);

export default function Index() {
  const swiperRef = useRef(null);
  const {
    TopRightButtonsData,
    RenderEmptyList,
    SwipeDeckData,
    setSwipeDeckData,
    SwipeTrun,
    setSwipeTrun,
    currentCardIndex,
    setCurrentCardIndex,
  } = useHooks();

  const handleSwipedAll = () => {
    setSwipeDeckData([]);
    setCurrentCardIndex(''); // Reset index when all cards are swiped
  };

  const handleSwiping = x => {
    if (currentCardIndex >= 0 && currentCardIndex < SwipeDeckData.length) {
      if (x < 0) {
        setSwipeTrun(1); // Update state while dragging left
      } else if (x > 0) {
        setSwipeTrun(2); // Update state while dragging right
      } else {
        setSwipeTrun(0);
      }
    }
  };

  const renderCard = (card, cardIndex) => {
    return (
      <Cards.Profile
        DeckSwiper
        key={cardIndex} // Use a unique identifier from the card data
        CardImage={card.image} // Use the image property from the card data
        onPressHot={() => {
          //console.log('Hot button pressed');
          swiperRef.current.swipeLeft();
        }}
        onPressNot={() => {
          //console.log('Not button pressed');
          swiperRef.current.swipeRight();
        }}
        CardSwipeToHot={currentCardIndex === cardIndex && SwipeTrun === 1}
      />
    );
  };

  return (
    <Wrapper flex={1} backgroundColor={colors.appBgColor1}>
      <Headers.Common
        Title={!(SwipeDeckData?.length >= 1) && 'Hot or Not'}
        RightButtons={
          SwipeDeckData?.length >= 1
            ? [TopRightButtonsData[2]]
            : TopRightButtonsData
        }
        NoProfile
        MainBackgroundColor={colors.appBgColor1}
      />
      {SwipeDeckData?.length >= 1 ? (
        <Wrapper flex={1} isCenter>
          <SwiperComponent
            swiperRef={swiperRef}
            SwipeDeckData={SwipeDeckData}
            //currentCardIndex={currentCardIndex}
            //setSwipeTrun={setSwipeTrun}
            onSwipedAll={handleSwipedAll}
            //onSwiping={handleSwiping}
            renderCard={renderCard}
          />
        </Wrapper>
      ) : (
        <RenderEmptyList />
      )}
    </Wrapper>
  );
}
