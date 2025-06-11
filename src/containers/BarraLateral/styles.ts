import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: rgba(74, 74, 74, 0.25);
  height: 100vh;

  @media (max-width: 600px) {
    padding: 16px 8px;
  }
`
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
