import { Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function login() {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
        <View style={styles.area}>
          <Image style={styles.logo} source={require('../assets/yll.png')} />
        </View>
        

        <View style={[styles.area,styles.pin_area]}>
          <Text style={styles.label}>Enter your Pin</Text>
          <TextInput placeholderTextColor='white' style={styles.pin_input} placeholder='*  *  *  *' />
        </View>

        <View style={[styles.area,styles.footer_area]}>
          <Text style={styles.footer_text}>Created by Ritwik</Text>
        </View>
       
      </View>
      
      <View style={[styles.blob_container,styles.blob_a]}>
        <Image style={styles.blob_image} source={require('../assets/grads.png')}/>
      </View>

      <View style={[styles.blob_container,styles.blob_b]}>
        <Image style={styles.blob_image} source={require('../assets/grad.png')}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body:{
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  container:{
    flex:1,
    zIndex:2,
    alignItems:'center',
  },
  area:{
    width:'100%',
    flex:1,
    alignItems:'center',
    borderColor:'white',
    borderWidth:2,
    borderStyle:'solid',
  },

//LOGO------------------------------
  logo:{
    flex:1,
    position:'absolute',
    top:'15%'
  },

//PIN-------------------------------
  pin_area:{
    justifyContent:'center'
  },
  label:{
    color:'white'
  },
  pin_input:{
    marginVertical:10,
    color:'white',
    width:'50%',
    textAlign:'center',
    borderColor:'white',
    borderWidth:2,
    borderStyle:'solid',
    borderRadius:8
  },

  //FOOTER---------------------------
  footer_area:{
    justifyContent:'flex-end'
  },
  footer_text:{
    color:'white',
  },


// BLOBS-----------------------------

  blob_container:{
    position:'absolute'
  },
  blob_a:{
    width:'100%',
    top:'-10%', 
    right:'10%'
  },
  blob_b:{
    width:'70%', 
    bottom:'-10%',
    right:"-25%"
  },
  blob_image:{
    width:'100%',
    height: undefined,
    aspectRatio:1
  },


})