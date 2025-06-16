import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { MainContainer, Titulo } from '../../styles/index'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      const termoLower = termo.toLowerCase()
      contatosFiltrados = contatosFiltrados.filter(
        (item) =>
          item.nome.toLowerCase().search(termoLower) >= 0 ||
          (item.sobrenome?.toLowerCase().search(termoLower) ?? -1) >= 0
      )

      if (criterio === 'prioridade') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.status === valor
        )
      }

      return contatosFiltrados
    } else {
      return itens
    }
  }

  const contatosFiltrados = filtraContatos()

  return (
    <MainContainer>
      <Titulo as="h2">Contatos</Titulo>
      <Titulo as="p">
        {`${
          valor !== undefined
            ? ` ${contatosFiltrados.length} conato(s) marcado(s) como ${valor}" `
            : ''
        }`}
      </Titulo>

      <ul>
        {contatosFiltrados.map((c) => (
          <li key={c.id}>
            <Contato
              id={c.id}
              nome={c.nome}
              prioridade={c.prioridade}
              status={c.status}
              telefone={c.telefone}
              sobrenome={c.sobrenome}
              email={c.email}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}
export default ListaDeContatos
