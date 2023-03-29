import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const BillTotalForm = () => {
  return (
    <View>
      <TextInput
      style = {styles.input}
      />
    </View>
  )
}

export default BillTotalForm


const styles = StyleSheet.create({

  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  },
});