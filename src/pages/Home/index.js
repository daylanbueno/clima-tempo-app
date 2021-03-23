import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import * as Location from 'expo-location'

import Menu from '../../components/Menu';
import Header from '../../components/Header'
import Conditions from '../../components/Conditions';
import Forcast from '../../components/Forcast'

import api, { key } from '../../services/api'


export default  function Home () {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [weather, setWeather] = useState([])  
  const [icon, setIcon] = useState({name:'cloud', color: '#fff'})
  const [background, setBackgroud] = useState(['#1ed6ff', '#97c1ff'])

  useEffect(() => {
    (async () => {
      setLoading(true)
      let {  status } = await Location.requestPermissionsAsync()
     
      if(status !== 'granted') {
        setErrorMsg('Você não deu permissão para acessar a sua localização')
        setLoading(false)
        return;
      }         

      let location = await Location.getCurrentPositionAsync({})
      let response = ''
      try {
        console.log('LOCATION ************************* ---', location)
        response = await api.get(`/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`)
        setWeather(response.data)
      } catch (err) {
        console.log('deu treta',err)
        setLoading(false)
        setError(error)
      }
      if(!response) {
        return
      }
      console.log('response',response)
      
      if(response.data.results.currently === 'noite') {
        setBackgroud(['#0c3741', '#0f2f61'])
      }
      
      switch(response.data.results.condition_slug) {
        case 'clear_day': 
          setIcon({name: 'partly-sunny', color: '#ffb300'})
          break;

        case 'rain': 
          setIcon({name: 'rainy', color: '#fff'})
          break;

        case 'storm': 
          setIcon({name: 'rainy', color: '#fff'})
          break;
        
      }

      setLoading(false)

    })();
  },[])


  if(error) {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 17, fontStyle: 'italic' }}>{error}</Text>
      </View>
    )
  }

  if(loading) {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 17, fontStyle: 'italic' }}>Carregando dados</Text>
      </View>
    )
  }

    return (     
         <SafeAreaView style={styles.container} >
            <Menu/>
            <Header background={background} weather={weather} icon={icon}/>
            <Conditions weather={weather} />
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{ paddingBottom: '5%' }}
                style={styles.list}
                data={weather.results.forecast}
                keyExtractor={item => item.date}
                renderItem={({ item }) => <Forcast  data={item}/>}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#e8f0ff',
        paddingTop: '5%'
    }
})