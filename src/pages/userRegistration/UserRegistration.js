import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import api from "../../services/api";

export default function UserRegistration ({ navigation }) {
    // const [user, setUser] = useState({});
    const user = {
        name: "",
        lastName: "",
        email: "",
        password: "",
    };

    async function handleCreateUser () {
        // await api.post('/createUser', user)
        const _user = JSON.stringify(user)
        const teste = await api.post('/user', user);
        alert(teste.data);
    }

    function alert(text) {
        return Alert.alert(
            'Alert Title',
            text,
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
        );
    }

    function handleLogin () {
        navigation.navigate("Login")
    }
    return (
        <View>
            <View style={styles.title}>
                <Text style={styles.textTitle}>User Registration</Text>
            </View>
            <View style={styles.container}>
                <TextInput style={styles.inputLogin}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={text => user.name = text}
                    placeholder="Nome"></TextInput>

                <TextInput
                    style={styles.inputLogin}
                    placeholder="Second Name"
                    onChangeText={text => user.lastName = text}>
                </TextInput>

                <TextInput style={styles.inputLogin}
                    placeholder="Email"
                    onChangeText={text => user.email = text}>
                </TextInput>

                <TextInput style={styles.inputLogin}
                    secureTextEntry={true}
                    autoCompleteType="password"
                    textContentType="password"
                    placeholder="senha"
                    onChangeText={text => user.password = text}>
                </TextInput>

                <TouchableOpacity style={styles.button} onPress={handleCreateUser}>
                    <Text style={styles.textButtonCenter}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.textButtonCenter}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        height: 45,
        backgroundColor: '#4a0072'
    },
    textTitle: {
        color: "white",
        fontSize: 25,
        textAlign: "center"
    },
    container: {
        justifyContent: "center",
        padding: 40
    },
    inputLogin: {
        marginBottom: 10,
        textAlign: "center",
        borderRadius: 4,
        borderColor: "#cccccc",
        borderBottomWidth: 1,
    },
    button: {
        borderColor: "#7b1fa2",
        backgroundColor: "#ae52d4",
        justifyContent: "center",
        borderWidth: 1,
        height: 40,
        borderRadius: 3,
        marginBottom: 15
    },
    textButtonCenter: {
        textAlign: "center",
        color: "#ffffff"
    }

})

