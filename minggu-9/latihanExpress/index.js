const express = require('express');
const app = express();
const port = 2409;

app.get('/', (req, res) =>{
    res.send('Hello aku Akmal');
})

app.listen(port, () => console.log(`App listen on port ${port}`))       