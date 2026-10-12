import express from 'express'
import 'dotenv/config'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('<h1>hello world</h1>')
})

app.get('/product', (req, res) => {
    const PRODUCTS = [
        {
            id: 1,
            title: 'A product one',
            content: 'ProductOne'
        },
        {
            id: 2,
            title: 'A product two',
            content: 'ProductTwo'
        },
        {
            id: 3,
            title: 'A product three',
            content: 'ProductThree'
        },
        {
            id: 4,
            title: 'A product four',
            content: 'ProductFour'
        },
        {
            id: 5,
            title: 'A product five',
            content: 'ProductFive'
        }
    ]
    res.send(PRODUCTS)
})

app.get('/about', (req, res) => {
    res.send('<h2>About</h2>')
})

app.get('/contact', (req, res) => {
    res.send('<h2>Contact</h2>')
})

app.listen(PORT, () => {
    console.log(`server started on ${app.get('env')} mode at https://localhost:${PORT}`)
})
