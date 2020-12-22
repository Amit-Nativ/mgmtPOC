import express from 'express'
import connectMongoose from './mongoose'
import seed from './mongoose/seed'
import roleRoute from './api/role'

console.log('connecting mongo');
connectMongoose();
console.log('seeding');
seed();
console.log('done');

const app = express();

app.use('/api/roles', roleRoute);
app.get('/', (req, res) => res.send('hello world'))

app.listen(9090, () => console.log('express listening on port 9090'))
