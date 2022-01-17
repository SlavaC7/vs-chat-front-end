import { useRoute } from '@react-navigation/core';
import React from 'react';
import {Image, StyleSheet, View, Text, ImageBackground} from 'react-native';
import { headerStyle } from './styles';

const HeaderProfile: React.FC<{
    image:any;
    constName:string;
    online:boolean;
}> = ({
    image,
    constName,
    online,
}) => {
  return (
    <View style={headerStyle.fotoBlock}>
        <ImageBackground source={{uri:image}} resizeMode="cover" style={headerStyle.image}>
          <View style={headerStyle.textImage}>
            <Text style={headerStyle.userNameText}>{constName}</Text>
            <Text style={headerStyle.statusOnline}>{online?"В сети":"Не в сети"}</Text>
          </View>
        </ImageBackground>
      </View>
  );
};
export default HeaderProfile;