import { StyleSheet } from "react-native"
import styled from "styled-components/native"

import { FONT } from "../../utils/css"
import { theme } from "../../../theme"

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

  styleContainer:{
    backgroundColor:theme.colors.default.background,
    padding:0,
  },

  publicInfo:{
    width:'100%',
  },

  publicInfoV:{
    flexDirection:'column',
    padding:10,
    width:'100%'
  },

  changeLine:{
    padding:15,
    width:'100%',
    backgroundColor:theme.colors.default.secondaryBackground,
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:"row"
  },

  logOutButt:{
    textAlign:'center',
  },

  Picker:{
    width:200,
  },

  MyMass:{
    width:'50%',
    flexDirection:"column",
    alignItems:'flex-end',
  },

  MyMassText:{
    padding:10,
    borderRightWidth:3,
    borderRightColor:'#00BFFF',
  },

  logOutButton:{
    marginHorizontal:30,
  },

 
  
ButtonChangeColorLine:{
  width:"30%",
  backgroundColor:"#0d1b35",
  borderRadius:15,
  borderColor:"#4a5e83",
  borderWidth:1,
  marginTop:15,
  fontWeight:theme.fontWeight.bold,
},

textChangeColorLine:{
  color:"white",
  width:"100%",
  padding:10,
},

ButtonText:{
  textAlign: 'center', 
  fontSize:14,
  color: theme.colors.default.textWhite,
},
})

export const PBSCompStyle = StyleSheet.create({
  RBSView:{
    padding:10,
  },
  RSBComponent:{
    height:40,
    width:'100%',
    flexDirection:'column',
    justifyContent:'center',
    marginBottom:10,
    borderRadius:10,
    borderWidth:1,
    backgroundColor: theme.colors.default.buttonBackgrount,
  },
  RSBComponentText:{
    fontSize:15,
    textAlign:"center",
    color: theme.colors.default.textWhite,
  },

})

export const headerStyle = StyleSheet.create({
  fotoBlock:{
    width:'100%',
    height:300,
    backgroundColor:'#456'
  },
  image:{
    width:'100%',
    height:'100%',
    alignItems:'flex-start',
    justifyContent:'flex-end'
  },
  textImage:{
    padding:0,
    margin:10,
  },
  userNameText:{
    fontSize:30,
    color: theme.colors.default.textWhite,
  },
  statusOnline:{
    fontSize:15,
    color:theme.colors.default.textWhite,
  },
})

export const changeRBSStyle = StyleSheet.create({
  inputChangeRBS:{
    width:"100%",
    height: 40,
    borderWidth: 1,
    borderColor:"#4a5e83",
    backgroundColor:"#0d1b35",
    borderRadius:5,
    padding: 10,
    color:theme.colors.default.textWhite,
  },

  ButtonChangeRBS:{
    width:"100%",
    backgroundColor:theme.colors.default.secondaryBackground,
    borderRadius:15,
    borderColor:"#4a5e83",
    borderWidth:1,
    marginTop:10
  },

  textChangeRBS:{
    color:theme.colors.default.buttonBackgrount,
    width:"100%",
    padding:10,
  },
  ButtonText:{
    textAlign: 'center', 
    fontSize:14,
    color:theme.colors.default.textWhite
},
})