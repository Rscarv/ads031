import React ,{ useState }from "react";
import {View, Text, TextInput, TouchableOpacity } from "react-native"

import database from "../../config/firebaseconfig"
import styles  from "./style"


export default function NovaTarefa({ navigation }){
    const [description, setDescription] = useState(null)

    function addTarefa(){
        database.collection("Tarefas").add({
            description: description,
            status: false
        })
        navigation.navigate("Tarefa")
    }
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Descrição</Text>
            <TextInput
            style={styles.input}
            placeholder="Tafera para ser realizada"
            onChangeText={setDescription}
            value={description}
            />
            <TouchableOpacity 
               style={styles.buttonNovaTarefa}
               onPress={()=>{
                   addTarefa()
                }}
               >
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}