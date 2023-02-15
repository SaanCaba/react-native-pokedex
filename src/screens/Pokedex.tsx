import { View, Text, Button } from "react-native";
import React, {useState, useEffect} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getAllPokemons, getPokemonDeatils } from "../api/pokemon";
import { PokemonModel, PokemonComponent, PokemonResponse } from "../models/pokemon.model";
import Pokemon from "../components/Pokemon";
 

export default function Pokedex({navigation}:any) {
    const[pokemons, setPokemons] = useState<any>([])
    useEffect(() => {
        (async() =>{
            await loadPokemons();
        })()
        console.log('hola')
    }, [])

    const loadPokemons = async () =>{
        try {
       const response : PokemonResponse | undefined = await getAllPokemons();
        const pokemonsArr = [];
        if(response !== undefined){
            for await (const pokemonItem of response.results) {
             const pokeDetail  = await getPokemonDeatils(pokemonItem.url);
             pokemonsArr.push({
                id: pokeDetail.id,
                name: pokeDetail.name,
                type:pokeDetail.types[0].type.name,
                order:pokeDetail.order,
                image: pokeDetail.sprites.other.home.front_default
             })
            }
            setPokemons(pokemonsArr)
        }
        } catch (error) {
            console.log(error)
        }
    }

    const goPage = (page:string)=>{
        navigation.navigate(page)
    }
    
    return (
    <SafeAreaView>
      <Text>Pokedex</Text>
      <Pokemon pokemons={pokemons} />
        <Button title="Detail" onPress={() => goPage("Pokemon Detail")}></Button>
    </SafeAreaView>
  );
}
