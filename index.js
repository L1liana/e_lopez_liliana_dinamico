//Importamos los paquetes que requerimos
const express = require('express');
const hbs = require('hbs');

//creamos la aplicacion
const app = express();

//Definimos el motor de plantillas
//No de vamos a emplear MVC (Vista vamos a utiisar HBS)
app.set('view engine', 'hbs');

//Vamos a generar los partials
hbs.registerPartials(__dirname + '/views/partials/');

//Generamos el sitio estatico
app.use(express.static(__dirname + '/public'));

//configurar mis rutas
app.get('/', (req, res)=>{
    res.render('index', {
        autor : 'Liliana Rocio López Jiménez',
        year : new Date().getFullYear(),
        title : 'Inicio'
    });
});

app.get('/van', (req, res)=>{
    res.render('van', {
        autor : 'Liliana Rocio López Jiménez',
        year : new Date().getFullYear(),
        title : 'Vincent Van Gogh'
    });
});

app.get('/ed', (req, res)=>{
    res.render('edvar', {
        autor : 'Liliana Rocio López Jiménez',
        year : new Date().getFullYear(),
        title : 'Edvard Munch'
    });
});

app.get('/ad', (req, res)=>{
    res.render('adolf', {
        autor : 'Liliana Rocio López Jiménez',
        year : new Date().getFullYear(),
        title : 'Adolf Wölfli'
    });
});

app.get('/theo', (req, res)=>{
    res.render('kha', {
        autor : 'Liliana Rocio López Jiménez',
        year : new Date().getFullYear(),
        title : 'Théodore Géricault'
    });
});

app.get('/leo', (req, res)=>{
    res.render('leo', {
        autor : 'Liliana Rocio López Jiménez',
        year : new Date().getFullYear(),
        title : 'Leonardo Da Vinci'
    });
});
app.get('/lo', (req, res)=>{
    res.render('lo', {
        autor : 'Liliana Rocio López Jiménez',
        year : new Date().getFullYear(),
        title : 'Louis Wain'
    });
});

//Arrancamos el servisdor web
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});