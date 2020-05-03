const  path = require('path')
const express = require('express')


const app = express()

// Define paths for Express config 
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

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
        message: 'If you need some help feel free to send me a message'
    })
})


// app.com/weather
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Foggy with the chance of rain',
        location: 'Dortmund'
    })
})





app.listen(3000, () =>{
    console.log('Server is up on port 3000')
})