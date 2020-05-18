import styled from 'styled-components'

export const Content = styled.div`
  color: initial;
  text-decoration: none;
  width: ${props => props.fullWidth ? '100%' : '48%'};
  margin-bottom: 50px;
  @media screen and (max-width:500px) {
    width: 100%;
  }
`
export const Picture = styled.img`
  max-width: 100%;
  min-height: 500px;
  object-fit: cover;
  @media screen and (max-width:800px) {
    min-height: 300px;
  }
`
export const Describe = styled.div`
  
`