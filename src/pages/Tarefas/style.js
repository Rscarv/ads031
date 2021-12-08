import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: "#FFDEAD",
        paddingTop: 20
    },

    Tarefas:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:5
    },

    deleteTarefa:{
        justifyContent:"center",
        paddingLeft:150,
    },
    DescriptionTarefa:{
        width:"75%",
        alignContent:"flex-start",
        backgroundColor:"f5f5f5cf",
        padding:12,
        paddingHorizontal: 20,
        borderRadius:50,
        marginBottom: 5,
        marginRight:15,
        color:"#8B4513",

    },

    buttonNovaTarefa:{  
        width:60,
        height:60,
        position:"absolute",
        bottom:30,
        left:20,
        backgroundColor:"#CD853F",
        borderRadius:50,
        justifyContent:"center"

    },

    iconButton:{
        color:"#ffffff", 
        fontSize:20,
        fontWeight:"bold",

    },
});

export default styles