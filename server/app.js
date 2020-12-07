import express from 'express'
import { connect } from 'mongoose'

connect('mongodb://localhost:27017/mgmtPoc', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.get('/', (req, res) => res.send('hello world'))

app.listen(9090, () => 'express listening on port 9090')
