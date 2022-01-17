import React from 'react';
import {StyleSheet, View} from 'react-native';
// import MenuSVG from './../../assets/logo_colored.svg';
export type THeaderStatus = 'Center' | 'Left';
const Header: React.FC<{
  position: THeaderStatus;
}> = ({position}) => {
  return (
    <View style={position == 'Center' ? styles.position1 : styles.position2}>
      {/* <MenuSVG width={position == 'Center' ? 150 : 130} height={60} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  position1: {
    height: 60,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  position2: {
    marginTop: 20,
    paddingBottom: 30,
  },
});

export default Header;
