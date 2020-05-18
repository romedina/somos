import React from 'react'
import Header from './components/header'
import Item from './components/item'
import Container from '../../components/container'
import { FullWhidthColor } from '../../components/main'
import data from './data'
import styled from 'styled-components'

const Portolio = props => {
  return (
    <>
      <Header />
      <FullWhidthColor color='blue'>
        <ContainerStyled maxWidth='1000px'>
          {data.map((data_, index) => (
            <Item key={index} {...data_} />
          ))}
        </ContainerStyled>
      </FullWhidthColor>
    </>
  )
}

const ContainerStyled = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap
`

export default Portolio
