import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import estiloinicial from './estiloinicial';

function Inicial ({navigation}){
    const abrirPage1 = () => {
        navigation.navigate('Page1')
    }
    return(
        <View style={estiloinicial.container}>
            <View style={estiloinicial.borda}>
                <Text style={estiloinicial.texto}>TELA INICIAL</Text>
                <TouchableOpacity style={estiloinicial.botao} onPress={abrirPage1}>
                    <Text style={estiloinicial.botaotexto}>Page 1</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Inicial;