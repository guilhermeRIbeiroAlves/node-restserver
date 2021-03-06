require('./config/config')







const express = require('express')
const app = express()
const mongoose = require('mongoose');

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'))

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true },
    (err, res) => {

        if (err) throw err;

        console.log('base de datos online')
    });



app.listen(process.env.PORT, () => {
    console.log('escuchando puertooo:', 3000)
})