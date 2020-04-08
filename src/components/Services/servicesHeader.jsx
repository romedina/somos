import React from 'react'
import { styled } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const ServicesHeader = (props) => {
  return (
    <Container>
      <Content>
        <Title variant='h1'>TU PROYECTO </Title>
        <Box>
          <CircleSteep>1</CircleSteep>
          Platicanos tu proyecto en una junta virtual.
        </Box>
        <Box>
        <CircleSteep>2</CircleSteep>
          Te hacemos una propuesta ecónomica con facilidades de pago.
        </Box>
        <Box>
        <CircleSteep>3</CircleSteep>
          Realizamos tu proyecto en tiempo record
          <VerticalLine />
        </Box>
      </Content>
    </Container>
    
  )
}

export default ServicesHeader

const Title = styled(Typography)({
  fontSize: '3em',
  width: '100%',
  color: '#000',
  textAlign: 'left',
  marginBottom: '80px',
  fontWeight: 'bold'
})

const Container = styled('div')({
  background: '#0449ff',
  padding: '60px 0px'
})

const Content = styled('div')({
  color: '#fff',
  maxWidth: '1080px',
  padding: '10px',
  paddingLeft: '50px',
  margin: 'auto',
  display: 'flex',
  fontSize: '1.4em',
  fontFamily: 'CircularStdBook, Arial',
  flexWrap: "wrap",
})

const Box = styled('div')({
  padding: '20px',
  paddingTop: '50px',
  paddingBottom: '30px',
  boxSizing: 'border-box',
  width: '25%',
  position: 'relative',
  background: 'fff',
  borderLeft: '1px solid #fff',
  borderBottom: '1px solid #fff'
})

const CircleSteep = styled('div')({
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  position: "absolute",
  background: "#fff",
  top: "-20px",
  left: "-32px",
  textAlign: "center",
  color: "#0449ff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.3em",
  fontWeight: 'bold'
})

const VerticalLine = styled('div')({
  height: "71px",
  position: "absolute",
  borderLeft: "1px solid #fff",
  right: "0",
  bottom: "-71px"
})