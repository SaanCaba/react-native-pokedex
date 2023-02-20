import { View, Text, StyleSheet, Button } from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";
import { Context } from "../context/Context";

export default function Account() {
  
  const[auth, setAuth] = useState(false)
  const context = useContext(Context)
  const logout = () => {
    setAuth(false)
   return context?.setConfig({
      token:'',
      username:''
    })
    
  }
  return (
    <View style={styles.contAccount}>
      {
        context?.config?.token ? 
        <>
        <UserData />
        <Button
        title="Log Out"
        onPress={() => logout()}></Button>
        </>
        : 
        <LoginForm setAuth={setAuth} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  contAccount:{
    flex:1,
    justifyContent:'center'
  }
})