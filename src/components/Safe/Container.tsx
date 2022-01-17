import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ContentContainer, PressebleContainer, SafeView} from './styled';
import {TContainerProps} from './types';
import {View} from 'react-native';

const Container: FC<TContainerProps> = ({
  children,
  scrollable,
  backdropPress,
  containerStyle,
  scrollviewStyle,
  contentContainerStyle,
  containerScrollviewStyle,
  topLine = true,
  bottomPadding = true,
}) => {
  return (
    <View
      style={[
        topLine
          ? {
              // backgroundColor: '#FFF',
              // borderTopColor: '#E5E8EE',
              // borderTopWidth: 2.5,
            }
          : {
              backgroundColor: '#FFF',
            },
        containerStyle,
      ]}>
      {scrollable ? (
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={scrollviewStyle}
          contentContainerStyle={containerScrollviewStyle}
          bounces={false}>
          {children}
          {bottomPadding && <View style={{height: 35}} />}
        </KeyboardAwareScrollView>
      ) : backdropPress ? (
        <PressebleContainer
          activeOpacity={1}
          onPress={backdropPress}
          style={contentContainerStyle}>
          {children}
          {bottomPadding && <View style={{height: 35}} />}
        </PressebleContainer>
      ) : (
        <ContentContainer style={contentContainerStyle}>
          {children}
          {bottomPadding && <View style={{height: 35}} />}
        </ContentContainer>
      )}
    </View>
  );
};

Container.propTypes = {
  scrollable: PropTypes.bool,
  backdropPress: PropTypes.func,
  containerStyle: PropTypes.object,
  scrollviewStyle: PropTypes.object,
  children: PropTypes.node.isRequired,
  contentContainerStyle: PropTypes.object,
  containerScrollviewStyle: PropTypes.object,
};

Container.defaultProps = {
  scrollable: false,
  backdropPress: undefined,
  containerStyle: {},
  scrollviewStyle: {
    width: '100%',
    minHeight: '100%',
  },
  contentContainerStyle: {},
  containerScrollviewStyle: {
    width: '100%',
    minHeight: '100%',
    justifyContent: 'flex-start',
  },
};

export default Container;
