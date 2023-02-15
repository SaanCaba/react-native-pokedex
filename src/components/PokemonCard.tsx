import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";

interface Props{
    pokemonItem: {
        id: number;
        image: string;
        name: string;
        order: number;
        type: string;
    }
}

export default function PokemonCard({pokemonItem}:Props) {
    

    const goToDetail = () => {
        console.log('vamos al detail' + pokemonItem.name)
    }
    console.log(pokemonItem.image)
    return (
    <TouchableWithoutFeedback onPress={()=> goToDetail()}>
       <View style={styles.card}>
           <View style={styles.spacing}>
                <View style={styles.bgStyles}>
                    <Text style={styles.order}>#{pokemonItem.order.toString().padStart(3, '0')}</Text>
                    <Text style={styles.name}>{pokemonItem.name}</Text>
                    <Image style={styles.imagePokemon} source={{uri: pokemonItem.image}} />
                </View>
           </View>
       </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    card:{
        flex:1,
        height:130,
    },
    spacing:{
        flex:1,
        padding:5
    },
    bgStyles:{
        backgroundColor: "gray",
        borderRadius:10,
        height:'100%',
        justifyContent:'center',
    },
    imagePokemon:{
        position:'absolute',
        bottom:2,
        right:2,
        width:90,
        height:90
    },
    order:{
        marginLeft:10,
        color:'white',
        fontWeight:'bold',
        fontSize:14,
        paddingTop:10 
    },
    name:{
        marginLeft:10,
        color:'white',
        fontWeight:'bold',
        fontSize:15,
        paddingTop:10
    }
})
