import react,{useState, useEffect} from "react";
import { View,Animated ,KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";



export default function TelaLogin({navigation}){

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function Register(){
    navigation.reset({
        index: 0,
        routes:[{name: "Cadastro"}]
    }
    )
  }

  function handlSignIn(){
     if(username ==='' || password === ''){
      alert("Prencha os Campos")
     }
 else{
    navigation.reset({
        index: 0,
        routes:[{name: "Principal"}]
    })
      return;
     }
    const data = {
        setUsername,
        password
    }
}
const [offset] = useState(new Animated.ValueXY({ x:0, y:90}));

useEffect(()=> {
Animated.spring(offset.y,{
    toValue: 0,
    speed:4,
    bounciness: 30
})
},[]);
return(
    <KeyboardAvoidingView style={styles.background}>
  
 
  <View style={styles.containerLogo}>
        <Image source={require('../assets/logo.png')}
        />
        
    </View>

 <View>
 <Text style={styles.FazerLogin}>
    Informe seus dados cadastrais!
  </Text>
 </View>

    <Animated.View

   
    style={[
        styles.container,
        {
        transform:[ 
            {translateY: offset.y }
        ]
        }
        ]}>
        <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Usuário"
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
        <TouchableOpacity style={styles.btnSubmit} onPress={handlSignIn}>
        <Text style={styles.submitText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister} onPress={Register}>
        <Text style={styles.registerText}>Não tem cadastro? Clique aqui e cadastre-se!</Text>
        </TouchableOpacity>


    </Animated.View>
    </KeyboardAvoidingView>
)
}

const styles = StyleSheet.create({
    FazerLogin:{
       color: "#FFF",
       textAlign:'center',
       fontSize: 25,
       marginTop: 45


    
    },
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
    marginBottom:160

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
    backgroundColor: '#35AAFF',
    width: '90%',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 7
},

submitText:{
    color:'#FFF',
    fontSize: 18
},
btnRegister:{
    marginTop:10,

},
registerText:{
    color:'#FFF'
},


})