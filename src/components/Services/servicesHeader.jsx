import React from 'react'
import { styled } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import StarIconMaterial from '@material-ui/icons/Star';

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
        <LatestCircleSteep>
          <StarIconMaterial />
        </LatestCircleSteep>
          Realizamos tu proyecto en tiempo record
          <VerticalLine />
        </Box>
      </Content>
    </Container>
  )
}

export default ServicesHeader

const Title = styled(Typography)({
  fontSize: '3m',
  width: '100%',
  color: '#000',
  textAlign: 'left',
  marginBottom: '80px',
  fontWeight: 'bold',
  ['@media screen and (max-width:700px)']: {
    fontSize: '2em',
    textAlign: 'center'
  }

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
  ['@media screen and (max-width:700px)']: {
    paddingLeft: '40px'
  }

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
  borderBottom: '1px solid #fff',
  ['@media screen and (max-width:700px)']: {
    borderBottom: 'none',
    width: '100%',
    paddingLeft: '40px',
    paddingTop: '10px',
    paddingBottom: '50px',
    '&:last-of-type': {
      paddingBottom: '100px'
    }
  }
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
  fontWeight: 'bold',
  ['@media screen and (max-width:700px)']: {
    width: "50px",
    height: "50px",
    top: '0px',
    left: '-26px',
  }
})

const LatestCircleSteep = styled(CircleSteep)({
  display: 'none',
  ['@media screen and (max-width:700px)']: {
    display: 'flex',
    bottom: '-10px!important',
    top: 'auto',
  }
})

const VerticalLine = styled('div')({
  height: "71px",
  position: "absolute",
  borderLeft: "1px solid #fff",
  right: "0",
  bottom: "-71px",
  ['@media screen and (max-width:700px)']: {
    display: 'none'
  }

})