const express = require(`express`);
const app = express();
const port = 0101;

const indexRouter = require('/routes/index')
const dataRouter = require('/routes/data')
const usersRouter = require('/routes/users')

app.use('/', indexRouter)
app.use('/data', dataRouter)
app.use('/users', usersRouter)

app.use((req, res) => {
    res.status(404).send(`<h1>404 - Página não encontrada<h1>`)
})

app.listen(port, () => {
    console.log(`Servidor: http:/localhost:${port}`)
})
