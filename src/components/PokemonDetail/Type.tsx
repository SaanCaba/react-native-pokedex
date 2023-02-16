import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { capitalize } from "lodash";
import getColorByType from "../../utils/getColorByType";


interface Props{
    types:Array<{ type: { name: string; url: string } }>;
}

export default function Type({types}:Props) {
    console.log(types)
    // const bgStyle = {backgroundColor: getColorByType(types), ...styles.bgStyles}

  return (
    <View style={styles.content}>
        <View style={styles.contTypes}>
      {
        types.map(e => {
            return(
                <Text style={{...styles.typeName,backgroundColor:getColorByType(e.type.name)}} key={e.type.url}>{capitalize(e.type.name)}</Text>
            )
        })
      }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    content:{
        marginTop:30,
        alignItems:'center',
        justifyContent:'center'
    },
    contTypes:{
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-around',

       width:'100%'
    },
    typeName:{
        paddingHorizontal:30,
        paddingVertical:10,
        borderRadius:20,
        marginHorizontal:20,
        fontSize:18,
    }
})