import { StyleSheet, View, Text, Platform, Image, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import { PokemonComponent } from "../models/pokemon.model";
import PokemonCard from "./PokemonCard";

interface Props{
    pokemons: Array<PokemonComponent>,
    loadPokemon:any,
    nextUrl:undefined | string | null,
    loading:boolean
}



export default function Pokemon({pokemons,loading, loadPokemon, nextUrl}:Props) {
    const loadMore = () => {
        
        console.log("Cargando...")
        loadPokemon();
    }
    const noMorePokemons = () =>{
        return
    }
    return (
        //no hace un View, ya que el padre tiene un View.
        <FlatList 
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon)=> String(pokemon.id)}
        renderItem={(pokemon)=><PokemonCard pokemonItem={pokemon.item} />}
        contentContainerStyle={styles.flatListContentContainer}
        onEndReached={!loading && nextUrl !== null ? loadMore : noMorePokemons}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
         loading && nextUrl !== null ? (
                <ActivityIndicator
                size="large"
                style={styles.spinner}
                />
            ) : <ActivityIndicator
            size="large"
            style={styles.spinner}
            />
            
        }
        />
   
  );
}

const styles = StyleSheet.create({
    flatListContentContainer:{
        paddingHorizontal:5,
        // con Platform tenemos la plataforma.
        marginTop: Platform.OS === 'android' ? 30 : 0,
        backgroundColor: Platform.OS == 'android' ? 'green' : 'gray'
    },
    spinner:{
        marginTop:20,
        marginBottom:60
    }
})
