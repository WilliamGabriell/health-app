import { View, Text, TextInput, } from "react-native";

export default function LoginScreen(){
    return (
        <View>
            <Text>Login.</Text>
            <Text>E-mail</Text>
            <TextInput placeholder="Ingrese el dato:"></TextInput>
            <Text>Contraseña:</Text>
            <TextInput placeholder="Ingresa la contraseña: "></TextInput> 
        </View>
      );
}