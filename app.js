const express = require('express')
const bodyParser = require('body-parser');
const { AppRoutes } = require('./app.routes');
const { env } = require('./env');
var cors = require('cors')

const connection = require('./services/db.connection');
// console.log(connection);
const app = express();

app.use(cors())

// module.exports.db_connection = connection()

// console.log(this.db_connection)

app.use(bodyParser.json())
// app.use(express.json())
app.use('/',(req,res,next)=>{
    console.log(req.url)
    next()
},AppRoutes)

app.listen(process.env.PORT,()=>{
    console.log('Server running on port ',process.env.PORT);
})
