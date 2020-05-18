import React from 'react'
import Container from '../../../../components/container'
import { FullWidth } from './styled'
import { Text } from '../../../../components/main'

const Header = props => {
  return (
    <FullWidth>
      <Container maxWidth='600px' center>
        <Text color='white' fontSize='1.3em'>
          Construimos herramientas digitales para emprendedores,
          profesionistas y pymes con la finalidad de ayudarles a sostener sus
          ingresos y no depender de la venta presencial.
        </Text>
        <Text color='white' fontSize='1.3em'>
          Cada proyecto lo diseñamos a la medida de cada cliente y de acuerdo a
          sus capacidades y solvencia económica.
        </Text>
      </Container>
    </FullWidth>
  )
}

export default Header
