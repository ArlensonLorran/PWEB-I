var express = require(`express`)
var path = require('path')
var app = express()
var port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile)

const indexRouter = require('./routes/index')
const magicRouter = require('./routes/magic')
const aboutRouter = require('./routes/about')
const dataRouter = require('./routes/data')
const usersRouter = require('./routes/users')

app.use('/', indexRouter)
app.use('/magic', magicRouter)
app.use('/data', dataRouter)
app.use('/users', usersRouter)
app.use('/about', aboutRouter)

app.use((req, res) => {
    res.status(404).send(`<h1>404 - Página não encontrada</h1>`)
})

app.listen(port, () => {
    console.log(`Servidor: http://localhost:${port}`)
})

module.exports = app