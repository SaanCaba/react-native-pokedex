import { View, Text, StyleSheet, TextInput, Button, Keyboard } from "react-native";
import React, { SetStateAction, useEffect, useState, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { user } from "../../utils/userDBFalse";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context } from "../../context/Context";

interface Props{
    setAuth :  (val:boolean) => void
}

export default function LoginForm({setAuth}:Props) {

    const [err, setError] = useState('');

    // auth

    const appContext = useContext(Context)
    
    // useEffect(() => {
    //     appContext?.setConfig({
    //         ...appContext.config,
    //         password:'pepe'
    //     })
    //     appContext?.setConfig({
    //         ...appContext.config,
    //         name:'pedro'
    //     })
    //     console.log(appContext)
    // }, [])

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema:Yup.object(validationSchema()),
        validateOnChange:true,
        validateOnMount:false,
        onSubmit: (val) => {
            const {username, password} = val;
            if(username === user.username && password === user.password){
                appContext?.setConfig({
                    username: user.username,
                    token:'2913i1293i2193i'
                })
                return setAuth(true)
            }else{
                setError("The username or password are incorrect")
            }
        }
    });



  return (
    <View style={{margin:10}}>
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
        <TouchableOpacity style={styles.btnLogin} onPress={() => formik.handleSubmit()}>
            <Text style={styles.textBtn}>LOG IN</Text>
        </TouchableOpacity>

        {/* <Button onPress={() => formik.handleSubmit()} title="Log in"></Button> */}
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
        marginTop:10,
        marginBottom:10
    },
    btnLogin:{
        width:'100%',
        backgroundColor:'#171716',
        alignItems:'center',
        padding:10,
        borderRadius:10
    },
    textBtn:{
        color:'white',
        fontWeight:"600"
    }
})