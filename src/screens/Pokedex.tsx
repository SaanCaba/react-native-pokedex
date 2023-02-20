import { View, Text, Button } from "react-native";
import React, {useState, useEffect, useContext} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getAllPokemons, getPokemonDeatils } from "../api/pokemon";
import { PokemonModel, PokemonComponent, PokemonResponse } from "../models/pokemon.model";
import Pokemon from "../components/Pokemon";
import { Context } from "../context/Context";
 

export default function Pokedex({navigation}:any) {
    const[pokemons, setPokemons] = useState<any>([])
    const[nextUrl, setNextUrl] = useState<any>([])
    const[loading, setLoading] = useState(false)
    const appContext = useContext(Context)
    useEffect(() => {
        (async() =>{
            await loadPokemons();
        })()
        console.log('hola')
    }, [])

    const loadPokemons = async () =>{
        try {
            setLoading(true)
       const response : PokemonResponse | undefined = await getAllPokemons(nextUrl);
       setNextUrl(response?.next) 
       const pokemonsArr: PokemonComponent[] = [];
        if(response !== undefined){
            for await (const pokemonItem of response.results) {
             const pokeDetail  = await getPokemonDeatils(pokemonItem.url);
             pokemonsArr.push({
                id: pokeDetail.id,
                name: pokeDetail.name,
                type:pokeDetail.types[0].type.name,
                order:pokeDetail.order,
                image: pokeDetail.sprites.other.home.front_default,
                allTypes: pokeDetail.types,
                stats: pokeDetail.stats
             })
            }
            setPokemons((pokemons:PokemonComponent[]) => pokemons.concat(pokemonsArr))
            setLoading(false)
            // console.log(pokemonsArr)
            // setPokemons([...pokemons, pokemonsArr])
            // console.log("pokemons", pokemons)
        }
        } catch (error) {
            console.log(error)
        } 
        
    }

    // const goPage = (page:string)=>{
    //     navigation.navigate(page)
    // }
    
    return (
    <SafeAreaView>
        {
          <Text>{appContext?.config?.username}</Text>  
        }
      <Pokemon loading={loading}  nextUrl={nextUrl} pokemons={pokemons} loadPokemon={loadPokemons} />
    </SafeAreaView>
  );
}
