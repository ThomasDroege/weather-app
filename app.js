const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if(!location){
    console.log('Please provide a location.')
} else{
    geocode(location, (error, geoData) =>{
        if(error){
            return console.log(error)
        }     
        forecast(geoData.latitude, geoData.longitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
            console.log(geoData.location)
            console.log(forecastData)
            })
    })
}


