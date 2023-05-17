const express = require('express')
const PORT = require('./src/config')
const router = require('./src/routes')
const global = require('./src/Global')
const app = express();

app.use('/',router);

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
    // console.log('Id: '+global.Client_Id);
    // console.log(global.Client_L);
})