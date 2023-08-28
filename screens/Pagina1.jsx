import React from 'react'
import Card from '../components/Card'

const Pagina1 = () => {
  return (
    <>
    <Card/>
      <View style={styles.card}>
        <Text style={styles.titulo}>Hello Word!</Text>
        <Text style={styles.paragrafo}>Isso é um parágrafo</Text>
        <Text>Isso é um parágrafo</Text>
        <Text>Isso é um parágrafo</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.card}>
        <Text style={styles.titulo}>Brenda</Text>
        <Text style={styles.paragrafo}>Isso é um parágrafo</Text>
        <Text>Isso é um parágrafo</Text>
        <Text>Isso é um parágrafo</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.titulo}>Brenda</Text>
        <Text style={styles.paragrafo}>Isso é um parágrafo</Text>
        <Text>Isso é um parágrafo</Text>
        <Text>Isso é um parágrafo</Text>
      </View>
    
    </>
  )
}

export default Pagina1