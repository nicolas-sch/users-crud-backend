const express = require('express')
const uuid = require('uuid')

const app = express()
app.use(express.json())

const users = []

app.get('/users', (request, response) => {
    return response.json(users)
})

app.post('/users', (request, response) => {
    const{ name, age } = request.body

    const user = {id:uuid.v4(), name, age}

    users.push(user)

    return response.status(201).json(user)
})

app.listen(3000, () => {
    console.log('Server started on port 3000🚀')
})