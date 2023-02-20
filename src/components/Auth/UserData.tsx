import { View, Text } from "react-native";
import React, { useContext } from "react";
import { Context } from "../../context/Context";

export default function UserData() {
  const appContext = useContext(Context)
  return (
    <View>
      <Text>{appContext?.config?.username}</Text>
    </View>
  );
}
