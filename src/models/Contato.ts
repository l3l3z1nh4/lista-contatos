import * as enums from '../utils/enums/Contato'

class Contato {
  nome: string
  sobrenome?: string
  prioridade: enums.Prioridade
  status: enums.Status
  telefone: number
  id: number
  email?: string

  constructor(
    nome: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    telefone: number,
    id: number,
    sobrenome?: string,
    email?: string
  ) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.prioridade = prioridade
    this.status = status
    this.telefone = telefone
    this.id = id
    this.email = email
  }
}

export default Contato
