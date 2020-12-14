import axios from 'axios'

export const urlbaseApi = 'https://desafiomalweeapi.azurewebsites.net'

export const apiMalwee = axios.create({
    baseURL: `${urlbaseApi}/`,
    headers: {
        'content-type': 'application/json'
    },

})

export function dadosUser() {
    let token = JSON.parse(localStorage.getItem('stgDesafioMalwee'))
    if (token !== null) {
        let corretor = {
            id: token.Id,
            nome: token.Nome
        }
        return corretor
    }
}

export const tipoServico = [
    {
        id: 0,
        value: 'TODOS'
    },{
        id: 1,
        value: 'Jardinagem'
    },
    {
        id: 2,
        value: 'Hidraulico'
    },
    {
        id: 3,
        value: 'Eletrico'
    },
    {
        id: 4,
        value: 'Impermeabilizacao'
    },
    {
        id: 5,
        value: 'Dedetizacao'
    },
]