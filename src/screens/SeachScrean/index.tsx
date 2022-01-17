import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList,  Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';

import { CustomTextInput } from '../../components/CustomTextInput';
import { Container } from '../../components/Safe';
import { TitleText } from './styles';
import { useTypedSelector } from '../../store/store';
import { clearChatGetAction, seachAction, sendIdAction } from '../../store/chat';
import { styles } from './styles';
import { strings } from '../../../string';

const SeachScrean = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [Sech, setSech] = useState("");

  const seach = ()=> {
    dispatch(seachAction.request({userName:Sech}));
  }

  useEffect(()=>{
    dispatch(seachAction.request({userName:""}));  
    return ()=> {
      dispatch(clearChatGetAction.request({}))
    }
  },[]);

  const Users = useTypedSelector(s=>s.chat.userSearchList);

  const GoToChat =(id:string)=>{
      dispatch(sendIdAction.request({user:id}));
  }

  const HOH = useTypedSelector(s=>s.chat.chatGet);

  useEffect(()=>{
   HOH && navigation.reset({routes: [{name: 'chatList'},{name: 'chat', params: HOH}],});
    }, [HOH]); 

  return (
    <Container containerStyle={styles.container}>
        <View style={styles.iputBlock}>
          <View style={styles.input}>
            <CustomTextInput
              value={Sech}
              placeholder={strings.screens.searchScreen.placeholder}
              onChangeText={setSech}
              textInputStyle={styles.input1}
            />
          </View>

          <View style={styles.searchButtonView}>
            <TouchableOpacity style={styles.searchButton} onPress={seach} ><Text style={styles.searchButtonText}>{strings.screens.searchScreen.searchButton}</Text></TouchableOpacity>
          </View>
        </View>

        <FlatList data={Users} style={styles.flat} renderItem={( {item }) => (
           <TouchableOpacity style={styles.list} onPress={() => GoToChat(item._id)} >
              <View style={styles.two}>
                <Image source={{uri:item.image}} style={styles.img}/>

                <View style={styles.text}>
                  <TitleText>{ item.userName}</TitleText>
                </View>  
              </View>
            </TouchableOpacity>
        )} />
      </Container>
  );
};
export default SeachScrean;
