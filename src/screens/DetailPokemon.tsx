import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, {useEffect, useState} from "react";
import { getPokemonDetail } from "../api/pokemon";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/PokemonDetail/Header";
interface Props{
  route:{
    key:string,
    name:string,
    params:{
      data:any
    }
  }
}

export default function DetailPokemon({route}:Props) {
 const[pokeDetail, setPokeDetail] = useState({
  id:'',
  image:'',
  name:'',
  order:'',
  type:''
 })
 useEffect(() =>{
    setPokeDetail(route.params.data)
  }, [route.params])
  return (
    <ScrollView style={styles.contDetail} >
      <Header image={pokeDetail.image} type={pokeDetail.type} order={pokeDetail.order} name={pokeDetail.name} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contDetail:{
  }
})
