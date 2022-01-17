import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { DatePickerAndroid, FlatList, StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { CustomButton } from '../../components/Button';
import { CustomTextInput } from '../../components/CustomTextInput';
import Field from '../../components/Field';
import LinkText from '../../components/LinkText';
import Row from '../../components/RowView/Row';
import { Container } from '../../components/Safe';
import { signinAction } from '../../store/auth';
import { MainText, MessText, styles, TitleText } from './styles';
import { withTheme } from 'styled-components/native';
import  MyMass  from './Mass/MyMass';
import HeaderChat from '../../components/HeaderChat/index';
import { chatAction, sendAction } from '../../store/chat';
import { useTypedSelector } from '../../store/store';
import { values } from 'lodash';
import { color } from 'react-native-reanimated';
import { WSContext } from '../../contexts';




const Chat = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [Mass, setMass] = useState("");

  const Route = useRoute();
  // @ts-ignore
  const {id} = Route.params;

  const WS = useContext(WSContext);
  
  const [send, setSend] = useState(false);

  useEffect(()=>{dispatch(chatAction.request({id: id}))},[]);
  
  const massages = useTypedSelector(s=>s.chat.chatMasseges)[id]

  useEffect(() => {
    WS.actions.openChat(id)
    return () => {
      WS.actions.closeChat(id)
    }
  }, [WS]);

  const Send = () =>{
    dispatch(sendAction.request({chat:id, message:Mass}));
    setMass("");
    setSend(!send)
  }
  return (
  <Container containerStyle={styles.fon} bottomPadding={false}>
    {/* <ImageBackground source={require("../../assets/image/BGChat.png")} resizeMode="cover" style={styles.fon}> */}
        <FlatList data={massages} inverted style={styles.flat} renderItem={( {item, index }) => {
              const is = item.user==(massages[index+1] || {user:""}).user;
                return <MyMass img={item.img} userId={item.user} message={item.message} time={item.time} is={is} readed={item.readed}></MyMass>
        }} />
        
        {/* </ImageBackground> */}
        <View style={styles.iputBlock}>
          <View style={styles.input}>
            <CustomTextInput
              label="mainInput"
              value={Mass}
              placeholder="Напишите сообщение"
              onChangeText={setMass}
              textInputStyle={styles.input1}
            />
          </View>
          <View style={styles.sendButtonView}>
            <TouchableOpacity style={styles.sendButton} onPress={Send} ><Text style={styles.sendButtonText}>Send</Text></TouchableOpacity>
          </View>
        </View>
    </Container>
  );
};
export default Chat;
