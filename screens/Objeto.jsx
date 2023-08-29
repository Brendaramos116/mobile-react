import React from 'react'
import { Button, Text } from 'react-native'
import { Card } from 'react-native-paper'


const Objeto = () => {

  const carros = [
    { marca: 'VW', modelo: 'fusca', ano: 1978, cor: 'Preto', foto: '' },
    { marca: 'GM', modelo: 'Celta', ano: 2003, cor: 'Preto', foto: '' },
    { marca: 'Fiat', modelo: 'Pálio', ano: 1995, cor: 'Azul', foto: '' },
    { marca: 'VW', modelo: 'Gol', ano: 2010, cor: 'Vermelho', foto: '' },
    { marca: 'Ford', modelo: 'Ka', ano: 2020, cor: 'Prata', foto: '' }
  ]
  return (
    <>
      {carros.map(item => (
        <>
          <Card>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Content>
              <Text variant="Marca">Marca:{item.marca}</Text>
              <Text variant="Ano">Ano:{item.ano}</Text>
              <Text variant="Cor">Cor:{item.cor}</Text>
            </Card.Content>
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
        </>
      ))}
    </>
  )
}

export default Objeto