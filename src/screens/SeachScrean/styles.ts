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
    iputBlock:{
      width:"100%",
      justifyContent:"space-between",
      alignItems:'center',
      display: "flex",
      flexDirection:"row",
      backgroundColor:theme.colors.default.background,
      marginBottom:20,
      borderBottomWidth:1,
      borderBottomColor:'gray',
    },
    input:{
      width:"80%",
  
      
    },
    input1:{
      width:'100%',
      backgroundColor:theme.colors.default.background,
      borderWidth:0,
      color:theme.colors.default.textWhite,
    },
    searchButtonView:{
      width:"20%",
    },
    searchButton:{
      backgroundColor:theme.colors.default.background,
      width:"100%",
      padding:10,
    },
    searchButtonText:{
      color:theme.colors.default.textWhite,
    },
    flat:{
        width:"100%"
    },
    list:{
      borderBottom:5,
      borderBottomColor:'gray',
      flexDirection:'row',
      margin:5,
      justifyContent:"space-between",
      height:70,
    },
    two:{
      flexDirection:'row',
    },
    text:{
      flexDirection:'column',
      marginLeft:15,
    },
    divCircle:{
      justifyContent:"center",
      height:'100%',
    },
    img:{
      width:60,
      height:60,
      borderRadius:90
    }
    });