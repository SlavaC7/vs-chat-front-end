import React from 'react';
import {StyleProp, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import {FONT} from '../../utils/css';

const LinkText: React.FC<{
  onClick?: () => void;
  style?: StyleProp<TextStyle>;
}> = ({children, onClick, style}) => {
  return (
    <TouchableOpacity onPress={onClick} activeOpacity={0.8}>
      <Link {...{style}}>{children}</Link>
    </TouchableOpacity>
  );
};

export default LinkText;

export const Link = styled.Text`
  ${FONT('Medium', 12, '#476EF0')}
`;
