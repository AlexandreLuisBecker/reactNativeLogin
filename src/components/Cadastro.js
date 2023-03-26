import { CommonActions, useNavigation } from "@react-navigation/native";
import react,{useState, useEffect} from "react";
import { View,Animated ,KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'


export default function Cadastro(){
  
    function handlSignIn(){
        if(
        name === ''
        ||
        username ==='' 
        ||
        password === ''
        ||
        dateN === ''
        ||
        genero === ''
        ||
        city === ''
        ||
        uf === ''
        ){
         alert("Prencha os Campos!")
        }else{
            alert("Cadastro Concluído!")
       
            navigation.reset({
                index: 0,
                routes:[{name: "TelaLogin"}]
            
            })
  
         return
        }
    }
       const data = {
            setName,
            setUsername,
            setPassword,
            setDateN,
            setGenero,
            setCity,
            setUF
       }
   



    const navigation = useNavigation()
    const exit = () => {
      
        navigation.reset({
            index: 0,
            routes:[{name: "TelaLogin"}]
      })
    }

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [dateN, setDateN] = useState('')
    const [genero, setGenero] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUF] = useState('')
    return(
 
    <KeyboardAvoidingView style={styles.background}>
  <Text style={styles.textHead}>
    Informe seus dados cadastrais!
  </Text>

    <Animated.View
    style={
        styles.container}>
        <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Nome Completo"
        autoCorrect={false}
        />
          <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username} 
        placeholder="Nome de Usuário"
        autoCorrect={false}
        />
          <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Senha"
        autoCorrect={false}
        secureTextEntry={true}
        />
          <TextInput
        style={styles.input}
        onChangeText={setDateN}
        value={dateN}
        placeholder="Data de Nascimento"
        autoCorrect={false}
        />
          <TextInput
        style={styles.input}
        onChangeText={setGenero}
        value={genero}
        placeholder="Gênero"
        autoCorrect={false}
        />
          <TextInput
        style={styles.input}
        onChangeText={setCity}
        value={city}
        placeholder="Cidade"
        autoCorrect={false}
        />
          <TextInput
        style={styles.input}
        onChangeText={setUF}
        value={uf}
        placeholder="UF"
        autoCorrect={false}
        />
   

        <TouchableOpacity style={styles.btnCancel} onPress={exit}>
        <Text style={styles.submitText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSubmit} onPress={handlSignIn}>
        <Text style={styles.submitText}>Salvar</Text>
        </TouchableOpacity>
      


    </Animated.View>
    </KeyboardAvoidingView>


    )
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#191919'
    
    },
    containerLogo:{
        flex: 1,
        justifyContent: 'center'
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width: '90%',
        paddingBottom: 120
    
    },
    input:{
        backgroundColor:'#FFF',
        width: '90%',
        marginBottom:15,
        color: '#222',
        fontSize: 17,
        borderRadius:7,
        padding: 10
    
    },
    btnSubmit:{ 
        backgroundColor: '#2ddb5b',
        width: '90%',
        height:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 7,
      
        
    },

    btnCancel:{ 
        marginBottom: 10,
        backgroundColor: '#c22f33',
        width: '90%',
        height:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 7,
        
    },
    
    submitText:{
        color:'#FFF',
        fontSize: 18
    },
  
    registerText:{
        color:'#FFF'
    },
    textHead:{
        color:'#FFF',
        fontSize: 20,
        marginTop:50,
        height:70

    }

})