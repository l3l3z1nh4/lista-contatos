import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as enums from '../../utils/enums/Contato'
import * as S from './styles'
import { remover, editar, alteraStatus } from '../../store/reducers/contatos'
import { Botao } from '../../styles'

import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  sobrenome: sobrenomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  prioridade,
  status,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState<string | undefined>('')
  const [email, setEmail] = useState<string | undefined>('')
  const [telefone, setTelefone] = useState(0)

  useEffect(() => {
    setNome(nomeOriginal)
    setSobrenome(sobrenomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }, [nomeOriginal, sobrenomeOriginal, emailOriginal, telefoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setSobrenome(sobrenomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  function alteraStatusContato(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alteraStatus({
        id,
        finalizado: evento.target.checked
      })
    )
  }

  function salvarEdicao() {
    dispatch(
      editar({
        id,
        nome,
        sobrenome,
        email,
        telefone,
        prioridade,
        status
      })
    )
    setEstaEditando(false)
  }

  const formatarTelefone = (numero: number | string): string => {
    if (numero.toString().length === 0) {
      return ''
    }

    return `(${numero.toString().substring(0, 2)}) ${numero
      .toString()
      .substring(2, 7)}-${numero.toString().substring(7, 11)}`
  }
  const nomeCompletoExibicao = `${nomeOriginal} ${
    sobrenomeOriginal || ''
  }`.trim()
  const nomeCompletoEdicao = `${nome} ${sobrenome || ''}`.trim()

  return (
    <S.Card>
      <label htmlFor={id.toString()}>
        <input
          type="checkbox"
          id={id.toString()}
          checked={status === enums.Status.FAVORITOS}
          onChange={alteraStatusContato}
        />
        <span className="material-icons-round">star</span>
        <S.Titulo estaEditando={estaEditando}>
          {estaEditando && <em> (Editando) </em>}
          {estaEditando ? nomeCompletoEdicao : nomeCompletoExibicao}
        </S.Titulo>
      </label>
      <S.Tag>{prioridade}</S.Tag>

      {estaEditando ? (
        <>
          <S.Campo
            id={`nome-${id}`}
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <S.Campo
            id={`sobrenome-${id}`}
            placeholder="Sobrenome"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />

          <S.Campo
            id={`telefone-${id}`}
            placeholder="Telefone"
            type="number"
            value={telefone}
            onChange={(e) => setTelefone(parseInt(e.target.value) || 0)}
          />

          <S.Campo
            id={`email-${id}`}
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </>
      ) : (
        <>
          {telefone !== 0 && (
            <S.InfoDisplay>{formatarTelefone(telefone)}</S.InfoDisplay>
          )}
          {email && <S.InfoDisplay>{email}</S.InfoDisplay>}
        </>
      )}

      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <Botao onClick={salvarEdicao}>Salvar</Botao>
            <Botao onClick={cancelarEdicao}>Cancelar</Botao>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <Botao onClick={() => dispatch(remover(id))}>Remover</Botao>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
