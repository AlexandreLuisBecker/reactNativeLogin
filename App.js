import react,{useState, useEffect} from "react";
import { View,Animated ,KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import TelaLogin from "./src/components/TelaLogin";
import Principal from "./src/components/Principal";
import Cadastro from "./src/components/Cadastro";

const Stack = createStackNavigator();

function MyStack() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="TelaLogin" component={TelaLogin} />
      <Stack.Screen name="Principal" component={Principal} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}

export default function App() {
  


  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}