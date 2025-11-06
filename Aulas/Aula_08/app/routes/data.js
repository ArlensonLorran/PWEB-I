const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log('Acessando a rota: (/data)')
    next()
})

router.get('/', (req, res) => {
    res.render('data.ejs')
})

router.post('/', (req, res) => {
    const { userId } = req.body 
    console.log(`Recebido via POST: userId=${userId}`)

    res.json({
        mensagem: 'Dados recebidos com sucesso!',
        dados: { userId }
    })
})

module.exports = router
