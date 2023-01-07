const express = require('express');
const app = express();
const port = 8089;

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: '.'});
});

app.get('/*', (req, res) => {
    res.sendFile('index.html', {root: '.'});
});

app.listen(port, () => console.log(`Start Extranet_V2 server on port : ${port} !`));
