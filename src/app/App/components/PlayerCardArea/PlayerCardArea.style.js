import styled from 'styled-components'

export const PlayerCardAreaLayout = styled.div`
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'white'};
  font-size: 1.25rem;
  font-weight: normal;
  display: flex;
  flex: 1;
  flex-direction: ${p => p.flexDirection}
`
