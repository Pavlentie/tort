const express = require('express');
const mongoose = require("mongoose");
const ejs = require('ejs');

const app = express();
const PORT = process.env.PORT || 5000;


//conection to mongodb

mongoose.connect('mongodb://localhost:27017/test', {

    useNewUrlParser: true,

    useUnifiedTopology: true,
});

//middlewares

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");


//app.engine('ejs', require('ejs').__express);

//router
app.use(require('./Router/index'))
app.use(require('./Router/todo'))

app.listen(PORT, () => {
    console.log(`Server Started http://localhost:${PORT}`)
})

