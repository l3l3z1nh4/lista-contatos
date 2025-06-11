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
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
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
          <li key={c.titulo}>
            <Contato
              id={c.id}
              titulo={c.titulo}
              prioridade={c.prioridade}
              status={c.status}
              descricao={c.descricao}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}
export default ListaDeContatos
