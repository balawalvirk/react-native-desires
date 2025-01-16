import {FlatList, View} from 'react-native';
import React from 'react';
import {Headers, Spacer, Text, Wrapper} from '../../../components';
import {appStyles, responsiveFontSize} from '../../../services';
import {useHooks} from './hooks';

export default function Index() {
  const {FriendRenderDetail, data} = useHooks();
  return (
    <Wrapper isMain>
      <Headers.Primary
        showBackArrow
        headerTitle={
          <Text
            alignTextCenter
            style={[
              appStyles.headerTitleStyle,
              {
                fontSize: responsiveFontSize(16),
              },
            ]}>
            Blocked Users <Text isPrimaryColor>(12)</Text>
          </Text>
        }
      />
      <FlatList
        data={data}
        ListHeaderComponent={<Spacer isBasic />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<Spacer isBasic />}
        renderItem={({item, index}) => (
          <FriendRenderDetail key={index} Detail={item} />
        )}
      />
    </Wrapper>
  );
}
