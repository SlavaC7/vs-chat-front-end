import React, {createContext, useState, useEffect, useContext} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {put} from 'redux-saga/effects';
import {ModalContext} from '..';
import {default_api} from '../../constants';
import {navigationRef} from '../../navigation/navigation_ref';
import { getMessageAction, lastMessageAction, NewChatAction, newMessageAction, NewUserAction, UpdateMessageAction, UpdateUserAction } from '../../store/chat/action';
import {useTypedSelector} from '../../store/store';
import {Log} from '../../utils/Log';
import {
  WSContextType,
  WSContextActions,
  event,
} from './types';
//@ts-ignore
const WSContext:WSContextType = createContext({actions:{},websocket:null});
export default WSContext;


export const WSContextProvider:React.FC<{}>=({children})=>{

  const dispatch = useDispatch();
  //let websocket = new WebSocket("wss://javascript.info");
  const [websocket, setWebSocket] = useState<null|WebSocket>(null);
  const actions:WSContextActions={
    connect:()=>{
      console.log(`${default_api.wss}/`)
      const ws = new WebSocket(`${default_api.wss}/`)
      console.log(ws)
      if(ws==null)
        setTimeout(actions.connect, 1000);
      else setWebSocket(ws)
    },
    openChat:(id)=>{
      _action.send("ChatOpen",id)
    },
    closeChat:(id)=>{
      _action.send("ChatClose",id)
    }
  } 
  
  const token = useTypedSelector(s=>s.auth.token);

  const _action = {
    onOpen:()=>{
      console.log(1)
      websocket?.send(token!!);
      //let timerId = setInterval(() => websocket?.send(""), 54000);
    },
    onMessage:(message:event)=>{
      const event = JSON.parse(message);
      console.log(event)
      if(event.event=='NewMessage'){
        dispatch(newMessageAction.success(event.data))
      }else if(event.event=='UpdateChat'){
        dispatch(lastMessageAction.success(event.data))
      }
      else if(event.event=='UpdateMessage'){
        dispatch(UpdateMessageAction.success(event.data))
      }else if(event.event=='NewUser'){
        dispatch(NewUserAction.success(event.data))
      }else if(event.event=='UpdateUser'){
        dispatch(UpdateUserAction.success(event.data))
      }else if(event.event=='NewChat'){
        dispatch(NewChatAction.success(event.data))
      }
    },
    onClose:()=>{
      console.log("closed")
    },
    onError:()=>{
      console.log("error")
      setTimeout(() => {
        actions.connect();
      }, 1000);
    },
    send:(event:string,data:any)=>{
      websocket?.readyState==WebSocket.OPEN && websocket?.send(JSON.stringify({event,data}))
    },
  };

  useEffect(() => {
    console.log(0)
    if (websocket){
      websocket.onopen=_action.onOpen;
      websocket.onmessage=(e)=>_action.onMessage(e.data);
      websocket.onclose=_action.onClose;
      websocket.onerror=_action.onError;

      // еще для обновления разных компонентов
      return ()=>{
        websocket.onopen=()=>{};
        websocket.onmessage=()=>{};
        websocket.onclose=()=>{};
        websocket.onerror=()=>{};
      }
    }
  }, [websocket])
  useEffect(actions.connect,[])

  return (
    <WSContext.Provider
      value={{
        actions,
        websocket,
      }}>
      {children}
    </WSContext.Provider>
  );
};
