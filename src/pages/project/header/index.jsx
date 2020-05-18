import React from 'react'
import { Content, Sign, Title } from './styled'

const Header = props => {
  return (
    <Content>
      SOM<Sign>(</Sign><Title>{props.title}</Title><Sign>)</Sign>S
    </Content>
  )
}

export default Header