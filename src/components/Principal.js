import { CommonActions, useNavigation } from "@react-navigation/native";
import react,{useState, useEffect} from "react";
import { View,Animated ,KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

export default function Principal(){
 
    const navigation = useNavigation()
    const exit = () => {
      
        navigation.reset({
            index: 0,
            routes:[{name: "TelaLogin"}]
      })
    }
   


    return(
        <View style={styles.background} >
            <Text style={styles.fontText}> Seja bem vindo!</Text>

                <TouchableOpacity style={styles.btnSubmit} onPress={exit}>
                <Text style={styles.submitText}>Voltar</Text>
                </TouchableOpacity>

        </View>
     
    )
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#191919'
    
    },
    fontText:{
        color:'#FFFF',
        fontSize:20,
        fontWeight:'100',
        textAlign: 'center'


    },
    btnSubmit:{ 
        backgroundColor: '#35AAFF',
        width: '20%',
        height:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 7,
        padding:10,
        marginTop: 100,
       

    },
})