import { ButtonBase } from '@material-ui/core'
import { Link as Hash } from 'react-scroll';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components'
import React from 'react'
import { useLocation } from 'react-router-dom'

const MenuItem = props => {
  const { pathname } = useLocation()

  if (props.to.includes('portfolio')) return (<Link to={`/${props.to}`}><Button>{props.children}</Button></Link>)
 
  if (pathname !== '/') return (<Link to={`/#${props.to}`}><Button>{props.children}</Button></Link>)

  return ( <Hash to={props.to} smooth={true} duration={500}><Button>{props.children}</Button></Hash>)

}

const Button = styled(ButtonBase)`
  
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

export default MenuItem
