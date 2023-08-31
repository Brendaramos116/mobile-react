import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import styles from '../styles/styles'

const Estado = () => {

    const [qtd, setQtd] = useState(0)

    function adicionar() {
        setQtd(qtd + 1)
    } 

    return (
        <>
            <View style={styles.linha}>
                <Button  mode='contained' onPress={() => setQtd(qtd - 1)}> - </Button>
                <Text style={styles.button}>{qtd}</Text>
                <Button  mode='contained' onPress={adicionar}> + </Button>
            </View>
        </>
    )
}

export default Estado

