const path = require('path'); 
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose'); 

const app = express();

// connection to db
mongoose.connect('mongodb://localhost/sist-cont') //sist-cont nom
    .then(db => console.log('db connected')) 
    .catch(err => console.log(err));


// importing routes
const indexRoutes = require('./routes/index');


// settings

app.set('port', process.env.PORT || 2000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'j')))


// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));


//routes
app.use('/', indexRoutes);



app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});