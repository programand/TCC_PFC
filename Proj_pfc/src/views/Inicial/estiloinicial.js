import { StyleSheet } from "react-native";

const estiloinicial = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    borda:{
        backgroundColor: 'yellow',
        width: '95%',
        height: '40%',
        borderRadius: 10,
    },
    texto: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        padding:10,
    },
    botao:{
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 5,
        height: 40, 
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        alignContent: 'center',
    },
    botaotexto:{
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
    },
})
export default estiloinicial;