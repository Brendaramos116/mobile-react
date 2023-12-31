import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = (props) => {
    return (
        <>
            <View style={styles.card}>
                <Text style={styles.titulo}>{props.titulo}</Text>
                {props.children}                
            </View>
        </>
    )
}

export default Card
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      borderColor: 'blue',
      boderStyle: 'solid',
      borderWidth: 2,
      marginBottom: 20
    },
    titulo: {
      color: 'white',
      fontSize: 30,
      padding: 20,
      marginBottom: 20,
      borderBottomColor: 'red',
      boderBottomStyle: 'solid',
      borderBottomWidth: 2,
      textAlign: 'center',
      backgroundColor: 'red'
    },
    paragrafo: {
      fontStyle: 20
    }
  });