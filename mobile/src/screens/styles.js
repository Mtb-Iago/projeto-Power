import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    background:{
        flex: 1,
        alignItems:'center',
        backgroundColor:'#191919',
        justifyContent:'center',
     },
     img:{
        flex: 1,
        justifyContent:'center',
       
      },   
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        width:'90%'

    },  
   
      input:{
          backgroundColor:"#fff",
          width:'90%',
          marginBottom:15,
          color:'#222',
          fontSize:17,
          borderRadius:7,
          padding:10
      },
      button:{
          backgroundColor:'#35aaff',
          margin:8,
          alignItems:'center',
          justifyContent:'center',
          borderRadius:7,
          height:45,
          width:'90%'
      },
      buttonCriar:{
           marginTop:10
      },
      textButton:{
          color:'#fff'
      }


});