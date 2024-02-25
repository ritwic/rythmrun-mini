import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import Pin from './src/screens/Pin'

export default function App() {
  let [name,setName]=useState('Ritwik')
  let [age,setAge] =useState(28)
  return (
    <View>
      <Pin pin_label='Enter pin'/>
    </View>
  )
}