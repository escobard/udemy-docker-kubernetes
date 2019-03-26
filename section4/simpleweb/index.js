const express = require('express'),
port = 5000;

const app = express();

app.get('/', (req, res) =>{
    res.send('How are you');
});

app.listen(port, () =>{
    console.log(`Listening on ${port}`)
});