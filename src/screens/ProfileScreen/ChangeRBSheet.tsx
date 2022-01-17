import React from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { theme } from '../../../theme';
import { changeRBSStyle } from './styles';

const ChangeRBSheet:React.FC<{
    refRBS:any;
    onChange:(text:string)=>void;
    onPressButtonSave:()=>void;
    onPressButtonClose:()=>void
    text:string;
    placeholderInput:string;
    textButtonSave:string;
    textButtonClose:string;
}> = ({
    refRBS,
    onChange,
    onPressButtonSave,
    onPressButtonClose,
    text,
    placeholderInput,
    textButtonSave,
    textButtonClose
}) => {
  return (
    <RBSheet
          //@ts-ignore
                  ref={refRBS}
                  closeOnDragDown={true}
                  closeOnPressMask={false}
                  customStyles={{
                    wrapper: {
                      backgroundColor: "transparent",
                      borderRadius:15
                    },
                    draggableIcon: {
                      backgroundColor: "#000"
                    },
                    container: {
                      backgroundColor: theme.colors.default.secondaryBackground,
                      borderRadius:15,
                    },
                  }}
                >
                <TextInput
                  multiline
                  style={changeRBSStyle.inputChangeRBS}
                  placeholder = {placeholderInput}
                  placeholderTextColor={theme.colors.default.textWhite}
                  onChangeText={onChange}
                  value={text}
                />
                  <View style={changeRBSStyle.ButtonChangeRBS}>
                    <TouchableOpacity style={changeRBSStyle.textChangeRBS} onPress={onPressButtonSave} >
                      <Text style={changeRBSStyle.ButtonText}>{textButtonSave}</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={changeRBSStyle.ButtonChangeRBS}>
                    <TouchableOpacity style={changeRBSStyle.textChangeRBS} onPress={onPressButtonClose} >
                      <Text style={changeRBSStyle.ButtonText}>{textButtonClose}</Text>
                      </TouchableOpacity>
                  </View>
          </RBSheet>
  );
};
export default ChangeRBSheet;