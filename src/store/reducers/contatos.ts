import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}
const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      telefone: 11987654321,
      prioridade: enums.Prioridade.TRABALHO,
      status: enums.Status.COMUNS,
      email: 'ana@gmail.com',
      nome: 'Ana'
    },

    {
      id: 2,
      telefone: 31998765432,
      prioridade: enums.Prioridade.FAMILIA,
      status: enums.Status.FAVORITOS,
      email: 'paula@gmail.com',
      sobrenome: 'Pimenta',
      nome: 'Paula'
    },

    {
      id: 3,
      telefone: 21912345678,
      prioridade: enums.Prioridade.AMIGOS,
      status: enums.Status.FAVORITOS,
      email: 'julia@gmail.com',
      sobrenome: 'Brandao',
      nome: 'Julia'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const nomeCompletoNovo = `${action.payload.nome.toLowerCase()} ${
        action.payload.sobrenome?.toLowerCase() || ''
      }`.trim()
      const contatoJaExiste = state.itens.find((contato) => {
        const nomeCompletoExistente = `${contato.nome.toLowerCase()} ${
          contato.sobrenome?.toLowerCase() || ''
        }`.trim()
        return nomeCompletoExistente === nomeCompletoNovo
      })

      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato =
          state.itens.length > 0 ? state.itens[state.itens.length - 1] : null

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.unshift(contatoNovo)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDoContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato].status = action.payload.finalizado
          ? enums.Status.FAVORITOS
          : enums.Status.COMUNS
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } =
  contatosSlice.actions
export default contatosSlice.reducer
