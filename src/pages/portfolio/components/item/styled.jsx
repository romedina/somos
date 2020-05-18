import styled from 'styled-components'

export const Content = styled.div`
  color: initial;
  text-decoration: none;
  width: ${props => props.fullWidth ? '100%' : '48%'};
  margin-bottom: 50px;
  transition: all 0.5s;
  border: 1px solid var(--blue);
  &:hover {
    box-shadow: 8px 8px 8px rgba(0,0,0,0.4);
  }
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
  padding: 5px;
`