import React from 'react'

import {View, Text, StyleSheet,StatusBar} from 'react-native'
import {colors} from './src/global/styles'
import Header from './src/components/Header'






export default function App(){
  return(
    <View style = {styles.container}>
      <StatusBar 
        barStyle = "light-content"
        backgroundColor = {colors.statusbar}
      />
  <Header title={"My account"}/> 
    </View>
  
  )
}

const styles = StyleSheet.create({
  container: {flex:1}
})