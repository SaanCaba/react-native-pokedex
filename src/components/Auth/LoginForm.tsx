import { View, Text, StyleSheet, TextInput, Button, Keyboard } from "react-native";
import React, { SetStateAction, useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { user } from "../../utils/userDBFalse";

interface Props{
    setAuth :  (val:boolean) => void
}

export default function LoginForm({setAuth}:Props) {

    const [err, setError] = useState('')

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema:Yup.object(validationSchema()),
        validateOnChange:true,
        validateOnMount:false,
        onSubmit: (val) => {
            const {username, password} = val;
            if(username === user.username && password === user.password){
                return setAuth(true)
            }else{
                setError("The username or password are incorrect")
            }
        }
    });

    

  return (
    <View>
        <Text style={styles.titleLogin}>Log in</Text>
        <TextInput
        placeholder="Name..."
        style={[styles.input, formik.errors.username ? styles.errInput : styles.input ]}
        autoCapitalize='none'
        value={formik.values.username}
        onChangeText={(value) => formik.setFieldValue('username', value) }
        />
        <Text style={styles.errText}>{formik.errors.username}</Text>
        <TextInput
        placeholder="Password..."
        style={[styles.input, formik.errors.password ? styles.errInput : styles.input]}
        autoCapitalize='none'
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(value) => formik.setFieldValue('password', value) }
        />
        <Text style={styles.errText}>{formik.errors.password}</Text>
        <Button onPress={() => formik.handleSubmit()} title="Log in"></Button>
        <Text style={styles.errText2}>{err}</Text>
    </View>
  );
}

function initialValues (){
    return {
        username:'',
        password:''
    }

}

function validationSchema(){
    return {
        username: Yup.string().required("The name is required"),
        password: Yup.string().required("The password is required")
    }
}


const styles = StyleSheet.create({
    titleLogin:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:30,
         marginTop:5
    },
    errInput:{
        borderColor:'red'
    },
    errText:{
        color:'red',
        marginBottom:5,
        marginLeft:10
    },
    errText2:{
        color:'red',
        textAlign:'center',
        margin:10,
        textTransform:'uppercase'
    },
    input:{
        borderWidth:1,
        borderRadius:10,
        padding:10,
        margin:10
    }
})