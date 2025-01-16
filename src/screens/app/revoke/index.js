import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  Headers,
  Images,
  Lines,
  Spacer,
  Text,
  Wrapper,
} from '../../../components';
import {appImages, colors, responsiveWidth} from '../../../services';
import {scale} from 'react-native-size-matters';

const Index = () => {
  return (
    <Wrapper isMain>
      <Headers.Primary showBackArrow title={'Revoke'} />
      <Spacer isSmall />
      <RequestsRenderComponent Name={'Jaydon Lubin'} Time={'02:00 PM'} />
      <RequestsRenderComponent Name={'Ann Stanton'} Time={'2 days ago'} />
    </Wrapper>
  );
};

export default Index;

const RequestsRenderComponent = React.memo(({Name, Time}) => {
  return (
    <Wrapper marginHorizontalBase marginVerticalSmall>
      <Wrapper flexDirectionRow justifyContentSpaceBetween>
        <Images.Round source={appImages.image4} size={scale(48)} />
        <Wrapper
          marginHorizontalSmall
          //backgroundColor={'red'}
          style={{width: responsiveWidth(60)}}>
          <Text isRegular isBoldFont>
            {Name}
          </Text>
          <Text isSmall isRegularFont isTextColor2>
            {Time}
          </Text>
        </Wrapper>
        <TouchableOpacity>
          <Text isPrimaryColor isSmall isMediumFont>
            Revoke
          </Text>
        </TouchableOpacity>
      </Wrapper>
      <Wrapper alignItemsFlexEnd>
        <Lines.Horizontal
          height={0.8}
          width={responsiveWidth(72)}
          color={colors.appBorderColor2}
        />
      </Wrapper>
    </Wrapper>
  );
});

const styles = StyleSheet.create({});
