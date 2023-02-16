import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import React from "react";
import { capitalize } from "lodash";
import getColorByType from "../../utils/getColorByType";

interface Props{
    name:string
    image:string
    type:string
    order:string
}

export default function Header({name,image,type,order}:Props) {
  const colorBg = getColorByType(type)
  const bgStyle = {backgroundColor: getColorByType(type), ...styles.bgStyles}

    return (
    <SafeAreaView style={styles.contHeader}>
        <View style={bgStyle}>
        <SafeAreaView style={styles.cont}>
        <Text style={styles.name}>{capitalize(name)}</Text>
            <Text style={styles.order}>#{order.toString().padStart(3, '0')}</Text>
            <View style={styles.imgCont}>
                <Image source={{uri: image}} style={styles.image} />
            </View>
        </SafeAreaView>
        </View>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    contHeader:{
        height:'100%'
    },
    image:{
        width:250,
        height:250
    },
    name:{
        marginTop:20,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:29,
        color:'white',
    },
    order:{
        marginTop:20,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:24,
        color:'white', 
    },
    cont:{
       marginHorizontal:20,
       marginTop:30 
    },
    imgCont:{
        flex:1,
        alignItems:'center',
    },
    bgStyles:{
        flex: 1,
        padding:10,
        height:500,
        width:'100%',
        borderBottomEndRadius:300,
        borderBottomLeftRadius:300,
    }
})