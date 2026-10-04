import express from 'express'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 4000

app.get('/',(req,res)=>{
    res.send('<h1>hello world</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h2>About</h2>')
})

app.get('/contact',(req,res)=>{
    res.send('<h2>Contact</h2>')
})

app.listen(PORT,()=>{
    console.log(`server started on ${app.get('env')} mode at https://localhost:${PORT}`)
})