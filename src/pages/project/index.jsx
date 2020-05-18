import React from 'react'
import  portfolio from '../../portfolio'
import { Redirect } from 'react-router-dom'
import Container from '../../components/container'
import Header from './header'
import { PictureCover, Icon, Description, Flex, PictureContainer, Figure } from './styled'
import { Text } from '../../components/main'

const Proyect = props => {

  const { id } = props.match.params
  const data = portfolio[id]
  

  if (!data) return (<Redirect to='/' />)

  return (
    <>
      <Container>
        <Header title={data.title} />
      </Container>
      <PictureCover src={data.picture} />
      <Container maxWidth='1000px'>
        <Flex>
          <Icon src={data.icon} />
          <Description>
            {data.description.map((item, index) => (<Text key={index}>{item}</Text>))}
          </Description>
        </Flex>
        <PictureContainer>
          {data.pictures.map((pic, index) => (
            <Figure {...pic} key={index}>
              <PictureCover {...pic} />
            </Figure>
          ))}
        </PictureContainer>
      </Container>
    </>
  )
}

export default Proyect
