import React from 'react';
import {StyleSheet} from 'react-native';
import { Text, View, Image } from 'react-native';
import moment from 'moment';
import { useTypedSelector } from '../../../store/store';
import { ReactReduxContext } from 'react-redux';
import { theme } from '../../../../theme';

const MyMass: React.FC<{
    img:string;
    message:string;
    userId:string;
    time:number;
    is:boolean;
    readed:boolean | undefined;
}> = React.memo(({
    img,
    message,
    userId,
    time,
    is,
    readed,
}) => {
  const searchUser = (useTypedSelector(s=>s.chat.relatedUsers).find((u)=>u._id==userId));

  const profile = useTypedSelector(s => s.profile.myProfile);

  const userName =  (searchUser || {userName:'You'})?.userName;

  console.log(userName);

  const user = useTypedSelector(s=>s.auth.id);

  const whoUser = user===userId;

  const whatReaded = readed == true;

  const color = (searchUser || profile)
    
  return (
    <View style={whoUser?styles.MyMass:styles.OtherMass}>
      { is ||
      (<View>
          <Text style={whoUser?[styles.textM, {color:color?.color ?? "#00BFFF"}]:[styles.textO, {color:searchUser?.color}]}>{userName}</Text>
        </View>)
      }
    <View style={whoUser?whatReaded?[styles.MyMassText, {borderRightColor:color?.color ?? "#00BFFF"}]:[styles.MyMassText, {borderRightColor:'gray'}]:[styles.OtherMassText, {borderLeftColor:searchUser?.color}]} >
      <Text style={styles.messText}>{message}</Text>
      <Text style={whoUser?styles.timeM:styles.timeO}>{moment(time).format('H:mm')}</Text>
    </View>
  </View>
  );
});

const styles = StyleSheet.create({
  messText:{
    color: theme.colors.default.chatList.messText,
  },
  textM:{
    color:'#00BFFF'
  },
  textO:{
    color:'red'
  },
  timeM:{
    textAlign:"right",
    width:"100%",
    color:'#6c737c',
    justifyContent:'flex-start',
    fontSize:10,
  },
  timeO:{
    width:"100%",
    color:'#6c737c',
    justifyContent:'flex-end',
    fontSize:10,
  },
      img:{
        margin:5,
        width:35,
        height:35,
        borderRadius:90,
      },

      MyMass:{
        marginLeft:10,
        flexDirection:"column",
        alignItems:'flex-end',
        
      },
      MyMassText:{
        backgroundColor:theme.colors.default.massageBack,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        flexDirection:'column',
        padding:10,
        borderRightWidth:3,
        borderRightColor:'#00BFFF',
        maxWidth:"70%",
        margin:5,
        textAlign:'right',
        alignItems:'flex-end'
      },
      OtherMass:{
        marginLeft:10,
        flexDirection:"column",
        alignItems:'flex-start',
        },
      OtherMassText:{
        backgroundColor:theme.colors.default.massageBack,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        flexDirection:'column',
        padding:10,
        borderLeftWidth:3,
        borderLeftColor:'red',
        maxWidth:"70%",
        margin:5,
      },
});

export default MyMass;