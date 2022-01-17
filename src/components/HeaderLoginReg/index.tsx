import { useRoute } from '@react-navigation/core';
import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

import { strings } from '../../../string';


const HeaderLoginReg: React.FC<{
}> = ({}) => {
  const Route = useRoute();
  // @ts-ignore
  return (
    <View style={styles.header}>
      <View style={styles.info}>
        <Text style={styles.logo}>{strings.header.loginReg}</Text>
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
  logo:{
    fontSize:20,
    textAlign:'center',
  },
});

export default HeaderLoginReg;