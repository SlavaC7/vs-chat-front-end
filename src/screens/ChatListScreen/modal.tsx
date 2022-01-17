import { StyleSheet, TouchableOpacity, View, Text} from "react-native";
import Modal from "react-native-modal";
import React, { useEffect, useState } from 'react';
import { theme } from "../../../theme";
import {stylesModal, TitleText} from "./styles";
import Close from "./../../assets/icon/close.svg";
import { strings } from "../../../string";
import { styles } from "../ChatScreen/styles";


const ModalChatList: React.FC<{
    title:string;
    visible:boolean;
    id:string;
    mute:boolean;
    anchor:boolean;
    onPressButtonVisible:()=>void;
    onGoOutChat:(id:string)=>void;
    onMuteChat:(id:string)=>void;
    onAnchorChat:(id:string)=>void;
    onUnMuteChat:(id:string)=>void;
    onUnAnchorChat:(id:string)=>void;
}> = ({
    title,
    visible,
    id,
    mute,
    anchor,
    onPressButtonVisible,
    onGoOutChat,
    onMuteChat,
    onAnchorChat,
    onUnMuteChat,
    onUnAnchorChat,
}) => {

  return (
        <Modal isVisible={visible}  onBackdropPress={onPressButtonVisible} animationOut={"fadeOut"}>
            <View style={stylesModal.main}>
                <View style={stylesModal.header}>
                    <TouchableOpacity onPress={onPressButtonVisible}>
                        <Close style={stylesModal.close}/>
                    </TouchableOpacity>

                    <TitleText>{title}</TitleText>
                </View>
                <TouchableOpacity style={stylesModal.modalItem} onPress={()=>onGoOutChat(id)}>
                    <Text style={stylesModal.modalItemText} >{strings.screens.chatListScreen.modal.goOut}</Text>
                </TouchableOpacity>

                {mute &&
                    (<TouchableOpacity style={stylesModal.modalItem} onPress={()=>onUnMuteChat(id)}>
                        <Text style={stylesModal.modalItemText}>{strings.screens.chatListScreen.modal.unMute}</Text>
                    </TouchableOpacity>)
                }

                {!mute &&
                    
                    (<TouchableOpacity style={stylesModal.modalItem} onPress={()=>onMuteChat(id)}>
                        <Text style={stylesModal.modalItemText}>{strings.screens.chatListScreen.modal.mute}</Text>
                    </TouchableOpacity>)
                }

                {anchor &&
                    (<TouchableOpacity style={stylesModal.modalItem} onPress={()=>onUnAnchorChat(id)}>
                     <Text style={stylesModal.modalItemText}>{strings.screens.chatListScreen.modal.unAnchor}</Text>
                    </TouchableOpacity>)
                }

                {!anchor &&
                    
                    (<TouchableOpacity style={stylesModal.modalItem} onPress={()=>onAnchorChat(id)}>
                        <Text style={stylesModal.modalItemText}>{strings.screens.chatListScreen.modal.anchor}</Text>
                    </TouchableOpacity>)
                }

                
            </View>
        </Modal>
  );
};
export default ModalChatList;