const request = require('request')
const geocode = require('./utils/geocode')

// const weatherURL = 'http://api.weatherstack.com/current?access_key=2688fe4816b5c5768f1a5b371017bab2&query=Dortmund&units=m'

// request({url: weatherURL, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect to weather service!')
//     }
//     else if(response.body.error){
//         console.log('Unable to find location')
//     }
    
//     else{
//         console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature, "degrees out. It feels like "+ response.body.current.feelslike+ " degree out.")
//     }
    
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZHJ0aG9tYXNkciIsImEiOiJjazlkNjJ2cHUwMGJtM25zMGVsMmtpcTg0In0.wloD6fSV5yJVRSQO54w1Jg&limit=1'

// request({url: geocodeURL, json: true}, (error, response ) => {
//     if(error){
//         console.log('Unable to connect to location service!')
//     }
//     else if(response.body.features.length === 0){
//         console.log('Unable to find location. Try another search.')
//     } else{
//         const latitude = response.body.features[0].center[1]
//         const longitude =  response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
    
// })



geocode('Boston', (error, data) =>{
    console.log('Error', error)
    console.log('Data', data)
})