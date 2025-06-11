import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  color: ${(props) => (props.ativo ? '#e90178' : '#5e5e5e')};
  border: 1px solid ${(props) => (props.ativo ? '#e90178' : '#a1a1a1')};
  border-radius: 8px;
  background-color: #fcfcfc;
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 04px;

    text-align: center;
  }
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`

export const Label = styled.span`
  font-size: 11px;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`
