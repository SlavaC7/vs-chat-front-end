import React from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

const Row: React.FC<{
  style?: StyleProp<ViewStyle>
}> = ({ children, style }) => {
  return (
    <View style={[styles.Container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 8,
  },
});

export default Row;
