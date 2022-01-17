import { StyleSheet } from "react-native"
import styled from "styled-components/native"
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
import { theme } from "../../../theme"

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

  button:{
    height:40,
    width:'100%',
    backgroundColor:"black",
    flexDirection:'column',
    justifyContent:'center',
    marginBottom:10,
    borderRadius:10,
    borderWidth:1,
  },
  buttonText:{
    fontSize:15,
    textAlign:"center"
  },

  changeLine:{
    padding:15,
    width:'100%',
    backgroundColor:'#0c1b30',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:"row"
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

 
  

textChangeColorLine:{
  color:"white",
  width:"100%",
  padding:10,
},
})

export const PBSCompStyle = StyleSheet.create({
  RBSView:{
    padding:10,
  },
  RSBComponent:{
    height:40,
    width:'100%',
    backgroundColor:"black",
    flexDirection:'column',
    justifyContent:'center',
    marginBottom:10,
    borderRadius:10,
    borderWidth:1,
  },
  RSBComponentText:{
    fontSize:15,
    textAlign:"center"
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
    color:'#fff',
  },
  statusOnline:{
    fontSize:15,
  },
})
