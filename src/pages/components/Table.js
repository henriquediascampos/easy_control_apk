import React, {useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


export default function Table(params) {

    function formatValue(cifrao, valor) {
        valor = valor.toString();
        const indexVirgula = valor.indexOf('.');
        let posVirgurla = indexVirgula > -1 ? valor.substring(indexVirgula+1, valor.length) : '';
        let preVirgula = indexVirgula > -1 ? valor.substring(0, indexVirgula): valor;

        if (posVirgurla.length === 1)  posVirgurla = posVirgurla + '0';
        if (posVirgurla.length === 0)  posVirgurla = posVirgurla + '00';

        const newValue = preVirgula + ',' + posVirgurla;
        let caracteresFaltantes = 12 - (newValue.length + 2);
        let newCifrao = cifrao;
        for (let i = 0; i < caracteresFaltantes; i++) {
            newCifrao += ' ';
        }

        console.log( (newCifrao + newValue).length)
        return newCifrao + newValue;
    }

    return(
        <View>
            <View style={styles.colunms}>
                {
                    params.colunms.map( (colunm, i) =>
                        <Text key={i + '-colunm'} style={styles.colunm}>{colunm}</Text> )
                }
            </View>

            <View style={styles.lines}>
                <ScrollView
                    style={styles.table}
                    indicatorStyle='#ad9fb9'
                    endFillColor='#d1b3ec7a'
                    >
                {
                    params.lines.map( (line, i) => (
                        <View key={i+ '-line'} style={styles.line}>
                            <Text style={styles.lineColumn}>{formatValue(line.cifrao, line.value)}</Text>
                            <Text style={styles.lineColumn}>{line.expiration}</Text>
                        </View>
                    ))
                }
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    table: {
        height: 460,
        borderRadius: 10,
    },
    colunms: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 2,
        borderBottomColor: '#cf9cff',
        backgroundColor: '#c48ef6',
    },
    colunm: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#f5f5f5',
        flex: 1,
        marginBottom: 5,
        textAlign: 'center',
    },
    lines: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        borderRadius: 10,
    },
    line: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: '#d6aaff',
        padding: 5
    },
    lineColumn: {
        flex: 1,
        color: '#424042',
        fontSize: 15,
        marginRight: 3,
        paddingLeft: 20,
        textAlign: 'center',
    }
});