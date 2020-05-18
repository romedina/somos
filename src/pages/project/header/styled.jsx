import styled from 'styled-components'

export const Content = styled.div`
  font-size: 4em;
  text-align: center;
  color: var(--blue);
  padding: 50px 0px;
  font-weight: bold;
  @media screen and (max-width:700px) {
    font-size: 3em;  
  }
  @media screen and (max-width:500px) {
    font-size: 2em;  
  }
`
export const Sign = styled.span`
  font-size: 1.2em;
`
export const Title = styled.span`
  font-family: var(--font-project-title);
  font-weight: normal;
`