const express = require('express');
const ejs = require('ejs');
const app = express();

//EJS public module active 
app.set('view engine','ejs');
//Middle
app.use(express.static('public'));


app.get('/',(req,res) => {
    res.render('index');
});

app.get('/about',(req,res) =>{
    res.render('about');
})
app.get('/add_post',(req,res) =>{
    res.render('add_post');
});




//Port -OP-
const port = 3000;
app.listen(port,()=>{
    console.log(`Port ${port} listening!`);
});
