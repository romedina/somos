import React from 'react'
import { Content, Picture, Describe } from './styled'
import { PrimaryText } from '../../../../components/main'
import { Link } from 'react-router-dom'

const Item = props => {
  return (
    <Content fullWidth={props.fullWidth || false} as={props.id ? Link : 'div'} to={`/portfolio/${props.id}`}>
      <Picture src={props.thumb} />
      <Describe>
        <PrimaryText color='white' >{props.title}</PrimaryText>
        <PrimaryText color='#cdcdcd' >{props.type}</PrimaryText>
      </Describe>
    </Content>
  )
}

export default Item
