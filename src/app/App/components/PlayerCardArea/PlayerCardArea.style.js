import styled from 'styled-components'

export const PlayerCardAreaLayout = styled.div`
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'lightblue'};
  font-size: 1.25rem;
  font-weight: normal;
  display: flex;
  flex-wrap: wrap;
`
