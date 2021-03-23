import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
export default function  Conditions({ weather }) {
    return(
        <View style={styles.container}>
            <View style={styles.condition}>
                <Feather name="wind" color="#1ed6ff"/>
                <Text>{weather.results && weather.results.wind_speedy}</Text>
            </View>

            <View style={styles.condition}>
                <Feather name="wind" color="#1ed6ff"/>
                <Text>{weather.results && weather.results.sunrise}</Text>
            </View>

            <View style={styles.condition}>
                <MaterialCommunityIcons name="weather-sunset-down" color="#1ed6ff"/>
                <Text>{weather.results && weather.results.sunset}</Text>
            </View>

            <View style={styles.condition}>
                <Feather name="droplet" color="#1ed6ff"/>
                <Text>{weather.results && weather.results.humidity}</Text>
            </View>

        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        padding: 10,
        backgroundColor: '#fff', 
        flexDirection: 'row',
        width: '95%',
        justifyContent:'space-around'
    },
    condition: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})