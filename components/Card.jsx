import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = () => {
    return (
        <>
            <View style={styles.card}>
                <Text style={styles.titulo}>Brenda</Text>
                <Text style={styles.paragrafo}>Isso é um parágrafo</Text>
                <Text>Isso é um parágrafo</Text>
                <Text>Isso é um parágrafo</Text>
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