import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";

export default function Login({ navigation }) {

    function handleLongin() {
        navigation.navigate('tabsNavigate');
    }

    function handleRecoverPassword() {
        navigation.navigate('RecoverPassword');
    }
    

    function handleUserRegistration() {
        navigation.navigate('UserRegistration');
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

            <TouchableOpacity style={styles.buttonLogin} onPress={handleLongin} >
                <Text style={styles.textButtonLogin}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonsAuxiliares} onPress={handleRecoverPassword}>
                <Text style={styles.textButtonCenter}>Esqueci minha senha</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsAuxiliares} onPress={handleUserRegistration}>
                <Text style={styles.textButtonCenter}>Cadastrar</Text>
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
    buttonLogin: {
        backgroundColor: '#6B52AE',
        height: 50,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        borderRadius: 5
    },
    buttonsAuxiliares: {
        height: 25
    },
    textButtonCenter: {
        textAlign: "center",
    },
    inputLogin: {
        textAlign: 'center',
        borderBottomColor: '#DCD8D8',
        borderBottomWidth: 1,
        marginBottom: 10,
        fontSize: 15
    },
    textButtonLogin: {
        fontSize: 16,
        color: '#ffffff'
    }
});