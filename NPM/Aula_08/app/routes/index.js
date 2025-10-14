const express = require(`express`);
const router = express.Router();

const routeName = function(req, res, next) {
    console.log('Acessando a rota: (/)');
    next();
}

router.use(routeName);

router.get('/', (req, res) => {
    res.render('index.ejs')
});

module.exports = router
