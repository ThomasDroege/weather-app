const  path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config 
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// app.com
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Thomas D.'
    })
})

// app.com/about
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Thomas D.'
    })
})

// app.com/help
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'If you need some help feel free to send me a message',
        name: 'Thomas D.'
    })
})


// app.com/weather
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Foggy with the chance of rain',
        location: 'Dortmund'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Help article not found',
        name: 'Thomas D.'
    })
})

// 404 Handler
// wildcard: * = match everything that didnt get matched before
app.get('*', (req, res) =>{
    res.render('404', {
        title: '404',
        errorMessage: 'Page not found',
        name: 'Thomas D.'
    })
})


app.listen(3000, () =>{
    console.log('Server is up on port 3000')
})