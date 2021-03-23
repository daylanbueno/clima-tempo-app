import React from 'react'
import { useNavigation } from '@react-navigation/native'

import {  StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'


export default function Menu () {
    const navigation = useNavigation();


    return (
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.container}>
            <Feather
                name="menu"
                size={24}
                color="#373737"
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        zIndex:9,
        top: 40,
        left: 15,
        width: 70,
        height: 70,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
           width: 1,
           height: 3, 
        }
    }
})