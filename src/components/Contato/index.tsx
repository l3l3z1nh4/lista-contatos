import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as enums from '../../utils/enums/Contato'
import * as S from './styles'
import { remover, editar, alteraStatus } from '../../store/reducers/contatos'
import { Botao } from '../../styles'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  descricao: descricaoOriginal,
  prioridade,
  status,
  titulo,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')
  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  function alteraStatusContato(evento: ChangeEvent<HTMLInputElement>) {
    console.log(evento.target.checked)
    dispatch(
      alteraStatus({
        id,
        finalizado: evento.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === enums.Status.FAVORITOS}
          onChange={alteraStatusContato}
        />
        <span className="material-icons-round">star</span>
        <S.Titulo>
          {estaEditando && <em>Editando:</em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>

      <S.Descricao
        disabled={!estaEditando}
        placeholder="Número de telefone"
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <Botao
              onClick={() => {
                dispatch(editar({ descricao, prioridade, status, titulo, id }))
                setEstaEditando(false)
              }}
            >
              Salvar
            </Botao>
            <Botao onClick={() => cancelarEdicao()}>Cancelar</Botao>
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
