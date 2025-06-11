import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Tarefa'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function retonaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'status') {
    if (props.status === enums.Status.PENDENTE) return variaveis.rosa100
    if (props.status === enums.Status.CONCLUIDA) return variaveis.rosa20
  } else {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.rosa100
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.rosa75
  }
  return variaveis.rosa50
}

function retornaCorDoTexto(props: TagProps): string {
  if (props.parametro === 'status' && props.status === enums.Status.CONCLUIDA) {
    return variaveis.rosa75
  }
  return '#ffffff'
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

    input {
      margin-right: 8px;
      width: 16px;
      height: 16px;
      cursor: pointer;
      margin-bottom: 8px;

      &:checked {
        accent-color: #777;
      }

      &:checked + span {
        text-decoration: line-through;
        color: #8b8b8b;
    }
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  margin-right: 8px;
  font-size: 11px;
  font-weight: bold;
  border-radius: 8px;
  background-color: ${(props) => retonaCorDeFundo(props)};
  display: inline-block;
  color: ${(props) => retornaCorDoTexto(props)};
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  display: block;
  width: 100%;
  marggin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid #9f9f9f;
  padding-top: 16px;
  margin-top: 8px;
`
