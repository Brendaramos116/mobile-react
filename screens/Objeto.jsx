import React from 'react'
import { Text } from 'react-native'
import { Button, Card } from 'react-native-paper'


const Objeto = () => {

  const carros = [
    { marca: 'VW', modelo: 'Fusca', ano: 1978, cor: 'Preto', foto: 'http://2.bp.blogspot.com/_MGiZcWxFpoc/SZCZP3lcWoI/AAAAAAAAMUo/M5ynxbXR3p0/s800/fusca.jpg' },
    { marca: 'GM', modelo: 'Celta', ano: 2003, cor: 'Preto', foto: 'https://imperiocarmultimarcas.com.br/carros/24ec8b2e4026017b87212a0ea682661e-thumbjpeg-chevrolet-celta-9011507-768-576-70.jpg' },
    { marca: 'Fiat', modelo: 'Pálio', ano: 1995, cor: 'Azul', foto: 'https://motortudo.com/wp-content/uploads/2018/04/Fiat-Palio-EL-1.5-1996-Motor-Tudo-11.jpg' },
    { marca: 'VW', modelo: 'Gol', ano: 2010, cor: 'Vermelho', foto: 'https://s2-autoesporte.glbimg.com/SJLwHlPNB5znk7E8PpNWqqsg9Tc=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/P/l/lFtMXUQ3iBSHZwVeaFqw/2018-03-29-golfrente.jpg' },
  ]
  return (
    <>
      {carros.map(item => (
        <>
          <Card mode='contained' style={{margin: 10}}>
            <Card.Cover source={item.foto} />
            <Card.Content>
              <Text variant="modelo">Modelo: {item.modelo}</Text>
              <Text variant="Marca">Marca: {item.marca}</Text>
              <Text variant="Ano">Ano: {item.ano}</Text>
              <Text variant="Cor">Cor: {item.cor}</Text>
            </Card.Content>
            <Card.Actions>
              <Button mode='elevated'>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
        </>
      ))}
    </>
  )
}

export default Objeto

