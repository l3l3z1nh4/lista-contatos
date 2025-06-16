import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type TituloProps = {
  estaEditando: boolean
}

export const Card = styled.div`
  padding: 16px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.31);
  margin-bottom: 32px;
  border-radius: 16px;
  border: 1px solid rgb(180, 177, 177);

  label {
    display: flex;
    align-items: center;
    cursor: pointer;

    span {
      padding-bottom: 8px;
      color: rgb(180, 177, 177);
      margin-right: 8px;
    }

    input {
      margin-right: 8px;
      width: 16px;
      height: 16px;
      cursor: pointer;
      margin-bottom: 8px;
      display: none;

      &:hover + span {
        color: ${variaveis.rosa50};
      }

      &:checked + span {
        color: ${variaveis.rosa90};
    }
  }
`

export const Titulo = styled.h3<TituloProps>`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${(props) => (props.estaEditando ? variaveis.rosa75 : '#333')};
`

export const Tag = styled.span`
  padding: 4px 8px;
  margin-right: 8px;
  font-size: 11px;
  font-weight: bold;
  border-radius: 8px;
  background-color: ${variaveis.rosa75};
  display: inline-block;
  color: #ffffff;
  margin-bottom: 6px;
`

export const Campo = styled.input`
  color: #5b5b5b;
  font-size: 14px;
  line-height: 24px;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const InfoDisplay = styled.p`
  color: #5a5a5a;
  font-size: 14px;
  line-height: 24px;
  margin-top: 8px;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid #9f9f9f;
  padding-top: 16px;
  margin-top: 8px;
`
