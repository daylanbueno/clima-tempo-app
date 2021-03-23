import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import {  condition } from '../../utils/condition'
export default  function Forcast ({data}) {
    const iconCondition  = condition(data.condition)
    return (
        <View style={styles.container}>
            <Text style={styles.date}>{data.date}</Text>
            <Ionicons  name={iconCondition.name} color={iconCondition.color} size={25}/>
            <View style={styles.temp}>
                <Text>{data.min}°</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{data.max}°</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: '#fff',
        marginLeft: 12,
        borderRadius: 8,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 14,
        paddingRight: 14,
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    date: {
        fontSize: 14
    },

    temp: {
        alignItems: 'center'
    }
})