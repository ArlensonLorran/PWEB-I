const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log('Acessando a rota: /users')
    next()
})

router.get('/', (req, res) => {
    res.send('<h1>Você esta na rota Users')
})

router.get('/singup', (req, res) => {

})

