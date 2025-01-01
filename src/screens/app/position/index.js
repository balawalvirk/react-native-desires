import {StyleSheet} from 'react-native';
import React from 'react';
import {
  Buttons,
  Headers,
  Icons,
  Labels,
  Lines,
  Spacer,
  Switches,
  Text,
  Wrapper,
} from '../../../components';
import {
  appIcons,
  appStyles,
  fontSizes,
  responsiveHeight,
  responsiveWidth,
} from '../../../services';
import {goBack} from '../../../navigation/rootNavigation';

const Index = () => {
  return (
    <Wrapper isMain>
      <Headers.Primary showBackArrow title={'Position'} />
      <Icons.Custom
        containerStyle={[appStyles.center]}
        icon={appIcons.PositionBackground}
        Height={responsiveHeight(20)}
        Width={responsiveWidth(60)}
      />
      <Spacer isBasic />
      <Wrapper
        flexDirectionRow
        marginHorizontalBase
        alignItemsCenter
        justifyContentSpaceBetween>
        <Text isRegular isRegularFont children={'Use interval'} />
        <Switches.Custom />
      </Wrapper>
      <Spacer isBasic />
      <Labels.Normal
        Label={'Position - 01'}
        alignTextCenter
        FontSize={fontSizes.large}
      />
      <Spacer isBasic />
      <Wrapper marginHorizontalBase isCenter>
        <Text isRegular isRegularFont isTextColor2 alignTextCenter>
          When users search for your gender and you are within your set search
          radius, your profile currently appears in position - 01.
        </Text>
        <Spacer isMedium />
        <Text isRegular isRegularFont isTextColor2 alignTextCenter>
          Here you can automatically preset the boost at an arrival.
        </Text>
      </Wrapper>
      <Spacer isMedium />
      <Wrapper flexDirectionRow alignItemsCenter justifyContentCenter>
        <Lines.Horizontal width={responsiveWidth(20)} />
        <Spacer horizontal isBasic />
        <Text isTextColor2 children={'or'} />
        <Spacer horizontal isBasic />
        <Lines.Horizontal width={responsiveWidth(20)} />
      </Wrapper>
      <Spacer isMedium />
      <Wrapper marginHorizontalBase>
        <Text isRegular isRegularFont isTextColor2 alignTextCenter>
          You can also get your profile to position 1 with an instant boost.
        </Text>
      </Wrapper>
      <Wrapper
        flex={1}
        justifyContentFlexend
        paddingVerticalBase
        //backgroundColor={'red'}
      >
        <Buttons.Colored
          text={'Use Boost'}
          onPress={() => {
            goBack();
          }}
        />
      </Wrapper>
    </Wrapper>
  );
};

export default Index;

const styles = StyleSheet.create({});
