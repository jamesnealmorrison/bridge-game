import styled from 'styled-components'

export const PageWrap = styled.div`
  background-color: blue;
  position: relative;
  display: grid;
  font-size: 1.25rem;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 200px 100px 325px 100px 200px;
  font-weight: normal;
  grid-column: 1/4;
  grid-row: 2;
`
