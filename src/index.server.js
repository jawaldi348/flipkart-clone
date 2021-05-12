const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');

// environment variable or you can say constants
env.config();

app.use(bodyParser());

app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Hello from server'
    })
})

app.post('/data', (req, res, next) => {
    res.status(200).json({
        message: req.body
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});