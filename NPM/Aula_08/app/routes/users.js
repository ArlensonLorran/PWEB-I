const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log('Acessando a rota: (/users)')
    next()
})

router.get('/', (req, res) => {
    res.send('<h1>Você esta na rota Users</h1>')
})

router.get('/', function(req, res, next) {
  var characters =[
    {
      name: 'Harry',
      role: 'Student'
    },
    {
      name: 'Dumbledore',
      role: 'Headmaster'
    },
    {
      name: 'Snape',
      role: 'Professor'
    },
    {
      name: 'Hermione',
      role: 'Student'
    }
  ]
  var subheading = "I though we should involve some magic"
  
  res.render('users', {characters: characters, subheading: subheading})
})

router.get('/signup', (req, res) => {
    res.send(`<h1>Formulário de Cadastro</h1>
    <form method="POST" action="/users/signin">
        <label>Nome de Usuário: <input type="text" name="userID"/></label><br/>
        <button type="submit">Cadastrar</button>
    </form>`)
})

router.post('/signin', (req, res) => {
    const { userID } = req.body
    console.log(`Recebido via POST: userID=${userID}`)
    res.send(`<h1>Bem-vindo, ${userID}!</h1>`)
})

router.get('/:userID', (req, res) => {
    const userID = req.params.userID;
    res.send(`<h1>Você está visualizando o usuário de ID: ${userID}</h1>`)
})

module.exports = router
