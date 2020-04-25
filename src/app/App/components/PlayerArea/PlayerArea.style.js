import styled from 'styled-components'

export const PlayerAreaLayout = styled.div`
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'white'};
  font-size: 1.25rem;
  font-weight: normal;
  grid-column: ${p => p.gridColumn};
  grid-row: ${p => p.gridRow};
  display: flex;
  flex: 1;
  flex-direction: ${p => p.flexDirection}
`
