import express from 'express'
import connectMongoose from './mongoose'
import seed from './mongoose/seed'

connectMongoose();
seed();

const app = express();

app.get('/', (req, res) => res.send('hello world'))

app.listen(9090, () => console.log('express listening on port 9090'))
