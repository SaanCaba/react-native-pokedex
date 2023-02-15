import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favorite from "../screens/Favorite";

const Stack = createStackNavigator()

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Favoritos" component={Favorite} />
    </Stack.Navigator>
  );
}
