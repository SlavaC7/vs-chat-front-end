import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { Text, View} from 'react-native';
import { theme } from "../../../theme"

const ProfileItem: React.FC<{
    titleText:string;
    textI:string | undefined;
    description:string;
    onPress:()=>void;
}> = React.memo(({
    titleText,
    textI,
    description,
    onPress,
}) => {
  return (
    <View style={styles.bgcolor}>
      <Text style={styles.titleText}>{titleText}</Text>

      <TouchableOpacity style={styles.NewComp} onPress={onPress}>
              <View >
                <Text style={styles.CompText}>{textI}</Text>
                <Text style={styles.CompDesc}>{description}</Text>
              </View>
      </TouchableOpacity>
    </View>
    
  );
});

const styles = StyleSheet.create({
  bgcolor:{
    backgroundColor: theme.colors.default.lightAItems,
    width:'100%',
    marginBottom:10,
    paddingLeft:5,
    paddingTop:5,
    borderLeftColor:"#34425f",
    borderLeftWidth:4,
  },
    NewComp:{
        height:40,
        width:'100%',
        flexDirection:'column',
        justifyContent:'center',
        marginBottom:10,
      },
      titleText:{
        fontSize:12,
        color:'gray',
      },
      CompDesc:{
        fontSize:12,
        color:'gray'
      },
      CompText:{
        fontSize:15,
        color: theme.colors.default.textWhite,
      },
});

export default ProfileItem;