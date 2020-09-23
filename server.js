const express = require('express')
const app = express()
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
const path = require('path')

const PORT = process.env.PORT || 3000

const mongoose = require('mongoose')

//Database Connection
const url = 'mongodb+srv://Omkore:Oam@2018@cluster0.5ytva.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect(url, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true, useFindAndModify:true})

const Connection = mongoose.connection;
mongoose.connection.once('open', () =>{
    console.log('Database connected...');
}).catch(err =>{
    console.log('Connection Failed...')
});
//Asset
app.use(express.static('public'))


//set template engine
app.use(expressLayout)
app.set('views' , path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

require('./routes/web')(app)

app.listen(PORT , () =>{
    console.log('Listning on port 3000')
})