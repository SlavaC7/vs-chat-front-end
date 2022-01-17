import React, {FC} from 'react';
import {Platform} from 'react-native';
import {StyleSheet, Text, View, TextInput, ColorValue} from 'react-native';
import styled from 'styled-components/native';
import {FONT} from '../../utils/css';
import {CustomTextInput} from '../CustomTextInput';

const Field: React.FC<{
  text: String;
  rightElement?: Element;
  leftElement?: Element;
  bottomElement?: Element;
  isRequired?: boolean;
  textColor?: ColorValue;
  invalideText?: string | null;
  zIndex?: number;
}> = ({
  text,
  rightElement = null,
  leftElement = null,
  children,
  isRequired = false,
  textColor = '#000',
  invalideText = null,
  bottomElement = null,
  zIndex = null,
}) => {
  const body = (
    <View style={styles.Container}>
      <View style={styles.Container2}>
        {isRequired && <Text style={styles.reqText}>*</Text>}
        {leftElement}
        <Label style={styles.first}>{text}</Label>
        {rightElement}
      </View>
      {children}
      {invalideText && <Invalide>{invalideText}</Invalide>}
      {bottomElement}
    </View>
  );
  if (Platform.OS === 'ios' && zIndex != null)
    return <View style={{zIndex: zIndex, width: '100%'}}>{body}</View>;
  return body;
};

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  Container2: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  first: {
    flex: 1,
    textAlign:'center',
    fontSize:15,
  },
  reqText: {
    color: '#ff4d4f',
    marginRight: 4,
  },
});

export default Field;

const Label = styled.Text`
  ${FONT('Medium', 12, '#061939')}
`;
const Invalide = styled.Text`
  ${FONT('Bold', 12, '#ff4d4f')}
  width: 100%;
`;
