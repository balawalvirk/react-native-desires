import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import {colors, responsiveHeight, responsiveWidth} from '../../services';
import {scale} from 'react-native-size-matters';
import {Wrapper} from '..';

export function KeyboardAvoiding({children, style, animation}) {
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always">
      {children}
    </KeyboardAwareScrollView>
  );
}

export function WithKeyboardAvoidingView({children, footer, containerStyle}) {
  return (
    <KeyboardAvoidingView
      style={[{flex: 1}, containerStyle]}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
      {footer}
    </KeyboardAvoidingView>
  );
}

export const HorizontalScrollWithDots = ({Data, RenderItem}) => {
  const {width} = Dimensions.get('screen');
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const onScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setActiveIndex(currentIndex);
  };

  const scrollToIndex = index => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({x: index * width, animated: true});
    }
  };
  const styles = StyleSheet.create({
    container: {
      //flex: 1,
      //backgroundColor: '#fff',
    },
    itemContainer: {
      //width: width,
      justifyContent: 'center',
      alignItems: 'center',
    },
    paginationContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      //backgroundColor: 'red',
    },
    dot: {
      height: scale(8),
      width: scale(8),
      borderRadius: responsiveWidth(20),
      marginHorizontal: responsiveWidth(1),
    },
    activeDot: {
      //width: responsiveWidth(6),
      backgroundColor: colors.appPrimaryColor,
    },
    inactiveDot: {
      backgroundColor: colors.appBorderColor1,
    },
  });

  return (
    <View>
      <View style={styles.container}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={16}>
          {Data.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <RenderItem item={item} index={index} />
            </View>
          ))}
        </ScrollView>
      </View>
      <Wrapper paddingVerticalBase flex={1}>
        <View style={styles.paginationContainer}>
          {Data.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                activeIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
      </Wrapper>
    </View>
  );
};
