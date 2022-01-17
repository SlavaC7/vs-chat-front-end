import { StyleSheet } from "react-native"
import styled from "styled-components/native"
import { theme } from "../../../theme"
import { FONT } from "../../utils/css"

export const MainText = styled.Text`
${FONT("SemiBold", 24, '#061939')}
width: 100%;
`
export const TitleText = styled.Text`
${FONT("Bold", 20,"#000")}
`
export const MessText = styled.Text`
${FONT("Light", 17, "#000")}
`

export const styles = StyleSheet.create({
    fon:{
        flex:1,
        backgroundColor:theme.colors.default.background,
      },
      time:{
        color:theme.colors.default.chatList.chatTime,
      },
      chatBlock:{
        height:"100%",
        display:'flex',
        alignItems:'flex-end',
        justifyContent:"flex-end"
      },
      iputBlock:{
        width:"100%",
        justifyContent:"space-between",
        alignItems:'center',
        display: "flex",
        flexDirection:"row",
        backgroundColor:theme.colors.default.background,
      },
      input:{
        width:"80%",
        color:theme.colors.default.textWhite,
      },
      input1:{
        width:'100%',
        borderWidth:0,
        backgroundColor:theme.colors.default.background,
        color:'white'
      },
      sendButton:{
        color: theme.colors.default.textWhite,
        width:"100%",
        padding:10,
      },
      sendButtonText:{
        color: theme.colors.default.textWhite,
      },
      sendButtonView:{
        width:"20%",
      },
      flat:{
          width:"100%",
          flex: 1,
      },
  })