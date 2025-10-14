const express = require('express')
const router = express.Router()

router.use('/', (req, res, next) => {
    console.log('Acessando a rota: (/magic)')
    next()
})

router.get('/', function(req, res) {
    res.send('<h1>Você esta na rota Magic</h1>')
})

module.exports = router