import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

import { strings } from '../../../string';
import { theme } from '../../../theme';

const HeaderProfileEmail: React.FC<{
}> = ({}) => {
  return (
    <View style={styles.header}>
      <View style={styles.info}>
        <Text style={styles.logo}>{strings.header.email}</Text>
      </View> 

    </View>
  );
};

const styles = StyleSheet.create({
  header:{
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:"center",
  },
  info:{
    width:'90%',
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
    color:theme.colors.default.textWhite
  },
  version:{
    fontSize:13,
  }
});

export default HeaderProfileEmail;