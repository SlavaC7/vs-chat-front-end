import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { Text, View} from 'react-native';
import { theme } from "../../../theme"

const ProfileOtherItem: React.FC<{
    titleText:string;
    textI:string | undefined;
}> = React.memo(({
    titleText,
    textI,
}) => {
  return (
    <View style={styles.bgcolor}>
      <Text style={styles.titleText}>{titleText}</Text>
      <View style={styles.NewComp}>
              <View >
                <Text style={styles.CompText}>{textI}</Text>
              </View>
      </View>
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
        height:30,
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
      },
});

export default ProfileOtherItem;