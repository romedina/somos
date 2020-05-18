import styled from 'styled-components'

export const Text = styled.p`
  font-family: CircularStdBook, Arial;
  font-weight: normal;
  color: ${p => p.color || '#000'};
  line-height: 1.6em;
  font-size: ${p => p.fontSize || '1em'};
`
export const FullWhidthColor = styled.div`
  background-color: ${props => { 
    if (props.color === 'blue') return 'var(--blue)' 
  }};
`

export const PrimaryText = styled.div`
  font-family: CircularStdBook, Arial;
  font-weight: normal;
  color: ${p => p.color || '#000'};
  font-size: ${p => p.fontSize || '1.5em'};
`
