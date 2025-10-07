const express = require(`express`);
const router = express.Router();

const routeName = function(req, res, next) {
    console.log('Acessando a rota: /');
    next();
}

router.use(routeName);

router.get('/', (req, res) => {
    res.send('<h1>Você esta na rota /<h1>')
});

router.get('/about', (req, res) => {
    res.send('<h1>Você esta na rota /about<h1>')
})

module.exports = router