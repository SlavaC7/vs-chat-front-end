import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const ModalBody: React.FC<{
}> = ({ children }) => {
  return (
    <View style={styles.Container}>
      {children}
    </View>

  );
};

const styles = StyleSheet.create({
  Container: {
    alignItems: 'flex-start',
    width: '100%',
    flexDirection: 'column',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10
  }
});

export default ModalBody;