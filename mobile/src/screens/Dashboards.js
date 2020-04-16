import React,{useState,useEffect} from 'react';
import {View,
     KeyboardAvoidingView,
     Image,
     TextInput,
     Text,
    TouchableOpacity,
    Animated} from 'react-native';

import  styles  from './styles';

export default function Dashboards() {

    
  return (
   
    
    <KeyboardAvoidingView style={styles.background}>

        <View style={styles.img}>
            <Image source={require("../assets/logo.png")}
            />            
        </View>
        
        <View style={styles.container}>
            <TextInput style={styles.input}
            placeholder="Email"
            autoCorrect={false}
            onChangeText={()=>{}}
            />

            <TextInput style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            onChangeText={()=>{}}
            />

            <TouchableOpacity style={styles.button}>
                
                <Text>Acessar</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonCriar}>
                
                <Text style={styles.textButton}>Criar Conta Gratuita</Text>

            </TouchableOpacity>

        </View>


    </KeyboardAvoidingView>
  );
}
