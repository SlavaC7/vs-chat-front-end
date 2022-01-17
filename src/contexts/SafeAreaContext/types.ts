export type SafeAreaContextType = React.Context<{
  actions: SafeAreaContextActions;
}>;

export interface SafeAreaState {
  _increment: number;
  websocket: WebSocket;
}

export type SafeAreaOrderMessage = {
  type: 'ORDER';
  action: 'STATUS_CHANGE';
  data: {
    _id: string;
  };
};

export type SafeAreaDiscountMessage = {
  type: 'STOCK';
  action: 'update_sales';
};

export type SafeAreaMessageData =
  | SafeAreaOrderMessage
  | SafeAreaDiscountMessage;

export interface SafeAreaOrderState {
  id: string;
}

export type SafeAreaContextActions = {
  DISABLE_TOP: () => void;
  ENABLE: () => void;
  DISABLE: () => void;
  DISABLE_BOTTOM: () => void;
};

export interface IUserData {
  name?: string;
  phone: string;
  created: string;
  updated: string;
  favourites: string[];
  bonuses: number;
  dateOfBirth?: Date;
}

export interface IUser {
  token: string;
  id_user: number;
  data: IUserData;
}

export type TUserContext = React.Context<{
  user: IUser | null;
  actions: TUserContextActions;
}>;

export type TUserContextActions = {
  UPDATE_USER: (user: IUser) => Promise<IUser>;
  CLEAR_USER: () => Promise<null>;
  GET_USER: () => Promise<IUser | null>;
  UPDATE_LOGOUT_LISTENER: (onLogout: () => void) => void;
};

export type TElementaryContextProvider = {
  (props: {children: React.ReactElement}): React.ReactElement;
};
