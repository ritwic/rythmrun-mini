import { Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'

interface props{
  pin_label:string
}

export default function Pin(props:props) {

const pin1=useRef()
const pin2=useRef()
const pin3=useRef()
const pin4=useRef()

const [pin1_value,setpin1_value]=useState()
const [pin2_value,setpin2_value]=useState()
const [pin3_value,setpin3_value]=useState()
const [pin4_value,setpin4_value]=useState()

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
        <View style={styles.area}>
          <Image style={styles.logo} source={require('../assets/symbol.png')} />
        </View>
        

        <View style={[styles.area,styles.pin_container]}>
          <Text style={styles.label}>{props.pin_label}</Text>
          <View style={styles.pin_area}>
            <TextInput 
              ref={pin1} 
              placeholderTextColor='white' 
              style={styles.pin_input} 
              keyboardType='number-pad' 
              maxLength={1}
              secureTextEntry={true}
              value={pin1_value}
              onChangeText={(text)=>{
                setpin1_value(text)
                if(text.length==1){
                  pin2.current.focus()
                }
                else{
                  pin1.current.focus()
                }
              }} 
            />
            <TextInput 
              ref={pin2} 
              placeholderTextColor='white' 
              style={styles.pin_input} 
              keyboardType='number-pad' 
              secureTextEntry={true}
              maxLength={1}
              value={pin2_value}
              onChangeText={(text)=>{
                setpin2_value(text)
                if(text.length==1){
                  pin3.current.focus()
                } 
                else{
                  pin1.current.focus()
                }
              }} 
            />
            <TextInput 
              ref={pin3} 
              placeholderTextColor='white' 
              style={styles.pin_input} 
              secureTextEntry={true}
              keyboardType='number-pad' 
              maxLength={1}
              value={pin3_value}
              onChangeText={(text)=>{
                setpin3_value(text)
                if(text.length==1){
                  pin4.current.focus()
                }
                else{
                  pin2.current.focus()
                }
              }} 
            />
            <TextInput 
              ref={pin4} 
              placeholderTextColor='white' 
              style={styles.pin_input} 
              keyboardType='number-pad' 
              secureTextEntry={true}
              maxLength={1}
              value={pin4_value}
              onChangeText={(text)=>{
                setpin4_value(text)
                if(text.length==1){
                  console.warn(pin1_value,pin2_value,pin3_value,pin4_value)
                }
                else{
                  pin3.current.focus()
                }
              }} 
            />
           
          </View>
        </View>

        <View style={[styles.area,styles.footer_container]}>
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
    alignItems:'center'
  },

//LOGO------------------------------
  logo:{
    flex:1,
    objectFit:'contain',
    justifyContent:'center',
  },

//PIN-------------------------------
  pin_container:{
    justifyContent:'center'
  },
  label:{
    color:'white'
  },
  pin_area:{
    flexDirection:'row'
  },
  pin_input:{
    color:'white',
    textAlign:'center',
    borderRadius:8,
    height:50,
    width:50,
    backgroundColor:'#666666',
    margin:4,
    opacity:5,
    fontSize:25
  },

  //FOOTER---------------------------
  footer_container:{
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
    top:'-9%', 
    right:'0%'
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