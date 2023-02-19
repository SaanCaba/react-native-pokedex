import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";

export default function Account() {
  
  const[auth, setAuth] = useState(false)

  return (
    <View>
      {
        auth ? 
        <>
        <UserData />
        <Button
        title="Log Out"
        onPress={() => setAuth(false)}></Button>
        </>
        : 
        <LoginForm setAuth={setAuth} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  btnLogOut:{

  }
})