import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import {Image} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Account from "../screens/Account";
import Favorite from "../screens/Favorite";
import Pokedex from "../screens/Pokedex";
import Test from "../screens/Test";
import AccountNavigation from "./AccountNavigation";
import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNavigation";

const Tab = createMaterialBottomTabNavigator()

export default function Navigation() {
  return (
    <Tab.Navigator
    
    >
      <Tab.Screen
      name="Account"
      component={AccountNavigation}
      options={{
        tabBarLabel:"Account",
        tabBarIcon:() => (
          <MaterialCommunityIcons name="account" size={25} color="#fffaaa" />
        ),
      }}
      />
      <Tab.Screen 
      name="Pokedex" 
      component={PokedexNavigation}
      options={{
        tabBarLabel:"",
        tabBarIcon:() => renderPokeball(),
      }}/>
      <Tab.Screen 
      name="Favorite" 
      component={FavoriteNavigation}
      options={{
        tabBarLabel:"Favorite",
        tabBarIcon:() => (
          <MaterialCommunityIcons name="heart" size={25} color="#fffaaa" />
        ),
      }}/>
      
    </Tab.Navigator>
  )
}

function renderPokeball(){
  return (
    <Image
    source={require('../../assets/pokeball.png')}
    style={{
      width:55,
      height:55,
      top: -15,
    }}
    />
  )
}
