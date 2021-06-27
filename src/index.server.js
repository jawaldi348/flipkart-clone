const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// environment variable or you can say constants
env.config();

// Koneksi mongodb Driver: Node.js Version: 2.2.12 or later
// mongodb://root:<password>@cluster0-shard-00-00.wio8y.mongodb.net:27017,cluster0-shard-00-01.wio8y.mongodb.net:27017,cluster0-shard-00-02.wio8y.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-udto7u-shard-0&authSource=admin&retryWrites=true&w=majority
mongoose.connect(
    `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0-shard-00-00.wio8y.mongodb.net:27017,cluster0-shard-00-01.wio8y.mongodb.net:27017,cluster0-shard-00-02.wio8y.mongodb.net:27017/${process.env.MONGO_DB_DATABASE}?ssl=true&replicaSet=atlas-udto7u-shard-0&authSource=admin&retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log('Database connected!');
});

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