import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Botao, MainContainer, Titulo } from '../../styles/index'
import { Input } from '../../styles/index'
import { Form, Opcao, Opcoes } from './styles'
import * as enums from '../../utils/enums/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.TRABALHO)

  const CadastraContato = () => (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.COMUNS
      })
    )

    setTitulo('')
    setDescricao('')
    setPrioridade(enums.Prioridade.TRABALHO)
    navigate('/')
  }

  return (
    <MainContainer>
      <Form onSubmit={CadastraContato()}>
        <Titulo as="h2">Cadastro de Contato</Titulo>
        <Input
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Título"
        />
        <Input
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          as="textarea"
          placeholder="email"
        />
        <Opcoes>
          <p>Prioridade:</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.TRABALHO}
              />
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <Botao type="submit">Cadastrar</Botao>
      </Form>
    </MainContainer>
  )
}
export default Formulario
