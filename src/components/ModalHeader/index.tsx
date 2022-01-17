import React from 'react';
import {StyleSheet, Touchable, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-svg';
import styled from 'styled-components/native';
import {FONT} from '../../utils/css';

const Header: React.FC<{
  onClose?: () => void | null;
}> = ({onClose, children}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.Container1}>{children}</View>
      {onClose !== undefined && onClose && (
        <View style={styles.Container2}>
          <TouchableOpacity onPress={onClose}>
            {/* <CloseSVG height={16} width={16} /> */}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    alignItems: 'flex-start',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#f5f6fa',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  Container1: {
    flex: 1,
    flexDirection: 'column',
  },
  Container2: {
    marginTop: 10,
    width: 16,
    height: '100%',
  },
});

export default Header;

const Label = styled.Text`
  ${FONT('Medium', 12, '#061939')}
`;
