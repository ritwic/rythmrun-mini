import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require('../assets/yl.png')} />
      </View>
      
      <View style={{position:'absolute', width:'100%',top:'-10%', right:'4%'}}>
        <Image style={{width:'100%',height: undefined,aspectRatio:1}} source={require('../assets/grads.png')}/>
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
  logo_container:{
    flex:1,
    zIndex:2,
    position:'relative',
    // borderStyle:'solid',
    // borderColor:'red',
    // borderWidth:2
  },
  logo:{
    // borderStyle:'solid',
    // borderColor:'green',
    // borderWidth:2
    position:'absolute',
    right:'2%',
    top:'-5%'
  },
  title:{
    color:'white',
    fontSize:50,
    lineHeight:50
  }
})