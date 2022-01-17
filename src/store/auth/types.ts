export type TInitialState = {
  token: string | null;
  id: string | null;
  verification:"email"|"phone"|null;
};

export type SigninActionPayload = {
  login: string;
  password: string;
};

export type SigninActionResponse = {
  access_token: string;
  id:string;
};

export type RegisterType={ 
  login:string;
  password:string;
  userName:string;
};

export type RegisterActionResponse = {
  access_token: string;
  id:string;
  verification:"email"|"phone"|null;
};