import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favorite from "../screens/Favorite";
import Pokedex from "../screens/Pokedex";
import DetailPokemon from "../screens/DetailPokemon";

const Stack = createStackNavigator()

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Pokedex" component={Pokedex} />
        <Stack.Screen name="Pokemon Detail" component={DetailPokemon} />
    </Stack.Navigator>
  );
}
