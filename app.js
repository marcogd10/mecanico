require('dotenv').config();

const express = require('express')
const hbs = require ('hbs');
const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

//Servir contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) => {
  res.render('home', {
    titulo: 'Taller mecánico'
    })
});

app.get('/servicios', (req, res) => {
    res.render('servicios' , {
        titulo: 'Taller mecánico'
        })
  });
  
app.get('/cita', (req, res) => {
    res.render('cita', {
        titulo: 'Taller mecánico'
        })
});


  app.get('*', (req, res) => {
    res.send('404 Page not found')
  });
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
