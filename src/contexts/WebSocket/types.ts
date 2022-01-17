import React from "react";
import { Action } from "redux";

export type WSContextActions = {
  connect:()=>void;
  openChat:(id:string)=>void;
  closeChat:(id:string)=>void;
}

export type WSContextType = React.Context<{
  actions:WSContextActions;
  websocket:WebSocket|null;
}>
export type event = 
"NewMessage"
|"UpdateMessage"
|"NewUser"
|"UpdateUser"
|"NewChat"
|"UpdateChat"
|"Logout"
|"ChatOpen"