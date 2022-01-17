import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../../../theme';
import { useTypedSelector } from '../../store/store';


const HeaderChat: React.FC<{

}> = ({

}) => {
  const navigation = useNavigation();
  
  const Route = useRoute();
  // @ts-ignore
  const {_id, title, image} = Route.params;

  const chat = useTypedSelector(s=>s.chat.chatList).find(hoh=>(hoh.id==_id));

  const maId = useTypedSelector(s=>s.auth.id)

  const user = chat?.users.find(kok=>(kok.user!=maId));

  const onGoToOterProfile = () =>{
    navigation.navigate("ProfileOtherScreens", {user});
  }
  return (
    <View style={styles.header}>
      <View style={styles.info}>
        <TouchableOpacity onPress={onGoToOterProfile}>
          <Image source={{uri:image}} style={styles.img} />
        </TouchableOpacity>

        <Text style={styles.name}>{title}</Text>
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  header:{
    width:'100%',
    display:'flex',
    justifyContent:'space-between',
    alignItems:"center",
  },
  info:{
    width:'100%',
    display:'flex',
    justifyContent:'flex-start',
    alignItems:"center",
    flexDirection:'row',
  },
  img:{
    borderRadius:90,
    width:40,
    height:40,
    margin:5,
  },
  name:{
    fontSize:20,
    textAlign:'center',
    color: theme.colors.default.textWhite,
    marginLeft:10,
  },
});

export default HeaderChat;