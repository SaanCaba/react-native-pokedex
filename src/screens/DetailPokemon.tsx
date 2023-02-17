import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, {useEffect, useState} from "react";
import { getPokemonDetail } from "../api/pokemon";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/PokemonDetail/Header";
import Type from "../components/PokemonDetail/Type";
import Stats from "../components/PokemonDetail/Stats";
interface Props{
  route:{
    key:string,
    name:string,
    params:{
      data:any
    }
  }
  navigation: any
}

export default function DetailPokemon({route, navigation}:Props) {
 const[pokeDetail, setPokeDetail] = useState({
  id:'',
  image:'',
  name:'',
  order:'',
  type:'',
  allTypes: [],
  stats:[]
 })
 useEffect(() =>{
  navigation.setOptions({
    headerRight: () => null,
    headerLeft: () => <MaterialCommunityIcons
    onPress={() => navigation.goBack()}
    style={{marginLeft:10}} color='white' size={30} name="arrow-left"  />
  })
    setPokeDetail(route.params.data)
  }, [route.params, navigation])
  return (
    <ScrollView >
      <Header 
      image={pokeDetail.image} 
      type={pokeDetail.type} 
      order={pokeDetail.order} 
      name={pokeDetail.name}
       />
       <Type types={pokeDetail.allTypes}/>
       <Stats stats={pokeDetail.stats} />
    </ScrollView>
  );
}


