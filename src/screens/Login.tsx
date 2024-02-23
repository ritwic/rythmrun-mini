import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.v}>
        <Text style={styles.title}>Rythm</Text>
        <Text style={styles.title}>Run</Text>
      </View>
      
      <View style={{position:'absolute', width:'140%',top:'-30%'}}>
        <Image style={{width:'100%',height: undefined,aspectRatio:1}} source={require('../assets/grad.png')}/>
      </View>

      <View style={{position:'absolute', width:'70%', bottom:'-10%',left:"-30%"}}>
        <Image style={{width:'100%',height: undefined,aspectRatio:1}} source={require('../assets/grad.png')}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  v:{
    flex:1,
    zIndex:2,
    padding:30,
    alignItems:'flex-end'
  },
  title:{
    color:'white',
    fontSize:50,
    lineHeight:50
  }
})