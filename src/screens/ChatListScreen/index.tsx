import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../store/store';
import { anchorChatAction, chatListAction, goOutChatAction, muteChatAction, unAnchorChatAction, unMuteChatAction } from '../../store/chat';
import Chat from '../ChatScreen';
import { Container } from '../../components/Safe';
import {  styles, TitleText } from './styles';
import ModalChatList from './modal';
import Mute from './../../assets/icon/mute.svg';
import { theme } from '../../../theme';

const ChatList = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [visibleModal, setVisibleModal] = useState(false);

  const [formModal, setFormModal] = useState({name:"", idUser:"", mute:false, anchor:false});

  const setModal = (title:string, id:string, mute:boolean, anchor:boolean)=>{
    setVisibleModal(true);

    setFormModal({name:title, idUser:id, mute, anchor});
  }

  const onCloseModal=()=>{
    setVisibleModal(false);
  }

  useEffect(() => { dispatch(chatListAction.request({})) }, []);
  const Chats = useTypedSelector(s => s.chat.chatList);

  const goToChat = (title: string, image: string, id: string) => {
    navigation.navigate("chat", { title, image, id })
  }
  
  const onGoOutChat = (id:string)=>{
    dispatch(goOutChatAction.request({chat:id}));

    onCloseModal();
  }

  const onMuteChat = (id:string)=>{
    dispatch(muteChatAction.request({chat:id}));

    onCloseModal();
  }

  const onUnMuteChat = (id:string)=>{
    dispatch(unMuteChatAction.request({chat:id}));
    
    onCloseModal();
  }

  const onAnchorChat = (id:string)=>{
    dispatch(anchorChatAction.request({chat:id}));
    
    onCloseModal();
  }  

  const onUnAnchorChat = (id:string)=>{
    dispatch(unAnchorChatAction.request({chat:id}));
    
    onCloseModal();
  }  

  const muteIcon = {}

  return (
    <Container containerStyle={styles.container}>
        <FlatList data={Chats} style={styles.flat} renderItem={({ item }) => (
            <TouchableOpacity style={item.muted?[styles.list, {opacity:0.6}]:styles.list} 
            onPress={() => goToChat(item.title, item.image, item.id)} 
            onLongPress={()=>setModal(item.title, item.id, item.muted, item.anchored)}>
                <View style={styles.two}>
                    <View style={styles.imageBlock}>
                        <Image source={{ uri: item.image }} style={styles.img} />
                    </View>

                    <View style={styles.text}>
                        <TitleText>{item.title}</TitleText>

                        <Text style={styles.textLastMess}>{item.lastMessage?.message}</Text>
                    </View>
                    {item.muted && (
                    //<View style={styles.muteBlock}>
                        <Mute style={styles.muteIcon} stroke={theme.colors.default.whiteComponent}/>
                    //</View>
                    )
                    }
                </View>

                
                <View style={item.unreaded==0?styles.divCircle:styles.divCircleR}>
                    <View style={styles.cyrcle}>
                        <Text style={styles.textUnReadedMess}>{item.unreaded}</Text>
                    </View>
                </View>
          
            </TouchableOpacity>
      )} />
        <ModalChatList 
            visible={visibleModal} 
            onPressButtonVisible={onCloseModal} 
            title={formModal.name} 
            id={formModal.idUser} 
            mute={formModal.mute}
            anchor={formModal.anchor}
            onGoOutChat={onGoOutChat}
            onMuteChat={onMuteChat}
            onUnMuteChat={onUnMuteChat}
            onAnchorChat={onAnchorChat}
            onUnAnchorChat={onUnAnchorChat}
        />
    </Container>
  );
};
export default ChatList;
