import React from 'react'
import { styled } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import StarIconMaterial from '@material-ui/icons/Star';

const BodyServices = (props) => {
  return (
    <Container>
      <Content>
        <Row>
         <Box>
            <TitleContainer>
              <Title>Logotipo:</Title>
              <Line />
            </TitleContainer>
            <Description>¿Necesitas identificar tu negocio o producto? </Description>
         </Box>
          <Starts>
            <StartIcon>
              <StarIconMaterial/>
            </StartIcon>
            Distínguete de la competencia
          </Starts>
        </Row>
        <Row>
         <Box>
            <TitleContainer>
              <Title>Pagina web:</Title>
              <Line />
            </TitleContainer>
            <Description>¿Tus productos o servicios no tienen presencia en línea?</Description>
         </Box>
         <Starts>
           <StartIcon>
             <StarIconMaterial/>
           </StartIcon>
          Comienza a llegar a más clientes
         </Starts>
        </Row>
        <Row>
          <Box>
            <TitleContainer>
              <Title>Tienda en línea:</Title>
              <Line />
            </TitleContainer>
            <Description>¿Tuviste que cerrar tu negocio?</Description>
          </Box>
          <Starts>
            <StartIcon>
              <StarIconMaterial/>
            </StartIcon>
            Vende tus productos a distancia
          </Starts>
        </Row>
        <Row>
          <Box>
            <TitleContainer>
              <Title>Citas virtuales:</Title>
              <Line />
            </TitleContainer>
            <Description>¿No puedes recibir a tus clientes?</Description>
          </Box>
          <Starts>
            <StartIcon>
              <StarIconMaterial/>
            </StartIcon>
           Da consultas a través de citas virtuales
          </Starts>
        </Row>
        <Row>
          <Box>
            <TitleContainer>
              <Title>Publicidad en redes sociales:</Title>
              <Line />
            </TitleContainer>
            <Description>¿Te preocupa perder a tus clientes?</Description>
          </Box>
          <Starts>
            <StartIcon>
              <StarIconMaterial/>
            </StartIcon>
            Genera posibles clientes
          </Starts>
        </Row>
        <Row>
          <LastBox>
            <TitleContainer>
              <Title>Asesoría personalizada:</Title>
              <Line />
            </TitleContainer>
            <Description>¿Desconoces cómo usar las herramientas digitales?</Description>
            <BorderLast />
          </LastBox>
          <Starts>
            <StartIcon>
              <StarIconMaterial/>
            </StartIcon>
           Aprende a sacar provecho de esta situación
          </Starts>
        </Row>
      </Content>
    </Container>
  )
}

export default BodyServices

const Container = styled('div')({
  color: 'gray',
  background: '#fff'
})

const Content = styled('div')({
  color: 'gray',
  maxWidth: '1080px',
  padding: '0px 10px',
  margin: 'auto',
  fontFamily: 'CircularStdBook, Arial', 
  paddingLeft: '50px',
  ['@media screen and (max-width:700px)']: {
    paddingLeft: '20px'
  }
  
})

const Row = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  ['@media screen and (max-width:700px)']: {
    flexDirection: 'column'
  }
})

const Box = styled('div')({
  width: '75%',
  boxSizing: 'border-box',
  borderRight: '1px solid #0449ff',
  padding: '35px 10px',
  ['@media screen and (max-width:700px)']: {
    border: 'none',
    width: '100%',
    padding: '10px',
  }
})

const LastBox = styled(Box)({
  borderRight: 'none',
  position: 'relative'
})

const BorderLast = styled('div')({
  borderLeft: "1px solid #0449ff",
  height: "60px",
  position: "absolute",
  top: "0px",
  right: "0px"
})

const Starts = styled('div')({
  width: "25%",
  position: "relative",
  color: "#000",
  fontSize: "1.3em",
  padding: "38px",
  ['@media screen and (max-width:700px)']: {
    width: '80%',
    padding: '20px 10px 50px 60px'
  }
})

const StartIcon = styled('div')({
  top: "37px",
  left: "-22px",
  width: "45px",
  height: "45px",
  position: "absolute",
  background: "#0449ff",
  borderRadius: "50%",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ['@media screen and (max-width:700px)']: {
    top: '15px',
    left: '10px',
  }
})

const TitleContainer = styled('div')({
  display: 'flex',
})

const Title = styled(Typography)({
  fontSize: '1.8em',
  color: '#0449ff',
  fontWeight: 'bold',
})

const Line = styled('div')({
  flex: "1 1 auto",
  borderBottom: "1px solid #d8d8d8",
  marginLeft: "10px",
  marginBottom: "10px",
  ['@media screen and (max-width:700px)']: {
    display: 'none'
  }
  
})

const Description = styled('div')({
  color: 'gray',
  fontSize: '1.7em',
  width: '60%',
  ['@media screen and (max-width:700px)']: {
    width: '100%'
  }
})