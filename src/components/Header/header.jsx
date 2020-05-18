import React, { useState } from 'react';
import { ButtonBase } from '@material-ui/core'
import CircularLogo from '../../assets/circularLogo.svg';
import { ContactModal } from '../ContactModal/contactModal';
import styled, { keyframes } from 'styled-components'
import MenuItem from './Link'
import Container from '../../components/container'
import { FullWhidthColor } from '../../components/main'
import { useLocation } from 'react-router-dom'
import Responsive from '../responsive'

export function Header() {
  const [isContactVisible, setIsContactVisible] = useState(false);
  const { pathname } = useLocation()


  return (
    <FullWhidthColor color='blue'>
      <Content maxWidth='1000px'>
        <Logo src={CircularLogo} alt='logo' />
          <Responsive rule='min-width:800px'>
            <MenuItem to='iniciativa'>iniciativa</MenuItem>
            <MenuItem to='somos'>somos</MenuItem>
            <MenuItem to='yourproject'>Tu Proyecto</MenuItem>
            <MenuItem to='beneficios'>Beneficios</MenuItem>
            <MenuItem to='portfolio'>portafolio</MenuItem>
          </Responsive>
          <Responsive rule='max-width:799px'>
            {pathname === '/' && (<MenuItem to='portfolio'>portafolio</MenuItem>)}
            {pathname !== '/' && (<MenuItem to='/'>Inicio</MenuItem>)}
          </Responsive>
          <Button onClick={ event => setIsContactVisible(true)} variant='outlined' size='medium'>Contacto</Button>
      </Content>
      <ContactModal open={isContactVisible} handleClose={event => setIsContactVisible(false)} />
    </FullWhidthColor>
  )
}

const Content = styled(Container)`
  padding: 20px 10px;
  background: var(--blue);
  display: flex;
  justify-content: space-between;
  align-items: center;
  & a {
    text-decoration: none;
  }
`
const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(359deg); }
`
const Logo = styled.img`
  display: block;
  animation: ${rotate} 7s infinite;
  width: 80px;
  height: 80px;
  @media screen and (max-width:500px){
    width: 60px;
    height: 60px;
  }
`
const Button = styled(ButtonBase)`
  border: 2px solid #fff;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  border-radius: 50px;
  text-transform: uppercase;
  font-weight: bold;
  &:hover {
    background-color: rgb(4, 70, 245);
  }
`

export default Header
