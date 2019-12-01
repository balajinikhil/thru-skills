const express = require('express')
const hbs = require('hbs')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

app.get('/', (req, res) => {
    let age = 22;
    res.render('index', {
        layout: 'layout',
        title: 'Home',
        name: 'Balaji S',
        htmlData: '<p>Html content</p>',
        hobbies: ['Football', 'Reading', 'Coding'],
        eligibility: age > 18 ? true : false,
        education: {
            degree: 'Bachelors',
            grade: 'A',
            YOP: '2019'
        },
        products: [{
            name: 'Samsung',
            price: 2000
        }, {
            name: 'Moto',
            price: 2000
        }, {
            name: 'MI',
            price: 2000
        }]
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact'
    })
})







app.listen(3002, () => {
    console.log(`server up and running 3002`);

})