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
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState<string | undefined>('')
  const [email, setEmail] = useState<string | undefined>('')
  const [telefone, setTelefone] = useState(0)
  const [prioridade, setPrioridade] = useState(enums.Prioridade.TRABALHO)

  const CadastraContato = () => (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        sobrenome,
        email,
        prioridade,
        telefone,
        status: enums.Status.COMUNS
      })
    )

    setNome('')
    setSobrenome('')
    setEmail('')
    setTelefone(0)
    setPrioridade(enums.Prioridade.TRABALHO)

    navigate('/')
  }

  return (
    <MainContainer>
      <Form onSubmit={CadastraContato()}>
        <Titulo as="h2">Cadastro de Contato</Titulo>
        <Input
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome"
          required
        />
        <Input
          value={sobrenome}
          onChange={(evento) => setSobrenome(evento.target.value)}
          type="text"
          placeholder="Sobrenome"
        />

        <Input
          id="telefone"
          value={telefone}
          placeholder="Telefone"
          onChange={(evento) => setTelefone(parseInt(evento.target.value) || 0)}
          type="number"
        />
        <Input
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          placeholder="E-mail"
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
