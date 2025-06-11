import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Space Mono", monospace;
    list-style: none;
  } `

export const Container = styled.div`
  display: grid;
  grid-template-columns: 15em auto;

  @media (max-width: 600px) {
    grid-template-columns: 7em auto;
  }
`
export const MainContainer = styled.main`
  padding: 16px 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  margin-bottom: 16px;
`
export const Input = styled.input`
  width: 100%;
  border-radius: 8px;
  padding: 8px;
  border: 1px solid #a1a1a1;
  font-weight: bold;
  margin-bottom: 16px;

  &:focus {
    border: 1px solid #a1a1a1;
    outline: 2px solid #e90179;
    color: #2c2c2c;
  }
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #ffff;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  margin-right: 8px;
  cursor: pointer;
  background-color: rgb(65, 65, 65);
  &:hover {
    background-color: rgba(233, 1, 121, 0.6);
  }
`

export default EstiloGlobal
