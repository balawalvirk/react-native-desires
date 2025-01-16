import React, {useMemo} from 'react';
import {Lines, Text, Wrapper} from '../../../../components';
import {colors, responsiveWidth} from '../../../../services';

export const useHooks = () => {
  const chatOptions = useMemo(
    () => [
      'Delete',
      'Search',
      'Mute',
      'Media & Links',
      'Clear Chat',
      'Add Shortcut',
      'Export Chat',
      'Report',
      'Block',
    ],
    [],
  );

  const ChatSperater = React.memo(() => (
    <Wrapper
      flexDirectionRow
      marginVerticalBase
      marginHorizontalLarge
      alignItemsCenter
      //backgroundColor={'pink'}
      justifyContentSpaceBetween>
      <Lines.Horizontal
        height={0.6}
        color={colors.appBorderColor1}
        width={responsiveWidth(33)}
      />
      <Text isSmall isRegularFont isTextColor2>
        Today
      </Text>
      <Lines.Horizontal
        height={0.6}
        color={colors.appBorderColor1}
        width={responsiveWidth(33)}
      />
    </Wrapper>
  ));

  const chatData = useMemo(
    () => [
      {
        sender: 'other', // Assuming the first message is from the other person
        message:
          "Hi Sabir, how are you? I saw on the app that we've crossed paths several times this week. 😊",
        timestamp: '2:55 PM',
      },
      {
        sender: 'user',
        message:
          'Haha truly! Nice to meet you \nMiracle! What about a cup of coffee today evening? 🤔',
        timestamp: '3:02 PM',
      },
      {
        sender: 'other',
        message: "Sure, let's do it! 😊",
        timestamp: '3:10 PM',
      },
      {
        sender: 'user',
        message:
          'Great! I will write later the exact time and place. See you soon!',
        timestamp: '3:12 PM',
      },
    ],
    [],
  );

  return {chatOptions, ChatSperater, chatData};
};
