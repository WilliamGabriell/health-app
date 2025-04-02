import React, {useState} from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";

export default function RegisterScreen({ onClose }: any){
    return(
        <View>
            <Text> Sing up </Text>
            <TouchableOpacity onPress={onClose}>
                <Text> Back to login</Text>
            </TouchableOpacity>
        </View>
    );
}