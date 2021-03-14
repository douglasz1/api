const express = require('express')
const routes = express.Router()


let db = [
    { '1': { Nome: 'Cliente 1', Idade: '20' } },
    { '2': { Nome: 'Cliente 1', Idade: '20' } },
    { '3': { Nome: 'Cliente 1', Idade: '20' } },
]

// Buscar Dados
routes.get('/', (req, res) => {
    return res.json(db)
})

// Inserir Dados
routes.get('/add', (req, res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()
    
    db.push(body)
    return res.json(body)
})



module.exports = routes