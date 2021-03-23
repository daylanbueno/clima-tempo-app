import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
export default function Header({ background, weather, icon }) {
    return (
        <LinearGradient
         style={styles.container}
         colors={background}
         >
            <Text style={styles.date}>{weather.results && weather.results.date}</Text>
            <Text style={styles.city}>{weather.results && weather.results.city_name}</Text>
            <Ionicons name={icon.name} color={icon.color} size={150} />
            <Text style={styles.temp}> {weather.results && weather.results.temp}°</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: '55%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },

     date: {
        color: '#fff',
        fontSize: 17
    },

    city: {
        color: '#fff',
        fontSize: 20,
        fontWeight:'bold'
    },

    temp: {
        color: '#fff',
        fontSize: 50,
        fontWeight: 'bold'
    }
})