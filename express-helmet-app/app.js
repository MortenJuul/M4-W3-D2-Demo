'use strict'

const express = require('express')
const helmet = require('helmet');
const app = express()
const port = 3000

app.use(helmet());

app.get('/', (req, res) => {
    console.log('route \'/\' called!');
    res.send({res: 'Sending 200 as response'});
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))