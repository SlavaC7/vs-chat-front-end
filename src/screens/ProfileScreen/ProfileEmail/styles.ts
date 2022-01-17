import { StyleSheet } from "react-native";
import { theme } from "../../../../theme"

export const styles = StyleSheet.create({
  containerStyle:{
    backgroundColor:theme.colors.default.background,
  },
  EmailCode:{

    },
    InputEmail:{
      width:"100%",
      margin:10,
      flexDirection:'row',
      justifyContent:"center",
      alignItems:'center',
      display: "flex",
      color:theme.colors.default.textWhite,
      },
      SendButtonView:{
        width:"30%",
      },
      sendButtonText:{
        textAlign:"center",
        color:theme.colors.default.textWhite,
      },
      SendButton:{
        backgroundColor:theme.colors.default.buttonBackgrount,
        color:"white",
        width:"100%",
        padding:10,
        borderWidth:1,
        borderColor:'gray',
        borderRadius:10,
      },
    input1:{
      width:'100%',
      backgroundColor:'transparent',
      borderWidth:0,
      color:theme.colors.default.textWhite,
    },
    root: {
        flex: 1, 
        padding: 10, 
        display:'none'
    },
    title: {
        textAlign: 'center', 
        fontSize: 20, 
        margin:10, 
        color:theme.colors.default.textWhite,
    },
    titleTimer: {
        textAlign: 'center', 
        fontSize: 16, 
        margin:5, 
        color:"gold"},
    codeFieldRoot: {
        marginTop: 20
    },
    cell: {
      width: 40,
      height: 40,
      lineHeight: 38,
      fontSize: 24,
      borderWidth: 2,
      borderRadius:10,
      borderColor: 'gray',
      margin:10,
      textAlign: 'center',
      color:theme.colors.default.textWhite,
    },
    focusCell: {
      borderColor: 'red',
    },
    verificationButtonText:{
      textAlign:'center',
    },
    verificationButton:{
      marginHorizontal:30,
    },
});