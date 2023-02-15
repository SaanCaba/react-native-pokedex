import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import React from "react";
import { PokemonComponent } from "../models/pokemon.model";
import PokemonCard from "./PokemonCard";

interface Props{
    pokemons: Array<PokemonComponent>
}

interface PokemonItem{
    index:string,
    item: PokemonComponent,
    separators: any
}

export default function Pokemon({pokemons}:Props) {
    return (
        //no hace un View, ya que el padre tiene un View.
        <FlatList 
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon)=> String(pokemon.id)}
        renderItem={(pokemon)=><PokemonCard pokemonItem={pokemon.item} />}
        contentContainerStyle={styles.flatListContentContainer}
        />
   
  );
}

const styles = StyleSheet.create({
    flatListContentContainer:{
        paddingHorizontal:5
    }
})
