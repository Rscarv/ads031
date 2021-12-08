import react, { useState, useEffect } from "react";
import {View,
        Text,
        TouchableOpacity,
        FlatList
    } from "react-native"

import database from "../../config/firebaseconfig.js"
import { FontAwesome } from "@expo/vector-icons"
import styles from "./style";


export default function Tarefa({ navigation }){
    const [Tarefa, setTarefa] = useState([])

    function deleteTarefa(id){
        database.collection("Tarefas").doc(id).delete()
    }


    useEffect(()=>{
      database.collection("Tarefas").onSnapshot((query)=>{
          const list = []
          query.forEach((doc)=>{
              list.push({...doc.data(), id: doc.id })
          })
          setTarefa(list)
      })
    }, [])

    return(
        <View style={styles.container}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={Tarefa}
            renderItem={( item )=>{
                return(
                <View style={styles.Tarefas}>
                    <TouchableOpacity  
            style={styles.deleteTarefa}
                onPress={() => {deleteTarefa(item.id)
                }}
                >
                <FontAwesome 
                name="star"
                size={23}
                color="#CD853F"
                >
                </FontAwesome>
                
            </TouchableOpacity>
            <Text 
            style={styles.DescriptionTarefa}
            onPress= {()=>{
                navigation.navigate("Details",{
                id: item.id,
                description: item.description
            })
        }}
        
            > 
                {item.description}
            </Text>
                </View>)
            }}
            />
            <TouchableOpacity  
            style={styles.buttonNovaTarefa}>
                onPress={() => navigation.navigate("Nova Tarefa")}
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
            
        </View>
                
    )
}