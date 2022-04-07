import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
//import estiloPage1 from './estiloPage1';

function Page1({navigation}) {
    const voltar = () =>{
        navigation.goBack()
    } 

return(
    <View>
        <View>
            <Text>pagina 1 </Text>
            <TouchableOpacity onPress={voltar}>
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    </View>
)
}
export default Page1; 