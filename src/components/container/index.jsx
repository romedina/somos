import styled from 'styled-components'

const Container = styled.div`
  padding: 10px;
  max-width: ${p => p.maxWidth || '1200px'};
  margin: auto;
  ${p => p.center ? 'text-align: center' : ''};
`

export default Container

