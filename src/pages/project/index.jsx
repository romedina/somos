import React from 'react'
import  portfolio from '../../portfolio'
import { Redirect } from 'react-router-dom'
import Container from '../../components/container'
import Header from './header'
import { PictureCover, Icon, Description, Flex, PictureContainer, Figure } from './styled'
import { Text } from '../../components/main'

const Proyect = props => {

  const { id } = props.match.params
  const project = portfolio.filter(project => project.id === id)[0]

  if (!project) return (<Redirect to='/' />)

  return (
    <>
      <Container>
        <Header title={project.title} />
      </Container>
      <PictureCover src={project.picture} />
      <Container maxWidth='1000px'>
        <Flex>
          <Icon src={project.icon} />
          <Description>
            {project.description.map((item, index) => (<Text key={index}>{item}</Text>))}
          </Description>
        </Flex>
        <PictureContainer>
          {project.pictures.map((pic, index) => (
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
