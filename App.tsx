import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import Login from './src/screens/Login'

export default function App() {
  let [name,setName]=useState('Ritwik')
  let [age,setAge] =useState(28)
  return (
    <View>
      <Login/>
    </View>
  )
}