export type TInitialState = {
  myProfile:getMyProfileResponse|null;
  code:string,
  result:string,
  otherProfile:getOtherProfileResponse|null;
};

export type getMyProfileResponse = {
  color: string;
  userName: string;
  about: string;
  image:string;
  email:string;
  phone:string;
  online:boolean;
};

export type sendAboutRequest = {
  about:string;
};

export type sendEmailRequest = {
  email:string | undefined;
};

export type sendPhoneRequest = {
  phone:string | undefined;
};

export type sendColorRequest = {
  color:string;
};

export type sendNameRequest = {
  userName:string;
};

export type getVerifyCodeResponse = {
  code:string;
};

export type getVerifyResultResponse = {
  result:string;
};

export type sendImageRequest = {
  image:string;
  name:string;
  mime:string;
};

export type sendIdRequest = {
  id:string;
};

export type getOtherProfileResponse = {
  color: string;
  userName: string;
  about: string;
  image:string;
  email:string;
  phone:string;
  online:boolean;
};