import React, {useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


export default function Table(params) {

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
                    style={{height: 460}}
                    indicatorStyle='#03bedf'
                    endFillColor='#03bedf'
                    >
                {
                    params.lines.map( (line, i) => (
                        <View key={i+ '-line'} style={styles.line}>
                            <Text style={styles.lineColumn}>{line.value}</Text>
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
    colunms: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: '#CACACA',
        backgroundColor: '#c48ef6',
    },
    colunm: {
        fontSize: 22,
        fontWeight: 'bold',
        flex: 1,
        marginBottom: 5,
        marginRight: 5
    },
    lines: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    line: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: '#CACACA',
        padding: 5
    },
    lineColumn: {
        flex: 1,
        fontSize: 15,
        marginRight: 3,
        paddingLeft: 2
    }
});