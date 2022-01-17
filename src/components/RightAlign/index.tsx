import React, { FC } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import styled from 'styled-components/native';
import { FONT } from '../../utils/css';
import { CustomTextInput } from '../CustomTextInput';

const RightAlign: React.FC<{
}> = ({
  children,
}) => {
    return (
      <View style={styles.Container}>
        <View style={styles.Container2}>
          <View style={styles.first} />
          {children}
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    width: '100%',
  },
  Container2: {
    flexDirection: 'row',
  },
  first: {
    flex: 1,
  }
});

export default RightAlign;