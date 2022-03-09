//create express http server
const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config()
const routes = require('./routes/index')

const app = express();
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
})

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public'))
app.use(express.static('./tmp'))

// main back-end routes
app.use('/api', routes)

// start server
const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log('server is running on', port)
})

