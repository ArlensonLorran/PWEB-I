const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log('Acessando a rota: /about')
    next()
})

rounter.post('/', (req, res) => {
    
})