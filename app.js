const express = require('express');
const app = express();
const path = require('path');

const pathDir = path.join(__dirname, '../');

app.use(express.static(pathDir));

app.get('/', (req, res) => {
    res.send('whatever')
})


console.log(__dirname);
console.log(__filename);
app.listen(4000);
