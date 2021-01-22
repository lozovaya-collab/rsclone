const express = require('express')
const mongoose = require('mongoose')
const todoRoutes = require('./main')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static("dist"));
app.use('/', todoRoutes)
app.use('/restaurants', todoRoutes)
app.use('/sign-up', todoRoutes)
app.use(express.urlencoded({ extended: false }))

mongoose.connect('mongodb+srv://anyaloza:anyalozovaya081299@cluster0.usrbl.mongodb.net/users?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

app.listen(PORT, console.log(`Server started on port ${PORT}`))