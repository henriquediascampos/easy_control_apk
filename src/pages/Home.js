import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import Table from "./components/Table";
export default function Home() {
    const colunms= ['Valor', 'Vencimento'];
    const lines= [
        { value: 25.50, expiration: '01-01-2019' },
        { value: 105.00, expiration: '06-01-2019' },
        { value: 50.00, expiration: '06-01-2019' },
        { value: 100.50, expiration: '10-01-2019' },
        { value: 100.50, expiration: '10-01-2019' },
        { value: 100.50, expiration: '10-01-2019' },
        { value: 100.50, expiration: '10-01-2019' },
        { value: 100.50, expiration: '10-01-2019' },
        { value: 100.50, expiration: '10-01-2019' },
        { value: 100.50, expiration: '10-01-2019' },
        { value: 100.50, expiration: '10-01-2019' },
        { value: 100.50, expiration: '10-01-2019' },
        { value: 100.50, expiration: '10-01-2019' },
        { value: 100.50, expiration: '10-01-2019' },
        { value: 100.50, expiration: '10-01-2019' },
        { value: 100.50, expiration: '10-01-2019' },
        { value: 100.50, expiration: '10-01-2019' },
        { value: 100.50, expiration: '10-01-2019' },
        { value: 100.50, expiration: '10-01-2019' },
        { value: 100.50, expiration: '10-01-2019' },
    ];

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
        borderBottomColor: '#8202fa',
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