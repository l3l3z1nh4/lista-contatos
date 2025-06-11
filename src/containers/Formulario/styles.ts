import styled from 'styled-components'

export const Form = styled.form`
  max-width: 900px;
  width: 100%;

  textarea {
    resize: none;
  }
`
export const Opcoes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
      align-items: flex-start;
  }
  label {
    font-weight: 600;
    font-size: 14px;
    color: #2c2c2c;
  }
  input[type='radio'] {
    margin-right: 8px;

    &:checked {
      accent-color:rgb(255, 0, 132);
  }

`
export const Opcao = styled.div`
  text-transform: capitalize;
  display: flex;

  &:hover {
    p, label {
      color: rgb(233, 1, 121);
    }

    input{
    cursor: pointer;}
`
