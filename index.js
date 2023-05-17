const express = require('express')
const PORT = require('./src/config')
const router = require('./src/routes')

const app = express();

app.use('/',router);

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})