import express from 'express'
import connectMongoose from './mongoose'

connectMongoose();

const app = express();

app.get('/', (req, res) => res.send('hello world'))

app.listen(9090, () => console.log('express listening on port 9090'))
