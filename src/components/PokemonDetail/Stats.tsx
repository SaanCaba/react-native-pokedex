import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { capitalize } from "lodash";
import { StatusBar } from "expo-status-bar";

interface Props {
    stats:Array<{
        base_stat:number,
        effort:number,
        stat:{
            name:string,
            url:string
        }
    }>
}

export default function Stats({stats}:Props) {
    
  return (
    <View style={styles.content}>
      <Text style={styles.textStats}>Base Stats</Text>
        {
            stats.map((e, i) => {
                return(
                    <View style={styles.contStats} key={i}>
                        <View style={styles.contTitleStat}>
                            <Text style={styles.statName}>{capitalize(e.stat.name)}</Text>
                        </View>
                        <View style={styles.contBarra}>
                            <Text style={styles.numberStat}>{e.base_stat}</Text>
                            <View style={styles.bgBar}>
                                <View style={{ width:e.base_stat + '%', height:5, backgroundColor: e.base_stat >= 100 ? '#f7d83b' : e.base_stat > 50 ? '#b2f0ad' : '#f0412e' }} />
                            </View>
                        </View>
                    </View>
                )
            })
        }
    </View>
  );
}

const styles = StyleSheet.create({
    content:{
        paddingHorizontal:20,
        marginTop:40
    },
    textStats:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        paddingBottom:10
    },
    contStats:{
        flexDirection:'row',
        paddingVertical:5
    },
    contTitleStat:{
        width:'30%',
    },
    contBarra:{
        marginLeft:10,
        width:'70%',
        flexDirection:'row',
        alignItems:'center'
    },
    statName:{
        color:'#6b7b6b',
        fontWeight:'600'
    },
    numberStat:{
        width:'12%',
        fontSize:12
    },
    bgBar:{
        backgroundColor:'gray',
        width:'88%',
        height:5,
        borderRadius:25,
        overflow:'hidden'
    }
})
