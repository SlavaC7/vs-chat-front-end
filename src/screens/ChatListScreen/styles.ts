import { StyleSheet } from "react-native"
import styled from "styled-components/native"
import { theme } from "../../../theme"
import { FONT } from "../../utils/css"

export const MainText = styled.Text`
${FONT("SemiBold", 24, '#061939')}
width: 100%;
`
export const TitleText = styled.Text`
${FONT("Bold", 20,"#fff")}
`
export const MessText = styled.Text`
${FONT("Light", 17, "#fff")}
`

export const styles = StyleSheet.create({
        container:{
            backgroundColor:theme.colors.default.background,
        },
        flat: {
            width: "100%"
        },
        list: {
            borderWidth: 1,
            borderColor: theme.colors.default.borderBkackChatList,
            flexDirection: 'row',
            justifyContent: "space-between",
            height: 70,
            opacity:1,
        },
        two: {
            flexDirection: 'row',
            alignItems:"center",
        },
        text: {
            color: '#fff',
            flexDirection: 'column',
            marginLeft: 10,
            maxWidth: 200,
        },
        textLastMess:{
            color:theme.colors.default.textLastMass,
        },
        textUnReadedMess:{
            color:theme.colors.default.textLastMass,
        },
        divCircle: {
            justifyContent: "center",
            alignItems: 'center',
            height: '100%',
            width: 50,
        },
        divCircleR: {
            borderRightColor:'red',
            borderRightWidth:3,
            justifyContent: "center",
            alignItems: 'center',
            height: '100%',
            width: 50,
        },
        cyrcle: {
            height: '100%',
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
        },
        imageBlock:{
            width:60,
            height:70,
            justifyContent:'center',
            alignItems:"center",
        },
        img: {
            width: 55,
            height: 55,
            borderRadius: 90,
        },
        muteBlock:{
            height:"100%",
        },
        muteIcon:{
            width:20,
            height:20,
            color: theme.colors.default.whiteComponent,
        },
  })

  export const stylesModal = StyleSheet.create({
    main:{
      backgroundColor: theme.colors.default.background,
      padding:10,
      borderRadius:10,
  },
  header:{
    width:"100%",
    flexDirection:'row',
    alignItems:"center"
  },
  close:{
    color:"#000",
    height:40,
    width:40,
  },
  
    modalItem:{
      backgroundColor: theme.colors.default.lightAItems,
      width:"100%",
      padding:10,
      marginBottom:10,
    },
    modalItemText:{
        color:theme.colors.default.textWhite,
    }
  })