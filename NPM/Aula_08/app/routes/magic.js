const express = require('express')
const router = express.Router()

router.use('/', (req, res, next) => {
    console.log('Acessando a rota: (/magic)')
    next()
})

router.get('/', function(req, res) {
    res.render('magic.ejs')
})

module.exports = router