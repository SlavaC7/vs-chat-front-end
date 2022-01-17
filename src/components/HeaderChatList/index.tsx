import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import Search from './../../assets/icon/search.svg';
import { strings } from '../../../string';
import { theme } from '../../../theme';

const HeaderChatList: React.FC<{
}> = ({}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  const GoSeach =()=>{
    navigation.navigate("seachScrean")
}
const GoMYPeof =()=>{
  navigation.navigate("MyProfileScrean")
}
  
  return (
    <View style={styles.header}>
      <View style={styles.info}>
         <Text style={styles.logo} onPress={GoMYPeof}>{strings.header.chatList.logo} <Text style={styles.version}>{strings.header.chatList.version}</Text></Text>
      </View> 
      <View>
       <TouchableOpacity onPress={GoSeach}>
        <Search style={styles.search} />
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header:{
    width:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:"space-around",
    alignItems:"center",
  },
  info:{
    width:"80%",
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
  logo:{
    fontSize:20,
    textAlign:'center',
    color:theme.colors.default.textWhite,
  },
  version:{
    fontSize:13,
  },
  search:{
    height:60,
    color:theme.colors.default.textWhite,
  }
});

export default HeaderChatList;