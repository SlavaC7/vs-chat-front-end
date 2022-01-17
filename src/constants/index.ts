const debug = true;
export const protocolHTTP: string = debug?'http://':'https://';
export const protocolWSS: string = debug?'ws://':'wss://';
export const host: string =  debug?'93.79.41.156':'vschat-online.herokuapp.com';

export const default_api = {
  api: `${protocolHTTP}${host}${debug?':3000':''}`,
  wss: `${protocolWSS}${host}${debug?':8080':''}`,
};
