import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import api from "../services/api";
import Table from "./components/Table";
export default function Home() {
    const colunms= ['Valor', 'Vencimento'];
    const lines = api.getContasMes();
    return (
        <View style={styles.homeContainer}>
            <View style={styles.cardContainer}>
                <Text style={styles.cardHome}>Saldo</Text>
                <View>
                    <Text style={styles.saldo}>R$ 15,00</Text>
                </View>
            </View>

            <View style={styles.homeContas}>
                <Table
                    colunms={colunms}
                    lines={lines} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#6B52AE',
    },
    cardContainer: {
        flex: .23,
        borderRadius: 5,
        padding: 5,
        backgroundColor: '#c48ef6',
        marginBottom: 20

    },
    cardHome: {
        fontSize: 28,
        borderBottomColor: '#cf9cff',
        borderBottomWidth: 1,
        textAlign: 'center',
        color: '#f5f5f5',
    },
    saldo: {
        textAlign: 'center',
        fontSize: 28,
        color: '#f5f5f5'
    },
    homeContas: {
        flex: 1,
        borderRadius: 5,
        padding: 8,
        backgroundColor: '#c48ef6',
        color: '#fff'
    }

});