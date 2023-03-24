import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Keyboard,
} from "react-native";
import React, { SetStateAction, useEffect, useState, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { user } from "../../utils/userDBFalse";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context } from "../../context/Context";
import { useNavigation } from "@react-navigation/native";

interface Props {
    setAuth: (val: boolean) => void;
}

export default function LoginForm({ setAuth }: Props) {
    const [err, setError] = useState("");

    const navigation = useNavigation();
    const appContext = useContext(Context);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: true,
        validateOnMount: false,
        onSubmit: (val) => {
            setError("");
            // const {email, password} = val;
            try {
                fetch("http://192.168.0.70:3001/auth/login", {
                    method: "POST",
                    body: JSON.stringify(val),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data?.statusCode >= 400) {
                            setError(data.message);
                            return alert(data.message);
                        }
                        console.log(data);
                    });
            } catch (error) {
                console.log(error);
            }
        },
    });

    const goToRegister = () => {
        navigation.navigate("Register");
    };

    return (
        <View style={{ margin: 10 }}>
            <Text>No terminado.</Text>
            {/* <Text style={styles.titleLogin}>Log in</Text>
        <TextInput
        placeholder="Email..."
        style={[styles.input, formik.errors.email ? styles.errInput : styles.input ]}
        autoCapitalize='none'
        value={formik.values.email}
        onChangeText={(value) => formik.setFieldValue('email', value) }
        />
        <Text style={styles.errText}>{formik.errors.email}</Text>
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

        <Text style={styles.errText2}>{err}</Text>
        <Text >No tenés cuenta? <Text onPress={()=> goToRegister()} style={styles.registerHere}>Registrate aquí!</Text></Text>  */}
        </View>
    );
}

function initialValues() {
    return {
        email: "",
        password: "",
    };
}

function validationSchema() {
    return {
        email: Yup.string().required("The email is required"),
        password: Yup.string().required("The password is required"),
    };
}

const styles = StyleSheet.create({
    titleLogin: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
        marginTop: 5,
    },
    errInput: {
        borderColor: "red",
    },
    errText: {
        color: "red",
        marginBottom: 5,
        marginLeft: 10,
    },
    errText2: {
        color: "red",
        textAlign: "center",
        margin: 10,
        textTransform: "uppercase",
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    btnLogin: {
        width: "100%",
        backgroundColor: "#171716",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
    },
    textBtn: {
        color: "white",
        fontWeight: "600",
    },
    registerHere: {
        textDecorationLine: "underline",
        fontWeight: "bold",
    },
});
