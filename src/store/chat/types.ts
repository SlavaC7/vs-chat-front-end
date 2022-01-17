export type TInitialState = {
  chatList:chatListResponse;
  chatMasseges:{[id:string]:chatMassegesResponse};
  userSearchList:seachUserResponse;
  chatGet:getIdChatResponse | null;
  relatedUsers:getRelatedUsersResponse;
};

export type chatListResponse = chatResponse[];
export type chatMassegesResponse = Message[];
export type chatMassegesRequest = {
  id: string;
  skip?:string;
};
export type seachUserResponse = {
  userName: string;
  image: string;
  _id:string;
}[];
export type seachUserRequest = {
  userName: string;
};
export type sendRequest = {
  chat:string;
  message:string;
};
export type sendOneSignalRequest = {
  oneSignal:string;
};
export type sendIdRequest = {
  user:string;
};
export type getIdChatResponse = {
  _id:string;
  title:string;
  image:string;
};

export type getMessageRequest = {
  message:string;
};
export type Message = {
    id: string;
    time: number;
    message: string;
    user: string;
    img: string;
    readed?: boolean|undefined;
    chat:string;
};
export type lastMessageResponse = {
  id:string;
  [key: string]: any
};

export type getUserResponse  = {
  login: string;
  _id:string;
  userName:string;
  image: string;
  online:boolean;
  color:string;
};

export type chatResponse = {
  id: string;
  title: string;
  image: string;
  users: {
    user:string
    roleName:string
    roleType:string
  }[]
  lastMessage: {
      _id: string;
      time: number;
      message: string;
      user: string;
      readed: boolean;
  }|null;
  unreaded: number;
  isGroup:boolean;
  opened:string[];
  typping:string[];
  muted:boolean;
  anchored:boolean;
};

export type sendIdChatModalRequest = {
  chat:string;
};

export type getRelatedUsersResponse  = getUserResponse[];


export type chatMassegesResp = {data:chatMassegesResponse, id:string};
