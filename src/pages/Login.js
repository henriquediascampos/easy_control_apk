import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";

export default function Login({ navigation }) {

    function handleLongin() {
        navigation.navigate('tabsNavigate');
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.inputLogin}
                autoCompleteType="email"
                textContentType="emailAddress"
                placeholder="Usuario"></TextInput>
            <TextInput style={styles.inputLogin}
                secureTextEntry={true}
                autoCompleteType="password"
                textContentType="password"
                placeholder="senha"></TextInput>
            <TouchableOpacity style={styles.button} onPress={handleLongin} >
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#6B52AE',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        borderRadius: 5
    },
    inputLogin: {
        textAlign: 'center',
        borderBottomColor: '#DCD8D8',
        borderBottomWidth: 1,
        marginBottom: 10,
        fontSize: 15
    },
    textButton: {
        fontSize: 16,
        color: '#ffffff'
    }
});