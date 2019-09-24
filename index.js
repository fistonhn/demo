const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('it is working');
});


app.get('/user', (req, res) => {
    res.send('fiston is coming');
});

app.listen(3000, () => { console.log('listening on port 30000')});