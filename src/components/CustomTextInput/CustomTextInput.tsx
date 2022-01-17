import React, {FC, useCallback, useEffect, useState} from 'react';
import {
  I18nManager,
  KeyboardTypeOptions,
  StyleProp,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import styled from 'styled-components/native';
import {FLEX, FONT} from '../../utils/css';
type TCustomTextInputProps = {
  label?: string;
  isValid?: boolean;
  errorText?: string;
  textInputStyle?: TextInputProps['style'];
  containerInputStyle?: StyleProp<ViewStyle>;
  onChangeValue?: (v: string, slug: 'email' | 'password') => void;
  type?: KeyboardTypeOptions;
} & Pick<
  TextInputProps,
  | 'placeholder'
  | 'value'
  | 'onChangeText'
  | 'secureTextEntry'
  | 'onFocus'
  | 'onBlur'
>;

const CustomTextInput: FC<TCustomTextInputProps> = ({
  value,
  placeholder,
  textInputStyle,
  containerInputStyle = {width: '100%'},
  errorText,
  isValid = true,
  secureTextEntry,
  type = 'default',
  ...rest
}) => {
  return (
    <Container style={containerInputStyle}>
      <TextInput
        style={[
          {
            borderColor: isValid ? '#F2F4F8' : '#dc3545',
            textAlign: I18nManager.isRTL ? 'right' : 'left',
          },
          textInputStyle,
        ]}
        placeholder={placeholder}
        placeholderTextColor={'#C4CDDA'}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={type}
        {...rest}
      />
      {/* <ErrorText color={'#E40000'}>{!isValid ? errorText : ''}</ErrorText> */}
    </Container>
  );
};

const Container = styled.View`
  ${FLEX({
    direction: 'column',
    align: 'flex-start',
    justify: 'flex-start',
  })}/* width: 100%; */
`;
const TextInput = styled.TextInput`
  height: 50px;
  width: 100%;
  background-color: #fff;
  border-radius: 3px;
  padding: 9px 12px 9px 12px;
  border-width: 1.5px;
  font-weight: normal;
  font-family: 'IBMPlexSans-Italic';
  border-color: #c4cdda;
  ${FONT('Medium', 15, '#0B0C0E')}
`;
/*const Label = styled.Text`
${FONT('Bold', 13, '#C4CDDA')}
padding-left: 13px;
`
const ImageContainer = styled.TouchableOpacity`
position: absolute;
z-index: 1;
right: 28px;
top: 18px;
`
const Image = styled.Image`

`*/
const ErrorText = styled.Text<{
  color: string;
}>`
  //{({ color }) => FONT('Medium', 15, color)}
  padding-left: 13px;
  min-height: 20px;
`;

export default CustomTextInput;
