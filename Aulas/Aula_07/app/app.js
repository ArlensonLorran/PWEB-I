const express = require(`express`);
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const indexRouter = require('./routes/index')
const aboutRouter = require('./routes/about')
const dataRouter = require('./routes/data')
const usersRouter = require('./routes/users')

app.use('/', indexRouter)
app.use('/data', dataRouter)
app.use('/users', usersRouter)
app.use('/about', aboutRouter)

app.use((req, res) => {
    res.status(404).send(`<h1>404 - Página não encontrada</h1>`)
})

app.listen(port, () => {
    console.log(`Servidor: http://localhost:${port}`)
})
