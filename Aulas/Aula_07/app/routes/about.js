const express = require('express')
const router = express.Router()

const routeName = function(req, res, next) {
    console.log('Acessando a rota: (/about)');
    next();
}

router.use(routeName)

router.get('/', (req, res) => {
    res.send('<h1>Você esta na rota About</h1>')
})

module.exports = router
