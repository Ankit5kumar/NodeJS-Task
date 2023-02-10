const express = require('express')
const app = express()
const config = require('./configs/config');
require('./configs/db')
app.use(express.json())
const CategoryRoute = require('./Route/CategoryRoute')
const ProductRoute = require('./Route/ProductRoute')


app.get('/', (req, res) => {
    res.status(201).send({msg: 'Hello welcome to hiring app'})
})
app.use(CategoryRoute)
app.use(ProductRoute)
// Server file
app.listen(config.port,()=>{
    console.log('listening on port '+ config.port)
})