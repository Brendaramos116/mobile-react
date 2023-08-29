import React from 'react'
import { Text } from 'react-native'

const Arrays = () => {

    const carros = ['Fusca','Celta', 'Pálio', 'Gol', 'Ka']

    const carro = {marca: 'VW', modelo: 'fusca', ano:'1978', foto:''}
  return (
    <>
        {carros.map(item =>(
            <Text>{item}</Text>
        ))}
    </>
  )
}

export default Arrays