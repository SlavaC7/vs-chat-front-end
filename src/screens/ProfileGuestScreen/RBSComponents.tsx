import React from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import { PBSCompStyle } from './styles';

const RBSComponents:React.FC<{
  onPressUpploadPhotoInGalary:()=>void;
  onPressUpploadPhotoInCamera:()=>void;
  onPressCancel:()=>void;
  textPhotoInGalary:string;
  textPhotoInCamera:string;
  textCancel:string;
}> = ({
  onPressUpploadPhotoInGalary,
  onPressUpploadPhotoInCamera,
  onPressCancel,
  textPhotoInGalary,
  textPhotoInCamera,
  textCancel
}) => {
  return (
    <View style={PBSCompStyle.RBSView}>
      <TouchableOpacity style={PBSCompStyle.RSBComponent} onPress={onPressUpploadPhotoInGalary}>
          <Text style={PBSCompStyle.RSBComponentText}>{textPhotoInGalary}</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={PBSCompStyle.RSBComponent} onPress={onPressUpploadPhotoInCamera}>
          <Text style={PBSCompStyle.RSBComponentText}>{textPhotoInCamera}</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={PBSCompStyle.RSBComponent} onPress={onPressCancel}>
          <Text style={PBSCompStyle.RSBComponentText}>{textCancel}</Text>
      </TouchableOpacity> 
    </View>
  );
};
export default RBSComponents;