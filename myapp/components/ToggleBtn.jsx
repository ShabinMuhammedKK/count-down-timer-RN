import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from './Button'

const ToggleBtn = () => {
  return (
    <View style={styles.toggleButton}>
          <Button
            color="#fff"
            height={30}
            width={40}
            textColor="black"
            title="Dark"
          />
          <Button
            color="#000"
            height={30}
            width={40}
            textColor="white"
            title="Light"
          />
        </View>
  )
}

export default ToggleBtn

const styles = StyleSheet.create({
    toggleButton: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "flex-end",
      },
})