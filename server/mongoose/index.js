import { connect } from 'mongoose'

export default () => connect('mongodb://localhost:27017/mgmtPoc',
    { useNewUrlParser: true, useUnifiedTopology: true });